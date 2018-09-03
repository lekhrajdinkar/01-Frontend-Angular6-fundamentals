import { Recipe } from "./recipe.model";
import { OnInit, EventEmitter } from "@angular/core";

export class RecipeService {

    selectedIndex : number = 0;    
    selectedRecipe : Recipe ;

    recipes : Recipe[] = [
        new Recipe('Biryani', 'Hydrabadi style spicy biryani', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Naan', 'garlic bread', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Cookie', 'Choco Cookies', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg ')
      ];

      constructor(){
        this.selectedRecipe = this.recipes[0];
      }

      //Add
      addRecipe(r : Recipe){
        console.log("Add : " + r.name);
        this.recipes.push(r);
      }

      //delete
      deleteRecipe(r : Recipe , i : number){
        console.log("Delete: " + r.name);
        this.recipes.slice(i,1);
      }

      //Event1: list item, subscribe - detail
      RecipeSrvEventDisplay = new EventEmitter<Recipe>();
}