import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Junction } from "./junction";


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiURL = 'https://smatraffi.azurewebsites.net/getLocations';

  constructor(private http:HttpClient) { }

  getJunctions(token: string): Observable<Junction[]>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','x-auth':token})
    }
    return this.http.get(this.apiURL,httpOptions)
      .pipe(
        tap(_=> console.log(`Fetched locations with token:${token}`)),
        catchError(this.handleError<any>('getJunctions'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
