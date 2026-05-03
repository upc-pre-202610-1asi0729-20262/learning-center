import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Course} from '../domain/model/couse.entity';
import {CourseResource, CoursesResponse} from './courses-response';
import {CourseAssembler} from './course-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


/**
 * Infrastructure endpoint client for course CRUD integration.
 */
export class CoursesApiEndpoint extends BaseApiEndpoint<Course, CourseResource, CoursesResponse, CourseAssembler> {
  /**
   * Creates a course endpoint adapter.
   * @param http - Angular HTTP client used to call the remote API.
   */
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.platformProviderCoursesEndpointPath}`, new CourseAssembler());
  }
}
