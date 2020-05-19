import { Injectable, isDevMode } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private baseUrl = 'http://localhost:8080/api/v1/samples';
  constructor(private http: HttpClient) {
      if (!isDevMode()) {
          this.baseUrl = '/api/v1/samples';
      }
  }

  getSample(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createSample(sample: Object, photo: File): Observable<Object> {
    const formData = new FormData();
    formData.append('sample', new Blob([JSON.stringify(sample)], { type: "application/json" }));
    formData.append('file', photo);

    return this.http.post(`${this.baseUrl}`, formData);
  }

  getSampleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteSample(id: number) {

  }
}
