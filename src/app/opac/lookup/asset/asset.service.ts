import { Asset } from "./asset.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AssetService {

    // 
    assets: Asset[] = [
        { name: 'ICICI BANK', id: 1001, sym: 'ICICI', imgPath: 'http://i0.wp.com/www.gangapur.city/wp-content/uploads/cache/images/2018/09/icici-bank-atm-ganapur-city/icici-bank-atm-ganapur-city-3932229752.jpg' },
        { name: 'GOOGLE', id: 1002, sym: 'GOOG', imgPath: 'https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg' },
        { name: 'INFOSYS LIMITED', id: 1003, sym: 'INFY', imgPath: 'https://www.bizofit.com/blog/wp-content/uploads/2013/07/infosys-logo-reverse-col-JPEG.jpg' }];

    getAssets() {
        //return this.assets.slice();
        return this.assets;
    }

    getAssetbyIndex(index: number) {
        return this.assets[index];
    }

    // getAssetbyId(id: number) {
    //     return this.assets[1];//rework on it.
    // }

    delete(i : number){
        console.log(this.assets);
       // this.assets = this.assets.slice(i,1);
        console.log(this.assets);
    }
}