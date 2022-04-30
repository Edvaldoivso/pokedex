import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {

  constructor(private http: HttpClient) {}
  private url:string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  get apiListAllPokemons() : Observable<any> {

    return this.http.get<any>(this.url).pipe(
      tap(   res => res  ),
      tap(res => {
      console.log(res)
      })
    );
  }

}
