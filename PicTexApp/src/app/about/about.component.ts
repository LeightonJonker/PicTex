import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public getColour(value: string) {
    let hex = (<HTMLInputElement>document.getElementById("colour"));
    let hexText = (<HTMLInputElement>document.getElementById("colourText"));
    hexText.setAttribute("value", hex.value);
  }

  public test() {
    console.log('aaa');
  }

  constructor() { }


  ngOnInit() {
    let colorInput = (<HTMLInputElement>document.getElementById("color-input"));
    let eventColour = (<HTMLInputElement>document.getElementById("event-color"));

    colorInput.addEventListener("slidermove", function() {
      eventColour.value = this.wheelColorPicker('getValue', 'rgb');
    });
  }

}

