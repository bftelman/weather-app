import { Component, OnInit, inject } from '@angular/core';
import { ImageService } from './service/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  private imageService: ImageService = inject(ImageService);
  imageUrl: string = "";
  altText: string = "";
  ngOnInit(): void {
    this.imageService.images$.subscribe(images => {
      if (images) {
        console.log(images);
        const index = Math.floor(Math.random() * 5);
        this.imageService.avgColor.next(images[index].avg_color);
        this.imageUrl = images[index].src.large;
        this.altText = images[index].alt;
      }
    })
  }
}
