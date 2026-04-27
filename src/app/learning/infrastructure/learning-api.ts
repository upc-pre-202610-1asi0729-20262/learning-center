import { Injectable } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { CategoriesApiEndpoint } from './categories-api-endpoint';
import { HttpClient } from '@angular/common/http';
import { Category } from '../domain/model/category.entity';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LearningApi extends BaseApi {
  private readonly categoriesEndpoint: CategoriesApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.categoriesEndpoint = new CategoriesApiEndpoint(http);
  }

  getCategories(): Observable<Category[]> {
    return this.categoriesEndpoint.getAll();
  }

  getCategory(id: number): Observable<Category> {
    return this.categoriesEndpoint.getById(id);
  }

  createCategory(category: Category) {
    return this.categoriesEndpoint.create(category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.categoriesEndpoint.update(category, category.id);
  }

  deleteCategory(id: number): Observable<void> {
    return this.categoriesEndpoint.delete(id);
  }
}
