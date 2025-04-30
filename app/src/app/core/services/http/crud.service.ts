import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { BASEURL } from './baseurl';

export abstract class CrudService<T = any> {
  abstract endpoint: string;

  protected constructor(protected http: HttpClient, protected baseUrl = BASEURL) {}

  private getHeaders() {
    const authData = localStorage.getItem('AUTH_TOKEN') || '';
    const token = authData.replace(/"/g, '');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  private getFullUrl(request: string): string {
    return `${this.baseUrl}/${this.endpoint}/${request}`;
  }

  public get<T>(request: string, customEndpoint?: string, responseType?: 'json' | 'blob'): Observable<T> {
    const endpoint = customEndpoint || this.endpoint;
    return this.http
      .get<T>(`${this.baseUrl}/${endpoint}/${request}`, {
        headers: this.getHeaders(),
        responseType: responseType as any,
      })
      .pipe(shareReplay(1), catchError(this.errorHandler('GET')));
  }

  public getAll(): Observable<T[]> {
    return this.get<T[]>('');
  }

  public getById(id: number | string): Observable<T> {
    return this.get<T>('' + id);
  }

  public post<T>(body: T, customEndpoint?: string): Observable<T> {
    const endpoint = customEndpoint || this.endpoint;
    console.log(`${this.baseUrl}/${endpoint}`, body);
    return this.http
      .post<T>(`${this.baseUrl}/${endpoint}`, body, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.errorHandler('POST')));
  }

  public upsert<T>(body: Partial<T>, customEndpoint?: string): Observable<T | number> {
    const endpoint = customEndpoint || this.endpoint;
    return this.http
      .post<T | number>(`${this.baseUrl}/${endpoint}`, body, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.errorHandler('POST')));
  }

  public deleteById(id: number | string, customEndpoint?: string): Observable<T> {
    const endpoint = customEndpoint || this.endpoint;
    return this.http
      .delete<T>(`${this.baseUrl}/${endpoint}/${id}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.errorHandler('DELETE')));
  }

  public patch<T>(id: number | string, body: Partial<T>, customEndpoint?: string): Observable<T> {
    const endpoint = customEndpoint || this.endpoint;
    return this.http
      .patch<T>(`${this.baseUrl}/${endpoint}/${id}`, body, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.errorHandler('PATCH')));
  }

  private errorHandler(method: string) {
    return (error: HttpErrorResponse) => {
      console.error(`Error occurred during ${method} ${this.endpoint}`, error);
      return new Observable<never>((subscriber) => subscriber.error(error));
    };
  }
}
