import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myInterval: number = 5000;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides: boolean = false;

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.slides.push({
        image: `assets/slides/slide${i + 1}.jpg`
      });
    }
  }
}
