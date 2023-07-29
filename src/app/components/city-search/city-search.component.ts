import { Component, inject } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent {
  private weatherService: WeatherService = inject(WeatherService);

  search(city: string) {
    this.weatherService.getWeather(city);
  }
}
