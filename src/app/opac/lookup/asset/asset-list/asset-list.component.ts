import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';

@Component({
  selector: 'opac-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  assets : Asset[] = [];

  constructor( 
    private srv: AssetService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.assets = this.srv.assets;
    console.log(this.assets);
   }

  onNewAsset() {}

}
