import { Component, OnInit, inject } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { ImageService } from 'src/app/service/image.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  weather: Weather | null = null;
  avgColor: string = "";

  private weatherService = inject(WeatherService);
  private imageService = inject(ImageService)
  ngOnInit(): void {
    this.weatherService.weather$.subscribe(data => {
      this.weather = data;
    })

    this.imageService.avgColor$.subscribe(avgColor => {
      if(avgColor) this.avgColor = avgColor;
    })
  }

}
