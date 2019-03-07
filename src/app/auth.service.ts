import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { User } from "./user";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'https://rhdpnodeapi.herokuapp.com/users/login';

  constructor(private http: HttpClient) { }

  validateCred(user: User): Observable<any> {
    return this.http.post<User>(this.apiURL, user, httpOptions)
      .pipe(
        tap(_ => console.log('Auth success')),
        catchError(this.handleError<any>('Validate Cred'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      console.log(result);
      
      return of(result as T);
    };
  }
}