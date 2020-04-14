import { Component, OnInit} from '@angular/core';
import { PokeService } from '../poke.service';
import { PokemonComponent } from '../pokemon/pokemon.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  public typesList: Array<String>; 
  
  constructor(private pokemonService : PokeService) {  } 

  ngOnInit(): void {
    this.typesList = this.pokemonService.typesList ; 
  }

  onKey(value: string) {
    console.log(value) ; 
    PokemonComponent.currentNameInput = new RegExp(value, 'i') ; 
  }

  onNumber(value: string){
    if (value.length == 1) {
      value = '00'+value ;
    } else if(value.length == 2) {
      value = '0'+value ; 
    }
    console.log(value) ; 
    PokemonComponent.currentNumberInput = value ;
  }

  onType(value: string){
    console.log(value) ; 
    PokemonComponent.currentTypeInput = value ;
  }

}
