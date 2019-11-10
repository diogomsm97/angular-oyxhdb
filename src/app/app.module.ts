import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonsService } from './pokemons.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
 ],
  declarations: [ AppComponent, HelloComponent, ListPokemonComponent, DetailPokemonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PokemonsService]
})
export class AppModule { }
