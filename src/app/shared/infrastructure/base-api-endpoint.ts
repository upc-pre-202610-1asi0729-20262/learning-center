import { BaseEntity } from '../domain/model/base-entity';
import { BaseResource, BaseResponse } from './base-response';
import { BaseAssembler } from './base-assembler';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

/**
 * Reusable infrastructure endpoint for CRUD interactions with remote APIs.
 *
 * @remarks
 * This class is part of the infrastructure layer and translates transport
 * contracts into domain entities through an assembler.
 *
 * @typeParam TEntity - Domain entity returned to upper layers.
 * @typeParam TResource - Infrastructure resource contract for single records.
 * @typeParam TResponse - Infrastructure response envelope contract.
 * @typeParam TAssembler - Mapper between domain entities and infrastructure contracts.
 */
export abstract class BaseApiEndpoint<
  TEntity extends BaseEntity,
  TResource extends BaseResource,
  TResponse extends BaseResponse,
  TAssembler extends BaseAssembler<TEntity, TResource, TResponse>> {
  protected constructor(
    protected http: HttpClient,
    protected endpointUrl: string,
    protected assembler: TAssembler
  ) {}

  /**
   * Loads all records from the endpoint and maps them to domain entities.
   */
  getAll(): Observable<TEntity[]> {
    return this.http.get<TResponse | TResource[]>(this.endpointUrl).pipe(
      map(response => {
        console.log(response);
        if (Array.isArray(response)) {
          return response.map(resource => this.assembler.toEntityFromResource(resource));
        }
        return this.assembler.toEntitiesFromResponse(response as TResponse);
      }),
      catchError(this.handleError('Failed to fetch entities'))
    );
  }

  /**
   * Builds an operation-scoped HTTP error mapper.
   */
  protected handleError(operation: string) {
    return (error: HttpErrorResponse): Observable<never> => {
      let errorMessage = operation;
      if (error.status === 404) {
        errorMessage = `${operation}: Resource not found:`;
      } else if (error.error instanceof ErrorEvent) {
        errorMessage = `${operation}: ${error.error.message}`;
      } else {
        errorMessage = `${operation}: ${error.status} || 'Unexpected error'`;
      }
      return throwError(() => new Error(errorMessage));
    }
  }

  /**
   * Loads one record by identifier and maps it to a domain entity.
   */
  getById(id: number): Observable<TEntity> {
    return this.http.get<TResource>(`${this.endpointUrl}/${id}`).pipe(
      map(resource => this.assembler.toEntityFromResource(resource)),
      catchError(this.handleError('Failed to fetch entity')));
  }

  /**
   * Persists a new domain entity through the infrastructure endpoint.
   */
  create(entity: TEntity): Observable<TEntity> {
    const resource = this.assembler.toResourceFromEntity(entity);
    return this.http.post<TResource>(this.endpointUrl, resource).pipe(
      map(created => this.assembler.toEntityFromResource(created)),
      catchError(this.handleError('Failed to create entity')));
  }

  /**
   * Persists changes of a domain entity identified by `id`.
   */
  update(entity: TEntity, id: number): Observable<TEntity> {
    const resource = this.assembler.toResourceFromEntity(entity);
    return this.http.put<TResource>(`${this.endpointUrl}/${id}`, resource).pipe(
      map(updated => this.assembler.toEntityFromResource(updated)),
      catchError(this.handleError('Failed to update entity')));
  }

  /**
   * Deletes one record by identifier.
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`).pipe(
      catchError(this.handleError('Failed to delete entity')));
  }
}
