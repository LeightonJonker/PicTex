import { Component, OnInit } from '@angular/core';


@Component({
 // selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: []
})
export class BodyComponent implements OnInit {
  flag = 1;
  private role: string;
  private baseurl: string = "https://api.flickr.com/services/rest/";
  private processurl: string = "http://localhost:4200/api/processText?text="
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";

  private searchterm: string = "nothing";
  searchextension: string = "?method=flickr.photos.search&api_key=";
  sizeextension: string = "?method=flickr.photos.getSizes&api_key=";
  private imagesearchurl: string = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm+"&tag_mode=all&sort=relevance&text="+this.searchterm;
  private imagesizeurl: string = this.baseurl+this.sizeextension+this.APIkey;

  private updateImgSearchURL() {
    this.imagesearchurl = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm+"&tag_mode=all&sort=relevance&text="+this.searchterm;
  }

  private flickrsearch(){ // use flickr apis to search for search term. includes xml creation and usage
    // sessionStorage.clear();
    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value; //inputt  ed text from textarea
    sessionStorage.setItem('inputtext',this.role );
    var results;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        // document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;

          var parser = new DOMParser();
          var xmlDoc= parser.parseFromString(results,  "text/xml");
        var x = xmlDoc.documentElement.getElementsByTagName("photo");

        for (var i = 0; i <= 8 ; i++) {
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

  private processText() {
    let uri: string = encodeURI((<HTMLInputElement>document.getElementById("thetextarea")).value);
    let url: string = this.processurl+uri;
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("POST",url,false);
    xhr.send();
    if (xhr.readyState == 4 && xhr.status == 200) {
      this.searchterm = xhr.responseText;
    }
    console.log("Search terms = " + this.searchterm);
    this.updateImgSearchURL();
  }

  private flickrandmove(){
    console.log("does this")
    document.getElementById("submitbutton").innerHTML = "Loading..."
    this.processText();
    this.flickrsearch(); // use search term to search for images
    setTimeout(() => {window.location.replace("/result")},1500);
  }


  public previewFile() {
    var file = (<HTMLInputElement>document.getElementById("uploadedfile")).files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      var bool = "yes"
      sessionStorage.setItem("uploadedphoto", reader.result);
      sessionStorage.setItem("isphotouploaded",bool)
    }

    if (file) {
      reader.readAsDataURL(file);
    }
    else{
      sessionStorage.clear();
      console.log("no file found")
      // alert("Cannot read your file / no file was selected!")
    }
  }


  private async afunction() {
    this.flickrsearch();
       }



  constructor() {}

  ngOnInit() {
    let form = (<HTMLInputElement>document.getElementById("form"));
    let submitButton = (<HTMLInputElement>document.getElementById("submitbutton"));
    form.addEventListener("submit", () => {
      submitButton.value = "Loading";
      this.flickrandmove();
    });
   // this.previewFile();
  }

}
