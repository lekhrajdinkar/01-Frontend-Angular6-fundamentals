import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasic1]'
})
export class Basic1Directive implements OnInit{
  constructor(private e : ElementRef, private r : Renderer2) {}

//5. remove color hard coding 
@Input('dc') dftClr : String ;

  //3.1Add directive wsorking only for few evevts.
  @HostListener("mouseenter") f1(e : Event){
    this.r.setStyle(this.e.nativeElement, "background-color", "yellow");
    this.fgcolor =this.dftClr;
  }

  //3.2
  @HostListener("mouseleave") f2(e : Event){
    this.r.setStyle(this.e.nativeElement, "background-color", "transparent");
    this.fgcolor = "blue" ;
  }

  //4. Alternative for renderer. Bind any property of host element.
  @HostBinding("style.color") fgcolor : String = "white";



  ngOnInit(){

  //1. change style by directly refering native element. It will work well if running on browser only
  // But angular is not restriced to Browser only.    
  this.e.nativeElement.style.backgroundColor = 'yellow'; 

  //2. Hence renderer2 is good practice.
  this.r.setStyle(this.e.nativeElement, "background-color", "green");
  }
  


  


}
