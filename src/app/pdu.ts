import { Server } from './server';

export class Pdu {

  constructor(
//    public id: number,
    public label: string,
//    public size: number,
    public totalpower: number,
    public poweravail: number,
    public servercontainer: Server[] = []
  ) {}
  }
