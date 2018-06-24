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

  public loadimages(){
    var img = new Image();
    var imgm = new Image();
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
       var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_m.jpg";
       var finalm: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_n.jpg";

       img.src = final;
       imgm.src = finalm;
       var optwid = img.width.toString();
       var opthei = img.height.toString();
       var optwidm = imgm.width.toString();
       var optheim = imgm.height.toString();

       // document.getElementById("option"+i).style.backgroundImage='url('+ final + ')';
       sessionStorage.setItem("final" + i, final); // store final url in local storage.
       sessionStorage.setItem("finalm" + i, finalm);

       sessionStorage.setItem("opt" + i, final); // each option has a small and medium url link and sizes.
       sessionStorage.setItem("optwid"+i, optwid);
       sessionStorage.setItem("opthei"+i,opthei)

       sessionStorage.setItem("optm" + i, finalm);
       sessionStorage.setItem("optwidm"+i, optwidm);
       sessionStorage.setItem("optheim"+i, optheim)
  }
    //this.update();
  }

  public update() {
    /////////////////////////////////////////////////////////////// option 0
    var finalsmall = sessionStorage.getItem("opt0")
    console.log("small " + finalsmall)
    var final = sessionStorage.getItem("optm0");
    console.log("med " + final)
    var height = sessionStorage.getItem("optheim0");
    var width = sessionStorage.getItem("optwidm0");
    console.log("Option0: height = " + height + " Option0: Width = " + width)
    // console.log("final : " + final + "   Height: "+ height + "    Width: "+ width)
      document.getElementById("option0").style.height = Number(height) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option0").style.width = Number(width) + "px"; // change width of textarea (do before page loads)
    document.getElementById("option0").style.backgroundImage='url('+ final + ')';

/////////////////////////////////////////////////////////////// option 1

    var final1 = sessionStorage.getItem("opt1");
    var height1 = sessionStorage.getItem("opthei1");
    console.log("height 1: " + height1)
    var width1 = sessionStorage.getItem("optwid1");
    console.log("width 1: "+ width1)
    console.log("Option1: height = " + height1 + " Option1: Width = " + width1)

    //   console.log("final : " + final1 + "   Height: "+ height1 + "    Width: "+ width1)


    document.getElementById("option1").style.height = Number(height1) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option1").style.width = Number(width1) + "px"; // change width of textarea (do before page loads)
    document.getElementById("option1").style.backgroundImage='url('+ final1 + ')';

/////////////////////////////////////////////////////////////// option 2

    var final2 = sessionStorage.getItem("opt2");
    var height2 = sessionStorage.getItem("opthei2");
    var width2 = sessionStorage.getItem("optwid2");
    console.log("Option2: height = " + height2 + " Option2: Width = " + width2)

    // console.log("final : " + final2 + "   Height: "+ height2 + "    Width: "+ width2)


    document.getElementById("option2").style.height = Number(height2) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option2").style.width = Number(width2) + "px"; // change width of textarea (do before page loads)

    document.getElementById("option2").style.backgroundImage='url('+ final2 + ')';

///////////////////////////////////////////////////////////////

    var final3 = sessionStorage.getItem("opt3");
    var height3 = sessionStorage.getItem("opthei3");
    var width3 = sessionStorage.getItem("optwid3");
    console.log("Option3: height = " + height3 + " Option3: Width = " + width3)

    // console.log("final : " + final3 + "   Height: "+ height3 + "    Width: "+ width3)

    document.getElementById("option3").style.height = Number(height3) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option3").style.width = Number(width3) + "px"; // change width of textarea (do before page loads)

    document.getElementById("option3").style.backgroundImage='url('+ final3 + ')';

    /////////////////////////////////////////////////////////////

    var final4 = sessionStorage.getItem("opt4");
    var height4 = sessionStorage.getItem("opthei4");
    var width4 = sessionStorage.getItem("optwid4");
    console.log("Option4: height = " + height4 + " Option4: Width = " + width4)

    // console.log("final : " + final4 + "   Height: "+ height4 + "    Width: "+ width4)

    document.getElementById("option4").style.height = Number(height4) + "px"; // change height of textarea (do before page loads)
      document.getElementById("option4").style.width = Number(width4) + "px"; // change width of textarea (do before page loads)
    document.getElementById("option4").style.backgroundImage='url('+ final4 + ')';

  }

  public swap(x,y){
    var xsmall = sessionStorage.getItem("opt"+x);
    var xsmallwid = sessionStorage.getItem("optwid"+x);
    var xsmallhei = sessionStorage.getItem("opthei"+x);

    var xmed = sessionStorage.getItem("optm"+x);
    var xmedwid = sessionStorage.getItem("optwidm"+x);
    var xmedhei = sessionStorage.getItem("optheim"+x);

    var ysmall = sessionStorage.getItem("opt"+y);
    var ysmallwid = sessionStorage.getItem("optwid"+y);
    console.log("y small width = " + ysmallwid)
    var ysmallhei = sessionStorage.getItem("opthei"+y);
    console.log("y small height = " + ysmallhei)


    var ymed = sessionStorage.getItem("optm"+y);
    var ymedwid = sessionStorage.getItem("optwidm"+y);
    var ymedhei = sessionStorage.getItem("optheim"+y);

    sessionStorage.setItem("opt"+y, xsmall);
    sessionStorage.setItem("optwid"+y,xsmallwid);
    sessionStorage.setItem("opthei"+y,xsmallhei);

    sessionStorage.setItem("optm"+y,xmed);
    sessionStorage.setItem("optwidm"+y,xmedwid);
    sessionStorage.setItem("optheim"+y,xmedhei)

    sessionStorage.setItem("opt"+x, ysmall);
    sessionStorage.setItem("optwid"+x,ysmallwid);
    sessionStorage.setItem("opthei"+x,ysmallhei);

    sessionStorage.setItem("optm"+x, ymed)
    sessionStorage.setItem("optwidm"+x,ymedwid);
    sessionStorage.setItem("optheim"+x,ymedhei)
  }

  public option1to0(){// selected photo 1, swapping with photo 0
    this.swap(1,0);
    console.log("1 to 0")
    this.update();
  }

  public option2to0(){ // selected photo 2, swapping with photo 0
    this.swap(2,0);
    console.log("2 to 0")

    this.update();
  }

  public option3to0(){// selected photo 3, swapping with photo 0
    this.swap(3,0);
    console.log("3 to 0")
    this.update();
  }

  public option4to0(){ // selected photo 4, swapping with photo 0
    this.swap(4,0);
    console.log("4 to 0")
    this.update();
  }

  private bfunction() {
    this.role = (<HTMLInputElement>document.getElementById("option0")).value;
    sessionStorage.setItem('inputtext',this.role );
    console.log(this.role)
  }

  constructor() {
  }

  ngOnInit() {
    this.loadimages();

    this.update();
  console.log("PAGE START")

  var ysmallwid = sessionStorage.getItem("optwid0");
  var ysmallhei = sessionStorage.getItem("opthei0");
  console.log(ysmallhei)
  console.log(ysmallwid)

    // document.getElementById("option1").style.height = Number(ysmallhei) + "px"; // change height of textarea (do before page loads)
    // document.getElementById("option1").style.width = Number(ysmallwid) + "px"; // change
  var ysmallwidm = sessionStorage.getItem("optwidm0");
  var ysmallheim = sessionStorage.getItem("optheim0");
  console.log(ysmallheim)
  console.log(ysmallwidm)

  if ((Number(ysmallwid) && (Number(ysmallhei))) == 0) {
    //  window.location.reload(true);
  }
  console.log("PAGE END")
}

}
