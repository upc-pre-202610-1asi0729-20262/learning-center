import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

/**
 * Infrastructure resource contract for category payloads.
 */
export interface CategoryResource extends BaseResource {
  id: number;
  name: string;
}

/**
 * Infrastructure response envelope used by category collection queries.
 */
export interface CategoriesResponse extends BaseResponse {
  categories: CategoryResource[];
}
