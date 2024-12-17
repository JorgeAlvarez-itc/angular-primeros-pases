import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Maqueda','Hulk'];
  public deletedHeroe?:string='';

  deleteLastHeroe() : void{
    this.deletedHeroe=this.heroNames.pop();
  }

}