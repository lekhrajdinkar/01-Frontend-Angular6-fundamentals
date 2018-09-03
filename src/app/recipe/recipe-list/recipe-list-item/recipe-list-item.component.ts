import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe : Recipe;

  @Output()  private selectedItemEvent = new EventEmitter<string>();
   
  constructor(private srv : RecipeService){} 

  ngOnInit() {
  }

  onSelectItem(){

    console.log("1. recipe List Item Clicked, recipe : " + this.recipe.name);
    this.srv.selectedRecipe = this.recipe ;

    console.log("2. Emit RecipeSrvEventDisplay for recipe : " + this.recipe.name);//will be caughgt at recipe-detail component.
    this.srv.RecipeSrvEventDisplay.emit(this.recipe);
      
   // this.selectedItemEvent.emit(this.recipe.name);
   // console.log("10. selectedItemEvent is fired with data - "+this.recipe.name);
  }

}
