import { Audience } from './audience';
import { TicketSeller } from './ticketSeller';

export class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  public enter(audience: Audience): void {
    if (audience.getBag.hasInvitation()) {
      const ticket = this.ticketSeller.getTicketOffice.getTicket;
      audience.getBag.setTicket(ticket);
    } else {
      const ticket = this.ticketSeller.getTicketOffice.getTicket;
      audience.getBag.minusAmount(ticket.getFee);
      this.ticketSeller.getTicketOffice.plusAmount(ticket.getFee);
      audience.getBag.setTicket(ticket);
    }
  }
}
