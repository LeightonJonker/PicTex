import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  private change(){

    var image1 = document.getElementById("test1") as HTMLImageElement;
    var image2 = document.getElementById("thumbtest1") as HTMLImageElement;
    image1.src = "https://i.imgur.com/YdUCVSU.jpg";
    image2.src = "http://placehold.it/100x80?text=Thumb+02";

    // var test = (<HTMLImageElement>document.querySelector("test1")).src
    console.log("ha")
  }

  private myFunction(){ // use this to edit tag elements
    console.log("hi")
    document.getElementById("badge1").innerText="hi";
  }

  ngOnInit() {

      // ('#mycp').colorpicker();

  }

}
