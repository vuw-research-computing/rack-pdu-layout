import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  constructor() { }

  rackSet = new Set();
  //rackArray = [];

  addRack(rack) {
    //this.rackSet.add(rack);
    this.rackSet.add(rack);
    //console.log(this.rackArray);
  }

  getRacks() {
    console.log(this.rackSet);
    return this.rackSet;
  }

} 
