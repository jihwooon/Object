import { Audience } from './audience';
import { TicketSeller } from './ticketSeller';

export class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  public enter(audience: Audience): void {
    this.ticketSeller.sellTo(audience);
  }
}
