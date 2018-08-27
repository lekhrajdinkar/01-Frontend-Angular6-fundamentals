import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Biryani', 'Hydrabadi style spicy biryani', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Naan', 'garlic bread', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Cookie', 'Choco Cookies', 'https://www.pexels.com/photo/macro-photography-of-pile-of-3-cookie-230325/')
  ];

  @Output()  private displayItemEvent = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {  }

  addRecipe(){
    //Adding harded values
    console.log("Adding harded values");
    this.recipes.push(new Recipe('Biryani', 'Hydrabadi style spicy biryani', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'));
  }

  displayDetailRecipe(name : string){
    console.log("2. recipelist : displayDetailRecipe called : " + name);
    this.displayItemEvent.emit(this.recipes[1]);
  }

}
