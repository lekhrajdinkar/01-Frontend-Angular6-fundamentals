import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  rec : Recipe ;

  constructor() { }

  ngOnInit() {
  }

  displayRecipeDescription(recipe : Recipe){
    console.log("3. Recipe Component : displayRecipeDescription called with data - "+recipe.name+", "+recipe.description)
    this.rec = recipe;
  }

}
