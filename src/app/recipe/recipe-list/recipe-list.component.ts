import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] ;

  constructor(private srv : RecipeService){} 

  ngOnInit() { this.recipes = this.srv.recipes ;}

  //@Output()  private displayItemEvent = new EventEmitter<Recipe>();  

  addRecipe(r : Recipe){
    console.log("Recipe List Component : addRecipe");
    r = new Recipe('Biryani', 'Hydrabadi style spicy biryani', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    this.srv.addRecipe(r);
   }

  //displayDetailRecipe(name : string){
    //console.log("2. recipelist : displayDetailRecipe called : " + name);
    //this.displayItemEvent.emit(this.recipes[1]);
  //}

}
