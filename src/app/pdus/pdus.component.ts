import { Component, OnInit } from '@angular/core';
import { PDUS } from '../mock-pdus';

@Component({
  selector: 'app-pdus',
  templateUrl: './pdus.component.html',
  styleUrls: ['./pdus.component.css']
})
export class PdusComponent implements OnInit {

  pdus = PDUS;

  constructor() { }

  ngOnInit(): void {
  }

}
