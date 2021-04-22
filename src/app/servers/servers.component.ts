import { Component, OnInit } from '@angular/core';
import { MOCKSERVERS } from '../mock-servers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = MOCKSERVERS;

  constructor() { }

  ngOnInit(): void {
  }

}
