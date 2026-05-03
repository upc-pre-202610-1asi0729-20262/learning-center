/**
 * Base contract for domain entities across bounded contexts.
 *
 * @remarks
 * This type belongs to the domain layer and captures identity semantics.
 */
export interface BaseEntity {
  id: number;
}
