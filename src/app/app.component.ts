import { Component, OnInit } from '@angular/core';
import { PokeService } from './poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemons';
  
  public pokemonsList: any[]; 

  constructor (private pokemonService:PokeService) {}

  ngOnInit(): void {
    this.pokemonsList = this.pokemonService.pokemonList ; 
  }


}
