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


  formatForOutput(): string {
    //   var tempoutputstring;
    console.log("testing trigger");
    var csvstring = '';
    let templayout = this.pduService.getPdus();
    for (let i = 0; i < templayout.length; i++) {
      //      csvstring += '"' + templayout[i].label + ',' + templayout[i].location + '"\n';
      console.log(templayout[i].servercontainer.length);
      for (let j = 0; j < templayout[i].servercontainer.length; j++) {
        csvstring += templayout[i].label + ',' + templayout[i].location + ',' + templayout[i].servercontainer[j].name + '\n';
        console.log(csvstring);
      }
    }
    return csvstring;
    //console.log(templayout);
  }

  onExport(): void {
    let timeStamp = new Date();
    let fName = 'pcalc_export_' + timeStamp.toLocaleDateString();
    let hw = this.formatForOutput();
    //let hw = JSON.stringify(this.pduService.getPdus());
    let fData = new Blob([hw], { type: 'text/csv' });
    let fUrl = URL.createObjectURL(fData);

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
