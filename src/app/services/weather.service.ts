import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { Weather } from '../models/weather';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {

  constructor() { }
  private http = inject(HttpClient);
  weather = new BehaviorSubject<Weather | null>(null);
  weather$ = this.weather.asObservable()

  ngOnInit(): void {

  }

  getWeather(city: string) {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey)

    this.http.get<Weather>(environment.apiUrl + 'weather', { params })
      .subscribe({
        next: weather => {
          this.weather.next(weather);
        },
        error: error => console.error(error)
      })
  }
}

