import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { PokeService } from   './poke.service';
import { SearchComponent } from './search/search.component' ; 
import { FormsModule } from '@angular/forms' ; 

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
   ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
