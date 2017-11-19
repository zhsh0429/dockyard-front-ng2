import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Boat } from './boat.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class BoatService {
  constructor(private http: Http) {
  }

  private boatsUrl = 'http://localhost:3000/boats';
  private headers = new Headers({'Content-Type': 'application/json'});

  getBoats(): Observable<any> {
    const url = `${this.boatsUrl}`;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  getBoat(id: number): Observable<any> {
    const url = `${this.boatsUrl}/${id}`;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  addBoat(boat: Boat) {
    const body = JSON.stringify(boat);
    return this.http.post(this.boatsUrl, body, {headers: this.headers})
      .map(
        (response: Response) => response.json()
      );
  }

  updateBoat(boat: Boat) {
    const url = `${this.boatsUrl}/${boat.id}`;
    return this.http.put(url, JSON.stringify(boat), {headers: this.headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteBoat(id: number) {
    const url = `${this.boatsUrl}/${id}`;
    return this.http.delete(url);
  }
}
