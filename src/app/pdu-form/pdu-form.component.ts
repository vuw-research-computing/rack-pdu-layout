import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PduService } from '../pdu.service';

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

  onSubmit(): void {
    console.warn('New PDU added', this.newpduForm.value);
    this.pduService.addPdu(this.newpduForm.value);
    this.newpduForm.reset();
  }

}
