import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  // serverArray: Server[] = [];

  serverArray = [];

  addServer(server) {
    this.serverArray.push(server);
    console.log(this.serverArray);
  }

  getServers() {
    return this.serverArray;
  }

}
