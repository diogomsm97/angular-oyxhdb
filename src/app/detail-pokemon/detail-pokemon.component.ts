import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonsService}from '../pokemons.service' ;

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  SelectedPokemonID:number;
  SelectedPokemon:Pokemon;
  constructor(private route:ActivatedRoute,private pokemonsService:PokemonsService) { }

  ngOnInit() {
    this.route.paramMap.
               subscribe(params => this.SelectedPokemonID= +params.get("pokemonid"));
    this.pokemonsService.getPokemonbyId(this.SelectedPokemonID)
      .subscribe(Pokemon => {this.SelectedPokemon=Pokemon;console.log(this.SelectedPokemon);});
  }

}