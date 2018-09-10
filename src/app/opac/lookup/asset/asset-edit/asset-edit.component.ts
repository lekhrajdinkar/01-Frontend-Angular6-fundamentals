import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/opac/lookup/asset/asset.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Asset } from 'src/app/opac/lookup/asset/asset.model';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {

  asset : Asset;
  index: number;

  constructor(private srv: AssetService,
    private router: Router,
    private currentActiveRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentActiveRoute.params
      .subscribe(
        (params: Params) => {
          this.index = +params['index'];
          this.asset = this.srv.getAssetbyIndex(this.index);
        }
      );
  }

}
