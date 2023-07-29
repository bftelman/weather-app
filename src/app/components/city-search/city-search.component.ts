import { Component, inject } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent {
  private weatherService: WeatherService = inject(WeatherService);
  private imageService: ImageService = inject(ImageService);

  search(city: string) {
    this.weatherService.getWeather(city);
    this.imageService.loadBackgroundImage(city);
  }
}
