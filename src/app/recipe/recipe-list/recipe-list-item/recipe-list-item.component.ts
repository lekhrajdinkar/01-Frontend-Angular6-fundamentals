import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';


@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe : Recipe;

  @Output()
  private selectedItemEvent = new EventEmitter<string>();
   
  constructor() { }

  ngOnInit() {
  }

  onSelectItem(){
    console.log("1. recipeList-Item : onSelectItem tile is clicked");
    this.selectedItemEvent.emit(this.recipe.name);
    console.log("10. selectedItemEvent is fired with data - "+this.recipe.name);
  }

}
