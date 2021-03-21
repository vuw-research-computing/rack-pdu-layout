import { Component } from '@angular/core';
import { Server } from '../server';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent {

  constructor(private serverService: ServerService) {}

//  type = ['Dell CX610', 'NVIDIA A100', 'C10', 'NewA C1'];
//  model = new Server(18, 'c030r5', this.type[0], 2, 3.8);
  model = new Server(18, 'c030r5', 2, 3.8);
  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newServer() {
    this.model = new Server(0, '', 0, 0);
    this.serverService.addServer(this.model);
  }

  // serverArray: Server[] = [];

  // newServer() {
  //   this.servermodel = new Server(0, '', '', 0, 0);
  //   this.serverArray.push(this.servermodel);
  //   console.log(this.serverArray);
  // }

  // addNewServer(){
  //   this.serverArray.push({ id: 1, name: 'NewA C1', type: 'NewA C1', size: 2, power: 6.666666667 });
  //   console.log(this.serverArray);
  // }

}
