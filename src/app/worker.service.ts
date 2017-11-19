import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Worker } from './worker.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class WorkerService {
  constructor(private http: Http) {
  }

  private workersUrl = 'http://localhost:3000/workers';
  private headers = new Headers({'Content-Type': 'application/json'});

  getWorkers(): Observable<any> {
    const url = `${this.workersUrl}`;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  unsign(boatId: number, worker: Worker): Observable<any> {
    const position = worker.boatIds.findIndex(
      (boatIdEl: number) => {
        return boatIdEl === boatId;
      }
    );
    worker.boatIds.splice(position, 1);
    const url = `${this.workersUrl}/${worker.id}`;
    const body = JSON.stringify( {boatIds: worker.boatIds});
    return this.http.patch(url, body, { headers: this.headers })
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  sign(boatId: number, worker: Worker): Observable<any> {
    worker.boatIds.push(boatId);
    const url = `${this.workersUrl}/${worker.id}`;
    const body = JSON.stringify( {boatIds: worker.boatIds});
    return this.http.patch(url, body, { headers: this.headers })
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
