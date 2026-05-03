import {SignUpRequest} from './sign-up.request';
import {SignUpCommand} from '../domain/model/sign-up.command';
import {SignUpResource, SignUpResponse} from './sign-up-response';

/**
 * Infrastructure mapper for IAM sign-up commands and API contracts.
 */
export class SignUpAssembler {
  /**
   * Maps a sign-up response contract into a resource consumed by the application layer.
   * @param response - Infrastructure response contract returned by the sign-up endpoint.
   * @returns Sign-up resource contract.
   */
  toResourceFromResponse(response: SignUpResponse): SignUpResource {
    return {
      id: response.id,
      username: response.username,
    } as SignUpResource;
  }

  /**
   * Maps a sign-up command into the request contract expected by the API.
   * @param command - Domain command with account credentials.
   * @returns Infrastructure request contract.
   */
  toRequestFromCommand(command: SignUpCommand): SignUpRequest {
    return {
      username: command.username,
      password: command.password,
    } as SignUpRequest;
  }
}
