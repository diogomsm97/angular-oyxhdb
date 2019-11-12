import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pokemon} from './Pokemon';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Injectable()
export class PokemonsService {
  private SelectedPokemon=new BehaviorSubject(null);
  private APIurl='https://pokeapi.co/api/v2/pokemon/';
  private IMGurl="https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(private http : HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    
    return this.http.get<Pokemon[]>(this.APIurl+"?limit=807" );
  }
  getPokemonbyId(id:number): Observable<Pokemon> {
    console.log(id);
    return this.http.get<Pokemon>(this.APIurl+ id);
    
  }
  setPokemon(Pokemon): void {    
    this.SelectedPokemon.next(Pokemon);
  }
  //  image(id:number): Observable<Pokemon[]> {
  //    //+ this.SelectedPokemon + ".png";
  //   return this.http.get<Pokemon>(this.IMGurl+id + ".png")
  //  }
}