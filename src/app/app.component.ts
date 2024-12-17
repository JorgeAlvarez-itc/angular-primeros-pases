import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter:number=0;

  increaseBy(value:number): void{
    this.counter +=value;
    if(this.counter<0){
      this.counter=0;
    }
  }

  reset():void{
    this.counter=0
  }

}
