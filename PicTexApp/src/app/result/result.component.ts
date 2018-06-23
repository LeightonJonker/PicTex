import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [],
})
export class ResultComponent implements OnInit {
  private role: string;
  private localtext: string =  this.role = localStorage.getItem('inputtext');
  imgsrc: string = "https://farm";
  imgfarmid: string = ".staticflickr.com/";

  public loadimages(){
  console.log("heh")
    var img = new Image();
    var imgm = new Image();
     for (var i = 0; i <= 4; i++) {
       var Sid: string = localStorage.getItem("id" + i);
       var Sowner: string = localStorage.getItem("owner" + i);
       var Ssecret: string = localStorage.getItem("secret" + i);
       var Sserver: string = localStorage.getItem("server" + i);
       var Sfarm: string = localStorage.getItem("farm" + i);
       var Stitle: string = localStorage.getItem("title" + i);
       var Sispublic: string = localStorage.getItem("ispublic" + i);
       var Sisfriend: string = localStorage.getItem("isfriend" + i);
       var Sisfamily: string = localStorage.getItem("isfamily" + i);

       // gets url img for src
       var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_m.jpg";
       var finalm: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_n.jpg";

       img.src = final;
       imgm.src = finalm;
       var optwid = img.width.toString();
       var opthei = img.height.toString();
       var optwidm = imgm.width.toString();
       var optheim = imgm.height.toString();
       console.log(optwidm + i)
       console.log(optheim + i)

       // document.getElementById("option"+i).style.backgroundImage='url('+ final + ')';
       localStorage.setItem("final" + i, final); // store final url in local storage.
       localStorage.setItem("finalm" + i, finalm);

       localStorage.setItem("opt" + i, final); // each option has a small and medium url link and sizes.
       localStorage.setItem("optwid"+i, optwid);
       localStorage.setItem("opthei"+i,opthei)

       localStorage.setItem("optm" + i, finalm);
       localStorage.setItem("optwidm"+i, optwidm);
       localStorage.setItem("optheim"+i,optheim)

  }
    this.update();
  }

  public update() {
    /////////////////////////////////////////////////////////////// option 0

    var final = localStorage.getItem("optm0");
    var height = localStorage.getItem("optheim0");
    var width = localStorage.getItem("optwidm0");
    console.log("final : " + final + "   Height: "+ height + "    Width: "+ width)
      document.getElementById("option0").style.height = Number(height) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option0").style.width = Number(width) + "px"; // change width of textarea (do before page loads)
    document.getElementById("option0").style.backgroundImage='url('+ final + ')';

/////////////////////////////////////////////////////////////// option 1

    var final1 = localStorage.getItem("opt1");
    var height1 = localStorage.getItem("opthei1");
    var width1 = localStorage.getItem("optwid1");
    console.log("final : " + final1 + "   Height: "+ height1 + "    Width: "+ width1)


    document.getElementById("option1").style.height = Number(height1) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option1").style.width = Number(width1) + "px"; // change width of textarea (do before page loads)
    document.getElementById("option1").style.backgroundImage='url('+ final1 + ')';

/////////////////////////////////////////////////////////////// option 2

    var final2 = localStorage.getItem("opt2");
    var height2 = localStorage.getItem("opthei2");
    var width2 = localStorage.getItem("optwid2");
    console.log("final : " + final2 + "   Height: "+ height2 + "    Width: "+ width2)


    document.getElementById("option2").style.height = Number(height2) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option2").style.width = Number(width2) + "px"; // change width of textarea (do before page loads)

    document.getElementById("option2").style.backgroundImage='url('+ final2 + ')';

///////////////////////////////////////////////////////////////

    var final3 = localStorage.getItem("opt3");
    var height3 = localStorage.getItem("opthei3");
    var width3 = localStorage.getItem("optwid3");
    console.log("final : " + final3 + "   Height: "+ height3 + "    Width: "+ width3)

    document.getElementById("option3").style.height = Number(height3) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option3").style.width = Number(width3) + "px"; // change width of textarea (do before page loads)

    document.getElementById("option3").style.backgroundImage='url('+ final3 + ')';

    /////////////////////////////////////////////////////////////

    var final4 = localStorage.getItem("opt4");
    var height4 = localStorage.getItem("opthei4");
    var width4 = localStorage.getItem("optwid4");
    console.log("final : " + final4 + "   Height: "+ height4 + "    Width: "+ width4)

    document.getElementById("option4").style.height = Number(height4) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option4").style.width = Number(width4) + "px"; // change width of textarea (do before page loads)
    document.getElementById("option4").style.backgroundImage='url('+ final4 + ')';

  }

  public swap(x,y){
    var xsmall = localStorage.getItem("opt"+x);
    var xsmallwid = localStorage.getItem("optwid"+x);
    var xsmallhei = localStorage.getItem("opthei"+x);

    var xmed = localStorage.getItem("optm"+x);
    var xmedwid = localStorage.getItem("optwidm"+x);
    var xmedhei = localStorage.getItem("optheim"+x);

    var ysmall = localStorage.getItem("opt"+y);
    var ysmallwid = localStorage.getItem("optwid"+y);
    var ysmallhei = localStorage.getItem("opthei"+y);

    var ymed = localStorage.getItem("optm"+y);
    var ymedwid = localStorage.getItem("optwidm"+y);
    var ymedhei = localStorage.getItem("optheim"+y);

    localStorage.setItem("opt"+y, xsmall);
    localStorage.setItem("optwid"+y,xsmallwid);
    localStorage.setItem("opthei"+y,xsmallhei);

    localStorage.setItem("optm"+y,xmed);
    localStorage.setItem("optwidm"+y,xmedwid);
    localStorage.setItem("optheim"+y,xmedhei)

    localStorage.setItem("opt"+x, ysmall);
    localStorage.setItem("optwid"+x,ysmallwid);
    localStorage.setItem("opthei"+x,ysmallhei);

    localStorage.setItem("optm"+x, ymed)
    localStorage.setItem("optwidm"+x,ymedwid);
    localStorage.setItem("optheim"+x,ymedhei)
  }

  public option1to0(){// selected photo 1, swapping with photo 0
    console.log("ye clicked me!")
    this.swap(1,0);
    this.update();
  }


  public option2to0(){ // selected photo 2, swapping with photo 0
    this.swap(2,0);
    this.update();
  }


  public option3to0(){// selected photo 3, swapping with photo 0
    this.swap(3,0);
    this.update();
  }


  public option4to0(){ // selected photo 4, swapping with photo 0
    this.swap(4,0);
    this.update();
  }

  private bfunction() {
    this.role = (<HTMLInputElement>document.getElementById("option0")).value;
    localStorage.setItem('inputtext',this.role );
    console.log(this.role)
   // document.getElementById("thetextarea").style.width = "500px";
   // document.getElementById("thetextarea").style.height = "500px";
  }

  constructor() {

  }

  ngOnInit() {
    console.log("running page")
    this.loadimages();
    console.log("messages loaded")
    for (var i = 0; i< 5; i++) {
      this.update()
      console.log("updates")
    }
    //this.changeoptionsizes();
  }

}
