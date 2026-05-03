import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { CategoriesResponse, CategoryResource } from './categories-response';
import { Category } from '../domain/model/category.entity';
import { CategoryAssembler } from './category-assembler';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const categoriesEndpointUrl = `${environment.platformProviderApiBaseUrl}${environment.platformProviderCategoriesEndpointPath}`;

/**
 * Infrastructure endpoint client for category CRUD integration.
 */
export class CategoriesApiEndpoint extends
  BaseApiEndpoint<Category, CategoryResource, CategoriesResponse, CategoryAssembler>{
  /**
   * Creates a category endpoint adapter.
   * @param http - Angular HTTP client used to call the remote API.
   */
  constructor(http: HttpClient) {
    super(http, categoriesEndpointUrl, new CategoryAssembler());
  }
}
