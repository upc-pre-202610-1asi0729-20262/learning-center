import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { Category } from '../domain/model/category.entity';
import { CategoriesResponse, CategoryResource } from './categories-response';

/**
 * Maps category infrastructure contracts to domain entities and back.
 */
export class CategoryAssembler implements BaseAssembler<Category, CategoryResource, CategoriesResponse>{
  /** Maps a category collection response envelope into domain entities. */
  toEntitiesFromResponse(response: CategoriesResponse): Category[] {
    return response.categories.map(resource => this.toEntityFromResource(resource));
  }

  /** Maps one category resource contract into a domain entity. */
  toEntityFromResource(resource: CategoryResource): Category {
    return new Category({id: resource.id, name: resource.name});
  }

  /** Maps one category domain entity into an infrastructure resource contract. */
  toResourceFromEntity(entity: Category): CategoryResource {
    return {id: entity.id, name: entity.name} as CategoryResource;
  }

}
