import { TicketOffice } from './ticketOffice';
import { Audience } from './audience';

export class TicketSeller {
  constructor(private ticketOffice: TicketOffice) {}

  sellTo(audience: Audience) {
    this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket));
  }
}
