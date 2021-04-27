import { Server } from './server';

export class Pdu {

  constructor(
    public label: string,
//    public size: number,
    public totalpower: number,
    public location: string,
    public poweravail: number,
    public servercontainer: Server[] = []
  ) {}
  }
