import { Component, OnInit } from '@angular/core';
import Result = jasmine.Result;

@Component({
  // selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [],
})
export class ResultComponent implements OnInit {
  private role: string;
  // private localtext: string =  this.role = sessionStorage.getItem('inputtext');
  imgsrc: string = "https://farm";
  imgfarmid: string = ".staticflickr.com/";
  tagsURL: string = "http://localhost:4200/api/getTags";
  elements: [string];

  flag = 1;
  private  baseurl: string = "https://api.flickr.com/services/rest/";
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";
  searchterm: string = "red,+panda";
  searchextension: string = "?method=flickr.photos.search&api_key=";
  sizeextension: string = "?method=flickr.photos.getSizes&api_key=";
  private imagesearchurl: string = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm+"&tag_mode=all&sort=relevance";
  private imagesizeurl: string = this.baseurl+this.sizeextension+this.APIkey;

  public loadimages(){
    var image1;
    var image2;
     for (var i = 0; i <= 7; i++) {
       var Sid: string = sessionStorage.getItem("id" + i);
       var Sowner: string = sessionStorage.getItem("owner" + i);
       var Ssecret: string = sessionStorage.getItem("secret" + i);
       var Sserver: string = sessionStorage.getItem("server" + i);
       var Sfarm: string = sessionStorage.getItem("farm" + i);
       var Stitle: string = sessionStorage.getItem("title" + i);
       console.log(Stitle)
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

  private getTags() {

    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET",this.tagsURL, false);
    xhr.send();
    if(xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      this.elements = eval(xhr.responseText);
    }

  }

  private loadtags(){

    console.log(this.elements);
    for(var j = 1; j < 10 ; j++ ) {
      document.getElementById("badge"+j).innerHTML="";
    }
    for(var i = 0; i <this.elements.length; i++ ){
      document.getElementById("badge"+(i+1)).innerHTML=this.elements[i] + '  <i (click)= "test()" class="fa fa-times" ></i>';
    }
  }

  private addtag(){
    console.log("pushed")
    var newtag = (<HTMLInputElement>document.getElementById("tag")).value;
    console.log(newtag)
    this.elements.push(newtag);
    this.loadtags();
  }


  private Remove(int){
    this.elements.splice(int,1)
    console.log(this.elements)
    this.loadtags();
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

  private setFontSize(size : number) {
    let box = document.getElementById("option0");
    box.style.fontSize = size + 'px';
  }

  private normalfont(){
    var box = document.getElementById("option0");
    box.style.fontStyle = "normal";
    box.style.fontWeight = "normal";
  }

  private boldfont(){
    var box = document.getElementById("option0");
    box.style.fontWeight = "bold";

  }

  private italicfont(){
    var box = document.getElementById("option0");
    box.style.fontStyle = "italic";
  }

  private changefont(string){
    var box = document.getElementById("option0");
    box.style.fontFamily = string;
  }

  constructor() {}

///////////////////////////////
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
///////////////////////////


  private flickrsearch(){ // use flickr apis to search for search term. includes xml creation and usage
    // sessionStorage.clear();
    var savedd = (<HTMLInputElement>document.getElementById("option0")).textContent; //inputted text from textarea
    sessionStorage.setItem('inputtext',savedd );

    var results;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;

        var parser = new DOMParser();
        var xmlDoc= parser.parseFromString(results,  "text/xml");
        var x = xmlDoc.documentElement.getElementsByTagName("photo");

        for (var i = 0; i <= 7 ; i++) {
          var id = x[i].getAttribute("id");
          var owner = x[i].getAttribute("owner");
          var secret = x[i].getAttribute("secret");
          var server = x[i].getAttribute("server");
          var farm = x[i].getAttribute("farm");
          var title = x[i].getAttribute("title");
          var ispublic = x[i].getAttribute("ispublic");
          var isfriend = x[i].getAttribute("isfriend");
          var isfamily = x[i].getAttribute("isfamily");
          // can successfully access saved xml file and get correct tags for image.
          sessionStorage.setItem("id" + i, id);
          sessionStorage.setItem("owner" + i, owner);
          sessionStorage.setItem("secret" + i, secret);
          sessionStorage.setItem("server" + i, server);
          sessionStorage.setItem("farm" + i, farm);
          sessionStorage.setItem("title" + i, title);
          sessionStorage.setItem("ispublic" + i, ispublic);
          sessionStorage.setItem("isfriend" + i, isfriend);
          sessionStorage.setItem("isfamily" + i, isfamily);
        }
        //window.location.replace("/result")
      }
    };
    this.flag++;
    xhr.open('GET', this.imagesearchurl, true);
    xhr.send();
  }


  private ReloadSearch(){
    document.getElementById("reloadB").innerHTML = "Loading..."
    this.flickrsearch(); // use search term to search for images
    setTimeout(() => {location.reload()},1500);
  }


////////////////////////////

  ngOnInit() {

    let input = sessionStorage.getItem("inputtext");
    document.getElementById("option0").innerText = input;

    let div = document.getElementById("mydiv");
    this.dragElement(div);

    let red = (<HTMLInputElement>document.getElementById("red"));
    let green = (<HTMLInputElement>document.getElementById("green"));
    let blue = (<HTMLInputElement>document.getElementById("blue"));
    let wcp = (<HTMLInputElement>document.getElementById("color-input"));
    let fontInput = (<HTMLInputElement>document.getElementById("fontSizeInput");
    let text = document.getElementById("option0");

    // fontInput.addEventListener('input', this.setFontSize(fontInput.value));
    fontInput.addEventListener('input',() => {
      let size = Number(fontInput.value);
      this.setFontSize(size);
    });

    $(wcp).on('slidermove', () => {
      let colours : string = $(wcp).wheelColorPicker('getValue', 'rgb'); //rgb(255,255,255)
      let splitted = colours.split(",");
      red.value = splitted[0].split("(")[1]; // ["rgb(", "255"]
      green.value = splitted[1]; // "255"
      blue.value = splitted[2].split(")")[0]; // ["255", ")"]
      text.style.color = colours;
    });

    red.addEventListener('input', () => {
      $(wcp).wheelColorPicker('setRgb', red.value/255, green.value/255, blue.value/255);
      text.style.color = $(wcp).wheelColorPicker('getValue', 'rgb');
    });

    green.addEventListener('input', function(){
      $(wcp).wheelColorPicker('setRgb', red.value/255, green.value/255, blue.value/255);
      text.style.color = $(wcp).wheelColorPicker('getValue','rgb');
    });

    blue.addEventListener('input', function(){
      $(wcp).wheelColorPicker('setRgb', red.value/255, green.value/255, blue.value/255);
      text.style.color = $(wcp).wheelColorPicker('getValue','rgb');
    });

    // this.update();
    this.getTags();
    this.loadtags();
    this.loadimages();
  }

}
