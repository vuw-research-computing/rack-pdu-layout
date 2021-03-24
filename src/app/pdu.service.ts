import { Injectable } from '@angular/core';

import { MOCKPDUS } from './mock-pdus';

@Injectable({
  providedIn: 'root'
})
export class PduService {

  constructor() { }

  pduArray = [];

  mockPdus = MOCKPDUS;

  addPdu(pdu) {
    this.pduArray.push(pdu);
    // console.log(this.pduArray);
  }

  getPdus() {
    return this.pduArray;
  }

  getMockPdus() {
    return this.mockPdus;
  }

}
