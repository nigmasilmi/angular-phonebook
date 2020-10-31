import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';
import { validateRut } from '../helpers/rutValidator';

@Injectable({
  providedIn: 'root'
})
export class PersonaDataService {

  temporalPersonasArr: Persona[];
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>('https://private-anon-48e86d01d8-testphonebook.apiary-mock.com/persona');
    // return this.http.get<Persona[]>(this.personasEndpoint);
  }




}
