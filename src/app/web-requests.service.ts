import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestsService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  getUri(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  postUri(uri: string, payload: Object) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, payload);
  
  }

  patchUri(uri: string, payload: Object) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, payload);
  }

  deleteUri(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
}
