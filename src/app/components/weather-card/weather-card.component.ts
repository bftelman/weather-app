import { Component, OnInit, inject } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  weather: Weather | null = null;

  private weatherService = inject(WeatherService);
  ngOnInit(): void {
    this.weatherService.weather$.subscribe(data => {
      this.weather = data;
    })
  }

}
