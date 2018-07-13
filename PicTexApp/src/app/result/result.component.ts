import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-result',
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
  //private elements = ['Fire', 'Wind', 'Rain', 'Earth', 'Lightning', 'Lava', 'Blood'];

  flag = 1;
  flag = 1;
  private  baseurl: string = "https://api.flickr.com/services/rest/";
  private processurl: string = "http://localhost:4200/api/processText?text="
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";
  searchterm: string = "red,+panda";
  searchextension: string = "?method=flickr.photos.search&api_key=";
  sizeextension: string = "?method=flickr.photos.getSizes&api_key=";
  private imagesearchurl: string = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm+"&tag_mode=all&sort=relevance";
  private imagesizeurl: string = this.baseurl+this.sizeextension+this.APIkey;


  //
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

     if (sessionStorage['uploadedphoto']){
       console.log("uploaded file detected");
       var upsrc = sessionStorage.getItem("uploadedphoto");
       var imageup1 = document.getElementById("choice8") as HTMLImageElement;
       var imageup2 = document.getElementById("thumb8") as HTMLImageElement;
       imageup1.src = upsrc;
       imageup2.src = upsrc;

     }
     else{
       console.log("no uploaded file detected here");
     }

  }

  private updateImgSearchURL(string) {
    this.imagesearchurl = this.baseurl+this.searchextension+this.APIkey+"&tags="+string+"&tag_mode=all";
  }

  private updateimages(){ // use tags, get correct tag string, create flickr url, create xhr request, open and update thumbnail + carousel images.
    // this.elements = tag array
    (<HTMLInputElement>document.getElementById("addbutton")).innerText = "Updating";
    (<HTMLInputElement>document.getElementById("addbutton")).disabled = true;
    for (var i=1; i<=this.elements.length; i++) {
      (<HTMLInputElement>document.getElementById("badge"+i)).disabled = true;
    }

    var tagstring = this.elements.join(",+");
    this.updateImgSearchURL(tagstring);

    var results;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        // document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;

        var parser = new DOMParser();
        var xmlDoc= parser.parseFromString(results,  "text/xml");
        var x = xmlDoc.documentElement.getElementsByTagName("photo");

        // console.log(x)

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
    // var y = xhr.responseXML;
    // console.log("y= " +y[0].attributes[0].nodeValue)
    // console.log("successfully changed images")
    // images are now updated, use loadimages to update.

    setTimeout(() => {this.loadimages();
    (<HTMLInputElement>document.getElementById("addbutton")).disabled = false;
      (<HTMLInputElement>document.getElementById("addbutton")).innerText = "Add Tag";

      for (var i=1; i<=this.elements.length; i++) {
        (<HTMLInputElement>document.getElementById("badge"+i)).disabled = false;
      }
    },3000);

  }

  private disablebuttons(){
    (<HTMLInputElement>document.getElementById("badge1")).disabled = true;
    // (<HTMLInputElement>document.getElementById("addbutton")).disabled = true;
    // (<HTMLInputElement>document.getElementById("addbutton")).disabled = false;



  }

  private tagtest(){
    // var tagstring = String.join(",",this.elements)
      var tt = this.elements.join(",+");

    console.log(tt)
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
    var truee = "1"
    sessionStorage.setItem("addedtag",truee);
    // console.log("pushed")
    var newtag = (<HTMLInputElement>document.getElementById("tag")).value;
    if(newtag){
      console.log(newtag)
      this.elements.push(newtag);
      this.loadtags();
      (<HTMLInputElement>document.getElementById("tag")).value="";
      this.updateimages();
    }
  }


  private Remove(int){
    this.elements.splice(int,1)
    console.log(this.elements)
    this.loadtags();
    this.updateimages();
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



  constructor() {
  }

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

      this.getTags();
      this.loadtags();
      this.updateimages();
      this.loadimages();


  }

}
