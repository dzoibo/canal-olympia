import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';



export function getBanocUrl(coordinate: number[]): string {
  return `https://dev.api.banoc.coeurduweb.com/api/geocode/coordinates?latitude=${coordinate[1]}&longitude=${coordinate[0]}&level=180`;
}

export const API_URL = {
  trending: '3/trending/all/week',
  login: '/auth/login/',

  
};

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  baseUrl= 'https://api.themoviedb.org/';
  headers: HttpHeaders = new HttpHeaders({});
  

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getRequest(path: string): Promise<any> {
    return firstValueFrom(this.http.get(this.baseUrl + path+'api_key'+environment.api_key));
  }

  

}
