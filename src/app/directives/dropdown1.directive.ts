import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown1]'
})
export class Dropdown1Directive {


  constructor(private e : ElementRef, private r : Renderer2) {} 

  @HostBinding ('class.open') isOpen =false;

  @HostListener('click') f1(){
    this.isOpen = !this.isOpen;
  }

  ngOnInit(){
  //this.r.setStyle(this.e.nativeElement, "class", "open");
  }

}
