import {CourseResource, CoursesResponse} from './courses-response';
import {Course} from '../domain/model/couse.entity';
import {BaseAssembler} from '../../shared/infrastructure/base-assembler';

/**
 * Maps course domain entities to and from infrastructure contracts.
 */
export class CourseAssembler implements BaseAssembler<Course, CourseResource, CoursesResponse> {
  /**
   * Maps a course response envelope into domain entities.
   * @param response - Infrastructure response containing course resources.
   * @returns Domain entities for the learning application layer.
   */
  toEntitiesFromResponse(response: CoursesResponse): Course[] {
    console.log(response);
    return response.courses.map(resource => this.toEntityFromResource(resource as CourseResource));
  }

  /**
   * Maps one course resource contract into a domain entity.
   * @param resource - Infrastructure contract to convert.
   * @returns Course entity.
   */
  toEntityFromResource(resource: CourseResource): Course {
    return new Course({
      id: resource.id,
      title: resource.title,
      description: resource.description,
      categoryId: resource.categoryId
    });
  }

  /**
   * Maps one course domain entity into an infrastructure resource contract.
   * @param entity - Domain entity to convert.
   * @returns Resource contract expected by the remote API.
   */
  toResourceFromEntity(entity: Course): CourseResource {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      categoryId: entity.categoryId
    } as CourseResource;
  }
}
