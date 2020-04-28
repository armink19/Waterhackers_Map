import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private baseUrl = 'http://localhost:8080/api/v1/samples';
  constructor(private http: HttpClient) { }

  getSample(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createSample(sample: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sample);
  }

  getSampleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteSample(id: number) {

  }
}
