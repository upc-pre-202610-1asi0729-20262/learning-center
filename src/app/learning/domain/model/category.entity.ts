import { BaseEntity } from '../../../shared/domain/model/base-entity';

/**
 * Category entity in the Learning bounded context.
 */
export class Category implements BaseEntity {
  /**
   * Creates a category entity instance.
   * @param props - Identity and name values.
   */
  constructor(props: {id: number; name: string}) {
    this._id = props.id;
    this._name = props.name;
  }
  private _id: number;
  private _name: string;

  get name(): string { return this._name;}

  set name(value: string) {this._name = value;}

  get id(): number {return this._id;}

  set id(value: number) {this._id = value;}

}
