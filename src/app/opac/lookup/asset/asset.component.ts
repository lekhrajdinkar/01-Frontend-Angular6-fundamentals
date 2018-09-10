import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from './asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css'],
  providers : [AssetService]
})
export class AssetComponent implements OnInit {

  constructor(
    private srv: AssetService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
