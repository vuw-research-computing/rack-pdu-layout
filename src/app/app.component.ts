import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ServerService } from './server.service';
import { PduService } from './pdu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Power Calculator';

  constructor(
    private serverService: ServerService,
    private pduService: PduService,
    ) {}

  servers;
  pdus;
  placeholder1 = [];
  placeholder2 = [];
  placeholder3 = [];

  // ngOnInit(): void {
  //   this.servers = this.serverService.getServers();
  //   this.pdus = this.pduService.getPdus();
  // }

    ngOnInit(): void {
  this.servers = this.serverService.getMockServers();
    this.pdus = this.pduService.getPdus();
  }

  // ngOnInit(): void {
  //   this.servers = this.serverService.getServers();
  //   this.pdus = this.pduService.getMockPdus();
  // }

    // ngOnInit(): void {
  //   this.servers = this.serverService.getMockServers();
  //   this.pdus = this.pduService.getMockPdus();
  // }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}

