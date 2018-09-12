import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Report } from './report.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('f') rptForm: NgForm;
  submitted : boolean = false ;
  rptDTO : Report ;

  defaultRptAbbr : string = 'OPR_ABC_1'//1 way binding, B > F
  rpt_types = ['BATCH','ON-DEMAND','SYSTEM-GENERATED'];
  desc : string

  constructor() { }

  ngOnInit() {  console.log(this.rptForm);}


    onSubmit() {
      this.submitted = true;
      console.log(this.rptForm);

      this.rptDTO = new Report();
      this.rptDTO.name = this.rptForm.value.rptData.rptname;
      this.rptDTO.abbr = this.rptForm.value.rptData.rptabbr;
      this.rptDTO.type = this.rptForm.value.rpttype;
      this.rptDTO.format = this.rptForm.value.format;
      this.rptDTO.email = this.rptForm.value.email;

      console.log(this.rptDTO);
  
      this.rptForm.reset();
    }
  
//All registered controlls needs to be set.
  setvalue(){
    const suggestedName = 'ORPHAN AUTH REPORT';

    this.rptForm.setValue({
      rptData: {
        rptname: suggestedName,
        rptabbr: 'OPAC_XYZ_2'
      },
      email: 'inylbd@doremon.com',
      format: 'pdf',
      rpttype: 'ON-DEMAND',
      desc : 'This is On-demand report in PDF format.'
    });
  }

  patch(){
    const suggestedName = 'ORPHAN AUTH REPORT';

    this.rptForm.form.patchValue({
      rptData: {
        rptname: suggestedName,
        rptabbr: 'OPAC_XYZ_2'
      },
      // email: 'inylbd@doremon.com',
      // format: 'pdf',
      // rpttype: 'BATCH'
    });
  }

  reset(){
    this.rptForm.reset();
    this.submitted = true;
  }

}
