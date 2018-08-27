import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameref') nameref1 : ElementRef ;
  @ViewChild('amountref') amountref1 : ElementRef ;


@Output() eventAdd = new EventEmitter<Ingredient>();
@Output() eventDelete = new EventEmitter<string>();
temp1 : string ;
temp2 : number ;

  constructor() { }

  ngOnInit() { }

  add(){
    console.log("Add method called : shopping edit component"); 
    this.temp1 = this.nameref1.nativeElement.value;
    this.temp2 = this.amountref1.nativeElement.value;
    console.log("Intgredients : " + this.temp1 + this.temp2);
    this.eventAdd.emit(new Ingredient(this.temp1 , Number(this.temp2)));
  }

  delete(){
    console.log("delete method called : shopping edit component");
 
  }

  clear(){
    console.log("clear method called : shopping edit component");

  }
}

