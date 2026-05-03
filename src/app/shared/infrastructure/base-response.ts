/**
 * Marker contract for HTTP response envelopes in the infrastructure layer.
 */
export interface BaseResponse {}

/**
 * Base shape for infrastructure resources exchanged with remote APIs.
 */
export interface BaseResource {
  id: number;
}
