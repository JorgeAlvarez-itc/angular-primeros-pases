import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>Counter : {{counter}}</p>
            <button (click)="increaseBy(1)">+1</button>
            <button (click)="increaseBy(-1)">-1</button>
            <button (click)="reset()">Reset</button>`
})

export class CounterComponent {

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

// import { Component } from "@angular/core";

// @Component({
//   selector:'app-counter',
//   template: '<h1>Hola mundo</h1>'
// })
// export class CounterComponent{

// }
