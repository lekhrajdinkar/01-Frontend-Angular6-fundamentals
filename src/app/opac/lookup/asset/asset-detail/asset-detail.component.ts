import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AssetService } from 'src/app/opac/lookup/asset/asset.service';
import { Asset } from 'src/app/opac/lookup/asset/Asset.model';

@Component({
  selector: 'opac-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {

  asset: Asset;
  index: number;

  constructor(private srv: AssetService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['index'];
          this.asset = this.srv.getAssetbyIndex(this.index);
        }
      );
  }
  delete(){
    console.log("delete : " + this.asset);
    this.srv.delete(this.index);
  }

}
