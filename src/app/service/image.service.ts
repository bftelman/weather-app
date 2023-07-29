import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Image } from '../models/image';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  private http: HttpClient = inject(HttpClient);
  images = new BehaviorSubject<Image[] | null>(null);
  images$ = this.images.asObservable();
  avgColor = new BehaviorSubject<string | null>(null);
  avgColor$ = this.avgColor.asObservable();

  loadBackgroundImage(name: string) {
    const headers = new HttpHeaders().set('Authorization', environment.pexelsKey);
    const params = new HttpParams().set('query', name).set('per_page', 5).set('size', 'small');
    this.http.get<any>("https://api.pexels.com/v1/search", { headers, params }).subscribe(response => {
      this.images.next(response.photos);
    })
  }
}
