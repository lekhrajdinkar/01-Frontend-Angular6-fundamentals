import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../asset.model';
import { AssetService } from 'src/app/opac/lookup/asset/asset.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'opac-asset-list-item',
  templateUrl: './asset-list-item.component.html',
  styleUrls: ['./asset-list-item.component.css']
})
export class AssetListItemComponent implements OnInit {

  @Input() asset : Asset ; 
  @Input() index: number;

  constructor(private srv: AssetService,
    private router: Router,
    private currentActiveRoute: ActivatedRoute) { }

    ngOnInit() {
    this.currentActiveRoute.params
      .subscribe(
        (params: Params) => {
            console.log("delete asset at index " + params['i']);
        }
      );
  }

}
