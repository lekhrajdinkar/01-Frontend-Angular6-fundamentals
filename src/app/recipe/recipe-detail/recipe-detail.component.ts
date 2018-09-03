import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //@Input()
  recipe : Recipe;

  constructor(private srv : RecipeService){
    this.srv.RecipeSrvEventDisplay.subscribe( 
     (selectedRecipe : Recipe) => {
       console.log("RecipeSrvEventDisplay caught in recipe-detail component"); 
       this.recipe = selectedRecipe;
      }
    );
  } 

  ngOnInit() {
    this.recipe = this.srv.selectedRecipe;
  }
  

}
