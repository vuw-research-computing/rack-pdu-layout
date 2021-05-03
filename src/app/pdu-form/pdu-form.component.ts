import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PduService } from '../pdu.service';
import { RackService } from '../rack.service';
import { Pdu } from '../pdu';
import { Rack } from '../rack';
import { Server } from '../server';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-pdu-form',
  templateUrl: './pdu-form.component.html',
  styleUrls: ['./pdu-form.component.css']
})
export class PduFormComponent {

  constructor(
    private pduService: PduService,
    private rackService: RackService,
    private formBuilder: FormBuilder,
  ) { }

  newpduForm = this.formBuilder.group({
    label: '',
    totalpower: '',
    location: ''
  });

  placeholder: Server[];

  onSubmit(): void {
    
    let newpdu = new Pdu(this.newpduForm.value.label, this.newpduForm.value.totalpower, this.newpduForm.value.totalpower, this.newpduForm.value.location, this.placeholder);
    // console.warn('New PDU added', newpdu);
    this.pduService.addPdu(newpdu);
    this.newpduForm.reset();
  }

  pduFileContent;
  pduLines;

  onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.pduFileContent = fileReader.result;
      self.pduLines = self.pduFileContent.split(/\r\n|\n\r|\n|\r/);
      self.pduLines.forEach((line) => {
        if (line.length > 0) {
        var pduInfo = line.split(',');
        var newPdu = {label: pduInfo[0], totalpower: parseFloat(pduInfo[1]), poweravail: parseFloat(pduInfo[1]), location: pduInfo[2], servercontainer: []}
        //console.log(newPdu);
        //console.log(pduInfo[2]);
        self.pduService.addPdu(newPdu);
        self.rackService.addRack(pduInfo[2]);
      }
    });

    }
    fileReader.readAsText(file);
   
  }

}
