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
  private elements = ['Fire', 'Wind', 'Rain', 'Earth', 'Lightning', 'Lava', 'Blood'];


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
       var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_n.jpg";

      image1 = document.getElementById("choice"+i) as HTMLImageElement;
      image2 = document.getElementById("thumb"+i) as HTMLImageElement;
      image1.src = final;
      image2.src = thumbfinal;
   }
  }

  private loadtags(){
    // var elements = ['Fire', 'Wind', 'Rain', 'Earth', 'Lightning', 'Lava', 'Blood'];
  console.log(this.elements)
  // this.elements.splice(2,1);
    var test = 'hee';
  // console.log(this.elements)
    for(var j = 1; j < 10 ; j++ ){
      document.getElementById("badge"+j).innerText="";
    }
    for(var i = 0; i <this.elements.length; i++ ){
      document.getElementById("badge"+(i+1)).innerText=this.elements[i];
    }
  }

  private addtag(){
    console.log("pushed")
    var newtag = (<HTMLInputElement>document.getElementById("tag")).value;
    console.log(newtag)
    this.elements.push(newtag);
    this.loadtags();
  }


  private Remove1(){
    this.elements.splice(0,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove2(){
    this.elements.splice(1,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove3(){
    this.elements.splice(2,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove4(){
    this.elements.splice(3,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove5(){
    this.elements.splice(4,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove6(){
    this.elements.splice(5,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove7(){
    this.elements.splice(6,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove8(){
    this.elements.splice(7,1)
    console.log(this.elements)
    this.loadtags();
  }
  private Remove9(){
    this.elements.splice(8,1)
    console.log(this.elements)
    this.loadtags();
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


  private dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  ngOnInit() {

    var input = sessionStorage.getItem("inputtext");
    document.getElementById("option0").innerText = input;

    var div = document.getElementById("mydiv");
    this.dragElement(div);

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
    this.loadtags();
  this.loadimages();
  }

}
