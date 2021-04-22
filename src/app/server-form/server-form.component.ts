import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServerService } from '../server.service';

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
    power: '',
  });

  onSubmit(): void {
    console.warn('New server added to pool', this.newServerForm.value);
    this.serverService.addServer(this.newServerForm.value);
    this.newServerForm.reset();
  }

}
