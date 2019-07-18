import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  _baseUrl: string;

  constructor(public httpClient: HttpClient) {
  }

  _setUrl(partial: string): string {
    let url: string;
    url = `${this._baseUrl}/${partial}`;
    return url;
  };

  _setHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  _get<T>(url: string, options?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(url, { headers: options }).pipe(
      take(1)
    );
  }

  _post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(url, body).pipe(
      take(1)
    );
  }

  _put<T>(url: string, body: T): Observable<T> {
    return this.httpClient.put<T>(url, body).pipe(
      take(1)
    );
  }

  _delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url).pipe(
      take(1)
    );
  }
}
