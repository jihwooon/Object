import { Ticket } from './ticket';

export class TicketOffice {
  constructor(private amount: number, private tickets: Array<Ticket>) {}

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
