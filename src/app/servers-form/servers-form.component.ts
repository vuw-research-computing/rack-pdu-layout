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
    private formBuilder: FormBuilder,
    ) {}

  newServersForm = this.formBuilder.group({
    upload: ''
  });

  onSubmit(): void {
    console.warn('New server added to pool', this.newServersForm.value);
    this.serverService.addServer(this.newServersForm.value);
    this.newServersForm.reset();
  }

}
