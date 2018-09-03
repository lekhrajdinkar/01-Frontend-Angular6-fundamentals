import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [RecipeService]
})
export class RecipeComponent implements OnInit {

  constructor(private srv : RecipeService){} 

  SelectedRecipe : Recipe ;

  ngOnInit() {
    this.SelectedRecipe = this.srv.selectedRecipe; 
  }

  /*
  displayRecipeDescription(recipe : Recipe){
    console.log("3. Recipe Component : displayRecipeDescription called with data - "+recipe.name+", "+recipe.description)
    this.SelectedRecipe = recipe;
  }*/

}
