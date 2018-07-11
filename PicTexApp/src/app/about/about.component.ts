import { Component, OnInit } from '@angular/core';
import ColorWheel from "color-wheel";


@Component({
  // selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  color: int[] = [255, 255, 255];

  constructor() { }


  ngOnInit() {

  }

}
