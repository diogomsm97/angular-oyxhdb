import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonsService } from './pokemons.service';
import {RouterModule,Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

const routes:Routes = [
  {path: '' , component:ListPokemonComponent },
  {path: 'pokemons/:pokemonid', component:DetailPokemonComponent},
  {path: 'pokemons', component:ListPokemonComponent}

];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),NgxPaginationModule
 ],
  declarations: [ AppComponent, HelloComponent, ListPokemonComponent, DetailPokemonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PokemonsService],
  exports: [ RouterModule ]
})
export class AppModule { }
