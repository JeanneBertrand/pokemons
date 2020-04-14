import { Injectable } from '@angular/core';
import pokemons from '../assets/seed.json' ;

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  typesList: string[]=[
   'Grass',
   'Poison', 
   'Fire', 
   'Flying', 
   'Water', 
   'Bug',
   'Normal', 
   'Fighting', 
   'Rock', 
   'Steel', 
   'Ice', 
   'Ghost', 
   'Dragon', 
   'Psychic', 
   'Ground', 
   'Electric'
  ]; 
  public pokemonList:{id:string, name:string, img:string, type:string[]}[] = pokemons;
}
