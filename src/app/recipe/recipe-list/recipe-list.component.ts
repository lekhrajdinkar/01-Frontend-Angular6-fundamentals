import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Biryani', 'Hydrabadi style spicy biryani', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Naan', 'garlic bread', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {  }

  addRecipe(){
    //Adding harded values
    console.log("Adding harded values");
    this.recipes.push(new Recipe('Biryani', 'Hydrabadi style spicy biryani', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'));
  }

}
