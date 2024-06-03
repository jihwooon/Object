import { Bag } from './bag';

export class Audience {
  private readonly bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  get getBag(): Bag {
    return this.bag;
  }
}
