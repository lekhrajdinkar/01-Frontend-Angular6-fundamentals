import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class OpacHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigate(feature: string){
  console.log("test");
  }

}
