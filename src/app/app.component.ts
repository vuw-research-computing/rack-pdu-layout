import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import  *  as math from 'mathjs';

import { ServerService } from './server.service';
import { PduService } from './pdu.service';
import { RackService } from './rack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rack PDU Layout tool';

  constructor(
    private serverService: ServerService,
    private pduService: PduService,
    private rackService: RackService
  ) { }

  servers;
  pdus;
  racks;

  //MOCKRACKS: string[] = [ 'rack4', 'rack7' ];

  initPower() {
    //console.log("initialise");
    for (let p of this.pdus) {
      p.poweravail = p.totalpower;
    }
  }

  calculatePowerMathjs() {
    //console.log("calculatemjs");
    for (let p of this.pdus) {
      p.poweravail = p.totalpower;
      for (let s of p.servercontainer) {
        let frpa = math.fraction(p.poweravail);
        let frpo = math.fraction(s.power_draw);

        p.poweravail = math.subtract(frpa, frpo);
//        console.log(p.totalpower, p.poweravail, s.power);
      }
    }
  }

  ngOnInit(): void {
    this.servers = this.serverService.getServers();
    //console.log(this.pduService.getPdus());
    this.pdus = this.pduService.getPdus();
    this.racks = this.rackService.getRacks();
    //console.log(this.racks);
  }

  // ngOnInit(): void {
  //   this.servers = this.serverService.getMockServers();
  //   this.pdus = this.pduService.getPdus();
  // }

  // ngOnInit(): void {
  //   this.servers = this.serverService.getServers();
  //   this.pdus = this.pduService.getMockPdus();
  //  this.initPower();
  // }

  // ngOnInit(): void {
  //   this.servers = this.serverService.getMockServers();
  //   console.log(this.servers);
  //   this.pdus = this.pduService.getMockPdus();
  //   this.initPower();
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.calculatePowerMathjs();
    }

  }

}

