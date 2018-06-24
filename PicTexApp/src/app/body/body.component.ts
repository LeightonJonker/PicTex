import { Component, OnInit } from '@angular/core';


@Component({
 // selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: []
})
export class BodyComponent implements OnInit {
  imgsrc: string = "https://farm";
  imgfarmid: string = ".staticflickr.com/";
flag = 1;


public storeurls() { // used to get the url components from storage, make the final url and store it.
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

    // gets url img for src
    var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_z.jpg";
    sessionStorage.setItem("final" + i, final); // store final url in local storage.
  }
}

  private role: string;
  private  baseurl: string = "https://api.flickr.com/services/rest/";
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";
  searchterm: string = "puppy";
  searchextension: string = "?method=flickr.photos.search&api_key="
  private imagesearchurl: string = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm;

  private flickrsearch(){ // use flickr apis to search for search term. includes xml creation and usage

    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value;
    sessionStorage.setItem('inputtext',this.role );

    var results;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;
        console.log("aaaaaaaaaaaaaaaaa")

          var parser = new DOMParser();
          var xmlDoc= parser.parseFromString(results,  "text/xml");
        var x = xmlDoc.documentElement.getElementsByTagName("photo");
        console.log("bbbbbbbbbbb")

        for (var i = 0; i <= 4 ; i++) {
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
        window.location.replace("/result")
      }
    };
    this.flag++;
    xhr.open('GET', this.imagesearchurl, true);
    xhr.send();

    this.storeurls();
  }

  private async afunction() {
    this.flickrsearch();
       }

  public sleep() {

  }

  constructor() {}

  ngOnInit() {
  }

}
