import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [],
})
export class ResultComponent implements OnInit {
  private role: string;
  private localtext: string =  this.role = sessionStorage.getItem('inputtext');
  imgsrc: string = "https://farm";
  imgfarmid: string = ".staticflickr.com/";
  //
  public loadimages(){
    var image1;
    var image2;
     for (var i = 0; i <= 4; i++) {
       var Sid: string = sessionStorage.getItem("id" + i);
       var Sowner: string = sessionStorage.getItem("owner" + i);
       var Ssecret: string = sessionStorage.getItem("secret" + i);
       var Sserver: string = sessionStorage.getItem("server" + i);
       var Sfarm: string = sessionStorage.getItem("farm" + i);
       var Stitle: string = sessionStorage.getItem("title" + i);
       var Sispublic: string = sessionStorage.getItem("ispublic" + i);
       var Sisfriend: string = sessionStorage.getItem("isfriend" + i);
       var Sisfamily: string = sessionStorage.getItem("isfamily" + i);

       // gets url img for src (t for thumbnail and n for "small")
       var thumbfinal: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_t.jpg";
       var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + ".jpg";

      image1 = document.getElementById("choice"+i) as HTMLImageElement;
      image2 = document.getElementById("thumb"+i) as HTMLImageElement;
      image1.src = final;
      image2.src = thumbfinal;
   }
  }

  private bfunction() {
    this.role = (<HTMLInputElement>document.getElementById("option0")).value;
    sessionStorage.setItem('inputtext',this.role );
    console.log(this.role)
  }

  private increasefont(){
    var box = document.getElementById("option0");
    var size = window.getComputedStyle(box, null).getPropertyValue('font-size');
    var fontsize = parseFloat(size);
    if (fontsize < 36) {
      box.style.fontSize = (fontsize + 1) + 'px';
      document.getElementById("option0").style.fontSize
    }

  }

  private decreasefont() {
    var box = document.getElementById("option0");
    var size = window.getComputedStyle(box, null).getPropertyValue('font-size');
    var fontsize = parseFloat(size);
    if (fontsize > 9) {
      box.style.fontSize = (fontsize - 1) + 'px';
      document.getElementById("option0").style.fontSize
    }
  }

  constructor() {
  }

  ngOnInit() {
    var red = (<HTMLInputElement>document.getElementById("sliderRed"));
    var green = (<HTMLInputElement>document.getElementById("sliderGreen"));
    var blue = (<HTMLInputElement>document.getElementById("sliderBlue"));
    red.addEventListener('input', function(){
      document.getElementById("option0").style.color = "rgb("+ red.value +"," + green.value + "," + blue.value + ")";
    });

    green.addEventListener('input', function(){
      document.getElementById("option0").style.color = "rgb("+ red.value +"," + green.value + "," + blue.value + ")";
    });

    blue.addEventListener('input', function(){
      document.getElementById("option0").style.color = "rgb("+ red.value +"," + green.value + "," + blue.value + ")";
    });

    // this.update();
  this.loadimages();
  }

}
