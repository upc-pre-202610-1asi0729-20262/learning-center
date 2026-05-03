import { BaseEntity } from '../domain/model/base-entity';
import { BaseResource, BaseResponse } from './base-response';

/**
 * Infrastructure mapper between domain entities and external API contracts.
 *
 * @typeParam TEntity - Domain entity type.
 * @typeParam TResource - Infrastructure resource contract returned/sent to APIs.
 * @typeParam TResponse - Infrastructure response envelope contract.
 */
export interface BaseAssembler<TEntity extends BaseEntity,
  TResource extends BaseResource,
  TResponse extends BaseResponse> {
  /** Maps one infrastructure resource to a domain entity. */
  toEntityFromResource(resource: TResource): TEntity;
  /** Maps one domain entity to an infrastructure resource contract. */
  toResourceFromEntity(entity: TEntity): TResource;
  /** Maps a response envelope to a domain entity collection. */
  toEntitiesFromResponse(response: TResponse): TEntity[];
}
