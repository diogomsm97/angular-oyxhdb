import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pokemon} from './Pokemon';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Injectable()
export class PokemonsService {
  private SelectedPokemon=new BehaviorSubject(null);
  private APIurl='https://pokeapi.co/api/v2/pokemon';


  constructor(private http : HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    
    return this.http.get<Pokemon[]>(this.APIurl );
  }
  getPokemonbyId(id:number): Observable<Pokemon> {
    
    return this.http.get<Pokemon>(this.APIurl);
  }
  setPokemon(Pokemon): void {    
    this.SelectedPokemon.next(Pokemon);
  }

}