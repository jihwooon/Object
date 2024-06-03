import { Invitation } from './invitation';
import { Ticket } from './ticket';

export class Bag {
  private amount: number;

  private invitation: Invitation;

  private ticket: Ticket;

  constructor(invitation: Invitation, amount: number) {
    this.invitation = invitation;
    this.amount = amount;
  }

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
}
