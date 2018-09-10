import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../asset.model';

@Component({
  selector: 'opac-asset-list-item',
  templateUrl: './asset-list-item.component.html',
  styleUrls: ['./asset-list-item.component.css']
})
export class AssetListItemComponent implements OnInit {

  @Input() asset : Asset ; 
  @Input() index: number;

  constructor() { }

  ngOnInit() { 
    console.log(this.asset);
   }

}
