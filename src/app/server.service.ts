import { Injectable } from '@angular/core';

import { MOCKSERVERS } from './mock-servers';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  serverArray = [];

  mockServers = MOCKSERVERS;  

  addServer(server) {
    this.serverArray.push(server);
    console.log(this.serverArray);
  }

  getServers() {
    return this.serverArray;
  }

  getMockServers() {
    return this.mockServers;
  }

}
