import { Bag } from './bag';
import { Ticket } from './ticket';

export class Audience {
  constructor(private bag: Bag) {}

  buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}
