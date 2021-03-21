import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Server } from './server';
import { ServerFormComponent } from './server-form/server-form.component';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Calculator';

  servers: Server[];

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.getServers();
  }

  getServers(): void {
    this.servers = this.serverService.getServers()
    
  }

  // getServers(): void {
  //   this.servers = this.serverService.getServers();
  // }

  // ngOnInit() {
  //   this.getServers();
  // }

//   todo = [
//     'Get to work',
//     'Pick up groceries',
//     'Go home',
//     'Fall asleep'
//   ];

//   done = [
//     'Get up',
//     'Brush teeth',
//     'Take a shower',
//     'Check e-mail',
//     'Walk dog'
//   ];

//   third = [

//   ];

//   testarray = [
// '1',
// '2',
// '3'
//   ];

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

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

