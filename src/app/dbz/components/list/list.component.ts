import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  onDelete : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character [] =[{
    name:'Trunks',
    power:10
  }]



  onDeleteCharacter(id:string):void{
    //Emitir ID del personaje;
    this.onDelete.emit(id);
  }

 }
