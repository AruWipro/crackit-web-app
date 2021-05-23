import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-components',
  templateUrl: './slider-components.component.html',
  styleUrls: ['./slider-components.component.scss']
})
export class SliderComponentsComponent implements OnInit {
  @Input() sliderData;
  constructor() {
   }

  ngOnInit(): void {
  }

}
