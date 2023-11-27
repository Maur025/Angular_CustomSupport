import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getAll(entity: string): Observable<any[]> {
    const url = `${this.baseUrl}${entity}/all`;
    return this.http.get<any[]>(url);
  }

  public getFindById(entity: string, id: number): Observable<any> {
    const url = `${this.baseUrl}${entity}/find/${id}`;
    return this.http.get<any>(url);
  }

  public save(entity: string, data: any): Observable<any> {
    const url = `${this.baseUrl}${entity}/save`;
    return this.http.post<any>(url, data);
  }

  public edit(entity: string, id: number, data: any): Observable<any> {
    const url = `${this.baseUrl}${entity}/edit/${id}`;
    return this.http.put<any>(url, data);
  }

  public delete(entity: string, id: number): Observable<any> {
    const url = `${this.baseUrl}${entity}/delete/${id}`;
    return this.http.delete<any>(url);
  }
}
