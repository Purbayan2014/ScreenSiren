import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    // type of animations
    trigger('slideFade', [
      // disappers at the end
      state('void', style({ opacity: 0 })),
      // bidirectional time from void state to animated state
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  // adding a input field to fetch the list of movies
  @Input() items: Movie[] = [];
  // incrementer
  currentSlideIndex: number = 0;

  ngOnInit(): void {
    // keep on increasing the currentslide index so that each 5 sec we can render a different movie
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 5000);
  }
}
