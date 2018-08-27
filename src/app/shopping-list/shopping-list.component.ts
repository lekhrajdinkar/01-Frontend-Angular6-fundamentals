import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient('rice', 5),
    new Ingredient('chicken', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  add(element : Ingredient ){
    console.log("Add method called : shopping list component"); 
    this.ingredients.push(element);
    console.log(element);
  }

  delete(element :string ){
    console.log("delete method called : shopping list component");
  
  }

}
