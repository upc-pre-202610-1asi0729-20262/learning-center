import {SignInResource, SignInResponse} from './sign-in-response';
import {SignInCommand} from '../domain/model/sign-in.command';
import {SignInRequest} from './sign-in.request';

/**
 * Infrastructure mapper for IAM sign-in commands and API contracts.
 */
export class SignInAssembler {
  /**
   * Maps a sign-in response contract into a resource consumed by the application layer.
   * @param response - Infrastructure response contract returned by the sign-in endpoint.
   * @returns Sign-in resource contract.
   */
  toResourceFromResponse(response: SignInResponse): SignInResource {
    return {
      id: response.id,
      username: response.username,
      token: response.token,
    } as SignInResource;
  }

  /**
   * Maps a sign-in command into the request contract expected by the API.
   * @param command - Domain command with credentials.
   * @returns Infrastructure request contract.
   */
  toRequestFromCommand(command: SignInCommand): SignInRequest {
    return {
      username: command.username,
      password: command.password,
    } as SignInRequest;
  }
}
