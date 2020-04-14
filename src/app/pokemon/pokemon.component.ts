import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() name:string ; 
  @Input() id:string ; 
  @Input() type:string[] ; 
  @Input() img:string ; 

  static currentNameInput = new RegExp('');
  static currentNumberInput: string = ''; 
  static currentTypeInput:string;
  constructor() { }

  private hasType(): boolean {
    var result:boolean = false; 
    if (PokemonComponent.currentTypeInput== null || PokemonComponent.currentTypeInput == 'all types') {
      result = true; 
    } else {
      for (let t of this.type) {
        if (t == PokemonComponent.currentTypeInput) {
          result = true ; 
        }
      }
    }
    return result ;     
  }

  private hasId(): boolean {
    if (PokemonComponent.currentNumberInput == '' || PokemonComponent.currentNumberInput == '000') {
      return true; 
    } else
    return PokemonComponent.currentNumberInput == this.id ;
  }

  private hasName(): boolean {
    if (this.name == "") {
      return true; 
    } else {
      return PokemonComponent.currentNameInput.test(this.name);
    } 
  }

  isDisplayable(): boolean {
    return this.hasId() && this.hasType() && this.hasName() ; 
  }
  
}
