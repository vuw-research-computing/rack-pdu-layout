import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServerService } from '../server.service';
import { Server } from '../server';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent {

  constructor(
    private serverService: ServerService,
    private formBuilder: FormBuilder,
    ) {}

  newServerForm = this.formBuilder.group({
    name: '',
    server_type: '',
    power_draw: '',
    network: ''
  });

  onSubmit(): void {
    //console.warn('New server added to pool', this.newServerForm.value);
    this.serverService.addServer(this.newServerForm.value);
    this.newServerForm.reset();
  }

  serverFileContent;
  serverLines;

  onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.serverFileContent = fileReader.result;
      self.serverLines = self.serverFileContent.split(/\r\n|\n\r|\n|\r/);
      self.serverLines.forEach((line) => {
        if (line.length > 0) {
        var serverInfo = line.split(',');
        var newServer = {name: serverInfo[0], server_type: serverInfo[1], power_draw: parseFloat(serverInfo[2]), network: serverInfo[3]}
        //console.log(newServer);
        self.serverService.addServer(newServer);
      }
    });

    }
    fileReader.readAsText(file);
   
  }

}
