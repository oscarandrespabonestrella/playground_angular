import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Specie{
  "id": string;
  "name": string;
  "classification": string;
  "eye_colors": string;
  "hair_colors": string;
  "people": string[];
  "films": [];
  "url": string;    
}
export interface Film{
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: number | string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebServerService {
  getGhibliFilms$(): Observable<Film[]> {
    return this.httpClient.get<Film[]>('https://ghibliapi.herokuapp.com/films');
  }
  getGhibliSpecies$(): Observable<Specie[]> {
    return this.httpClient.get<Specie[]>('https://ghibliapi.herokuapp.com/species');
  }

  constructor(private httpClient: HttpClient) { }
}
