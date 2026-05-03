import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Infrastructure resource contract describing a user from IAM endpoints.
 */
export interface UserResource extends BaseResource {
  id: number;
  username: string;
}

/**
 * Infrastructure response envelope for user collection queries.
 */
export interface UsersResponse extends BaseResponse {
  courses: UserResource[];
}
