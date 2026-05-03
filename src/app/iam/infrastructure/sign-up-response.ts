import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Infrastructure resource contract returned by the sign-up endpoint.
 */
export interface SignUpResource extends BaseResource {
  id: number;
  username: string;
}

/**
 * Infrastructure response contract returned by the sign-up endpoint.
 */
export interface SignUpResponse extends BaseResponse, SignUpResource {}
