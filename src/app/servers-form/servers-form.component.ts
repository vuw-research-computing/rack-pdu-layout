import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-servers-form',
  templateUrl: './servers-form.component.html',
  styleUrls: ['./servers-form.component.css']
})
export class ServersFormComponent {

  constructor(
    private serverService: ServerService,
  //  private formBuilder: FormBuilder,
    ) {}

  serverFileContent;
  serverLines;

  // newServersForm = this.formBuilder.group({
  //   upload: ''
  // });

  onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.serverFileContent = fileReader.result;
      //console.log(self.serverFileContent);
      self.serverLines = self.serverFileContent.split(/\r\n|\n\r|\n|\r/);
      //console.log(self.serverLines);
     // self.serverLines.forEach(line => console.log(line));

      self.serverLines.forEach((line) => {
        if (line.length > 0) {
        var serverInfo = line.split(',');
        var newServer = {name: serverInfo[0], server_type: serverInfo[1], power_draw: parseFloat(serverInfo[2]), network: serverInfo[3]}
        //var newString = 'name: "' + serverInfo[0] + '", server_type: "' + serverInfo[1] + '", power_draw: ' + serverInfo[2] + ', network: "' + serverInfo[3] + '"';
        console.log(newServer);
        self.serverService.addServer(newServer);
      }
    });

    }
    fileReader.readAsText(file);
    
//console.log(this.serverLines);
    // console.warn('Servers added to pool', this.newServersForm.value);
    // this.serverService.addServer(this.newServersForm.value);
    // this.newServersForm.reset();
  }



}
