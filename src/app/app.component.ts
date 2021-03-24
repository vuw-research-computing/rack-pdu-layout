import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import  *  as math from 'mathjs';

import { ServerService } from './server.service';
import { PduService } from './pdu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Power Calculator';

  constructor(
    private serverService: ServerService,
    private pduService: PduService,
  ) { }

  servers;
  pdus;

  initPower() {
    console.log("initialise");
    for (let p of this.pdus) {
//      console.log(p.poweravail);
      p.poweravail = p.totalpower;
//      console.log(p.poweravail);
    }
  }

//   calculatePower() {
//     console.log("calculate");
//     for (let p of this.pdus) {
//       p.poweravail = p.totalpower;
// //      console.log(p.poweravail);
//       for (let s of p.servercontainer) {
//         p.poweravail = (p.poweravail - s.power);
// //        console.log(p.totalpower, p.poweravail, s.power);
//       }
//     }
//   }

  calculatePowerMathjs() {
    console.log("calculatemjs");
    for (let p of this.pdus) {
      p.poweravail = p.totalpower;
//      console.log(p.poweravail);
      for (let s of p.servercontainer) {
        let frpa = math.fraction(p.poweravail);
        let frpo = math.fraction(s.power);

        p.poweravail = math.subtract(frpa, frpo);
//        console.log(p.totalpower, p.poweravail, s.power);
      }
    }
  }

  ngOnInit(): void {
    this.servers = this.serverService.getServers();
    this.pdus = this.pduService.getPdus();
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

