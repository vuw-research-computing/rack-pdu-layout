import { Component, OnInit } from '@angular/core';
import { PduService } from './../pdu.service';


@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css']
})
export class ControlFormComponent implements OnInit {

  constructor(private pduService: PduService) { }

  tempoutput;


  formatForOutput(): void {
 //   var tempoutputstring;
    console.log("testing trigger");
    var csvstring = '';
    let templayout = this.pduService.getPdus();
    for (let t = 0; t < templayout.length; t++) {
      csvstring += '"' + templayout[t].label + ',' + templayout[t].location + '"\n';
      console.log(csvstring);
    }
    //console.log(templayout);
  }


  onExport(): void {
    let timeStamp = new Date();
    let fName = 'pcalc_export_' + timeStamp.toLocaleDateString();
    let hw = JSON.stringify(this.pduService.getPdus());
    let fData = new Blob([hw], { type: 'text/csv' });
    let fUrl = URL.createObjectURL(fData);

    this.formatForOutput();

    let hiddenElement = document.createElement('a');
    hiddenElement.href = fUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = fName + '.csv';
    hiddenElement.click();
  }

  onReset(): void {
    location.reload();
  }


  ngOnInit(): void {
    this.tempoutput = this.pduService.getPdus();
  }

}
