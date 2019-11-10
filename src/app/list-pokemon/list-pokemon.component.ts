import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonsService} from '../pokemons.service';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  Pokemons:Pokemon[];
  SelectedPokemon:Pokemon;
  constructor(private PokemonsService : PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }
  getPokemons():void{

    this.PokemonsService.getPokemons().subscribe(Pokedata => this.Pokemons=Pokedata.results);
  }
  selectPokemon(Pokemon:Pokemon){
    this.PokemonsService.setPokemon(Pokemon);

  }
  
}