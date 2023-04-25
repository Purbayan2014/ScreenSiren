import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  // adding a input field to fetch the list of movies
  @Input() items: Movie[] = [];

  constructor() {}

  ngOnInit(): void {}
}
