import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DiccionarioService {

  constructor(private httpClient: HttpClient) { }

  GetPalabra(palabra : string):Observable<any>{
    return this.httpClient.get<JSON>('/w/api.php?action=query&format=json&titles='+ palabra);
  }
}
