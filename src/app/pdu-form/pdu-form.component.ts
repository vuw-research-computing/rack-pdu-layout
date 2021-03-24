import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PduService } from '../pdu.service';
import { Pdu } from '../pdu';
import { Server } from '../server';

@Component({
  selector: 'app-pdu-form',
  templateUrl: './pdu-form.component.html',
  styleUrls: ['./pdu-form.component.css']
})
export class PduFormComponent {

  constructor(
    private pduService: PduService,
    private formBuilder: FormBuilder,
  ) { }

  newpduForm = this.formBuilder.group({
    label: '',
    totalpower: ''
  });

  placeholder: Server[];

  onSubmit(): void {
    
    let newpdu = new Pdu(this.newpduForm.value.label, this.newpduForm.value.totalpower, this.newpduForm.value.totalpower, this.placeholder);
    // console.warn('New PDU added', newpdu);
    this.pduService.addPdu(newpdu);
    this.newpduForm.reset();
  }

}
