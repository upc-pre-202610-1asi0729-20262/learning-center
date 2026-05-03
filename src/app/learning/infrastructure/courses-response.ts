import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Infrastructure resource contract representing a course record.
 */
export interface CourseResource extends BaseResource {
  /**
   * Unique identifier for the course.
   */
  id: number;
  /**
   * Title of the course.
   */
  title: string;
  /**
   * Description of the course.
   */
  description: string;

  /**
   * Identifier for the category this course belongs to.
   */
  categoryId: number;
}

/**
 * Infrastructure response envelope for course collection queries.
 */
export interface CoursesResponse extends BaseResponse {
  /**
   * Array of course resources included in the response.
   */
  courses: CourseResource[];
}
