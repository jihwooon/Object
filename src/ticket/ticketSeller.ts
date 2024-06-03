import { TicketOffice } from './ticketOffice';

export class TicketSeller {
  private readonly ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  get getTicketOffice(): TicketOffice {
    return this.ticketOffice;
  }
}
