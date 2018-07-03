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
  private  baseurl: string = "https://api.flickr.com/services/rest/";
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";


  searchterm: string = "red,+panda";
  searchextension: string = "?method=flickr.photos.search&api_key=";
  sizeextension: string = "?method=flickr.photos.getSizes&api_key=";
  private imagesearchurl: string = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm+"&tag_mode=all";
  private imagesizeurl: string = this.baseurl+this.sizeextension+this.APIkey;

  private flickrsearch(){ // use flickr apis to search for search term. includes xml creation and usage

    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value; //inputted text from textarea
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
        //window.location.replace("/result")
      }
    };
    this.flag++;
    xhr.open('GET', this.imagesearchurl, true);
    xhr.send();
   // this.flickrsizes();
   // this.buffer();

  }

  private flickrandmove(){
    document.getElementById("submitbutton").innerHTML = "Loading..."
    this.flickrsearch(); // use search term to search for images
    // setTimeout(() => { // use flickr size finding api to find photos sizes and store them
    //
    //   var finalsizeurl = this.imagesizeurl
    //   var results;
    //   var xhr = new Array();
    //
    //   for (var i=0; i<= 4; i++) {
    //     (function(i){
    //
    //
    //       var id = sessionStorage.getItem("id"+i);
    //       var finalsizeurl2 = finalsizeurl + "&photo_id="+ id;
    //       console.log(finalsizeurl2)
    //
    //       xhr[i] = new XMLHttpRequest();
    //       xhr[i].open('GET', finalsizeurl2, true);
    //
    //
    //       xhr[i].onreadystatechange = function processRequest() {
    //         if (this.readyState == 4 && this.status == 200) {
    //           document.getElementById("demo").innerHTML = this.responseText;
    //           results = this.responseText;
    //
    //           var parser = new DOMParser();
    //           var xmlDoc= parser.parseFromString(results,  "text/xml");
    //           var x = xmlDoc.documentElement.getElementsByTagName("size");
    //
    //           for (var j=0; j<=2; j++ ) {
    //             var label = x[j+3].getAttribute("label");
    //             var width = x[j+3].getAttribute("width");
    //             var height = x[j+3].getAttribute("height");
    //             var source = x[j+3].getAttribute("source");
    //
    //             sessionStorage.setItem(i+ " label "+j, label);
    //             sessionStorage.setItem(i+ " width "+j, width);
    //             sessionStorage.setItem(i+ " height "+j, height);
    //             sessionStorage.setItem(i+ " source "+j, source);
    //
    //           }
    //
    //           console.log("got here at least. "+i)
    //
    //         }
    //       };
    //       xhr[i].send();
    //     })(i);
    //   }
    // },1000);
    setTimeout(() => {window.location.replace("/result")},1500);
  }

  public printsomething(){
    console.log("hi after 5")
  }

  public test(){
    var elements = ['Fire', 'Wind', 'Rain'];
    var string = elements.join(',');
    console.log(string)

  }
  private flickrsizes(){ // get photo ID; get sizes, save small and small 320 in sessionstorage.
    var finalsizeurl = this.imagesizeurl
    var results;
    var xhr = new Array();

    for (var i=0; i<= 4; i++) {
      (function(i){


      var id = sessionStorage.getItem("id"+i);
      var finalsizeurl2 = finalsizeurl + "&photo_id="+ id;
      console.log(finalsizeurl2)

        xhr[i] = new XMLHttpRequest();
        xhr[i].open('GET', finalsizeurl2, true);


        xhr[i].onreadystatechange = function processRequest() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            results = this.responseText;

            var parser = new DOMParser();
            var xmlDoc= parser.parseFromString(results,  "text/xml");
            var x = xmlDoc.documentElement.getElementsByTagName("size");

            for (var j=0; j<=2; j++ ) {
              var label = x[j+3].getAttribute("label");
              var width = x[j+3].getAttribute("width");
              var height = x[j+3].getAttribute("height");
              var source = x[j+3].getAttribute("source");

              sessionStorage.setItem(i+ " label "+j, label);
              sessionStorage.setItem(i+ " width "+j, width);
              sessionStorage.setItem(i+ " height "+j, height);
              sessionStorage.setItem(i+ " source "+j, source);

            }

            console.log("got here at least. "+i)
           // window.location.replace("/result")
          }
        };

      xhr[i].send();
      })(i);
    }
  }

  private async afunction() {
    this.flickrsearch();
       }


  constructor() {}

  ngOnInit() {
  }

}
