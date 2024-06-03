import { Ticket } from './ticket';

export class TicketOffice {
  private amount: number;

  private tickets: Array<Ticket>;

  constructor(amount: number, tickets: Array<Ticket>) {
    this.amount = amount;
    this.tickets = tickets;
  }

  get getTicket(): Ticket {
    return this.tickets.pop();
  }

  public minusAmount(amount: number): void {
    this.amount -= amount;
  }

  public plusAmount(amount: number): void {
    this.amount += amount;
  }
}
