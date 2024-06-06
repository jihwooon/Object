import { Invitation } from './invitation';
import { Ticket } from './ticket';

export class Bag {
  private ticket: Ticket;

  constructor(private invitation: Invitation, private amount: number) {}

  public hasInvitation(): boolean {
    return this.ticket != null;
  }

  public setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  public minusAmount(amount: number) {
    this.amount -= amount;
  }

  public plusAmount(amount: number) {
    this.amount += amount;
  }

  public hold(ticket: Ticket) {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    }

    this.setTicket(ticket);
    this.minusAmount(ticket.getFee);

    return ticket.getFee;
  }
}
