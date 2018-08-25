import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng6';

  viewName : string = "recipe";

  displayView(viewName : string){
    this.viewName = viewName;
  }
}
