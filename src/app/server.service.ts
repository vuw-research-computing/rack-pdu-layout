import { Injectable } from '@angular/core';
import { Server } from './server';
//import { SERVERS } from './mock-servers';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  serverArray: Server[] = [];

  getServers(): Server[] {
    return this.serverArray;
  }

  addServer(Server) {
    this.serverArray.push(Server);
    console.log(this.serverArray);
  }

}
