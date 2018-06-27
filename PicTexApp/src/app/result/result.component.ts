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
  // public loadimages(){
  //   var img = new Image();
  //   var imgm = new Image();
  //    for (var i = 0; i <= 4; i++) {
  //      var Sid: string = sessionStorage.getItem("id" + i);
  //      var Sowner: string = sessionStorage.getItem("owner" + i);
  //      var Ssecret: string = sessionStorage.getItem("secret" + i);
  //      var Sserver: string = sessionStorage.getItem("server" + i);
  //      var Sfarm: string = sessionStorage.getItem("farm" + i);
  //      var Stitle: string = sessionStorage.getItem("title" + i);
  //      var Sispublic: string = sessionStorage.getItem("ispublic" + i);
  //      var Sisfriend: string = sessionStorage.getItem("isfriend" + i);
  //      var Sisfamily: string = sessionStorage.getItem("isfamily" + i);
  //
  //      // gets url img for src
  //      var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_m.jpg";
  //      var finalm: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_n.jpg";
  //
  //      img.src = final;
  //      imgm.src = finalm;
  //      console.log("test")
  //      console.log(img.width)
  //      var optwid = img.width.toString();
  //      var opthei = img.height.toString();
  //      var optwidm = imgm.width.toString();
  //      var optheim = imgm.height.toString();
  //
  //      // document.getElementById("option"+i).style.backgroundImage='url('+ final + ')';
  //      sessionStorage.setItem("final" + i, final); // store final url in local storage.
  //      sessionStorage.setItem("finalm" + i, finalm);
  //
  //      sessionStorage.setItem("opt" + i, final); // each option has a small and medium url link and sizes.
  //      sessionStorage.setItem("optwid"+i, optwid);
  //      sessionStorage.setItem("opthei"+i,opthei)
  //
  //      sessionStorage.setItem("optm" + i, finalm);
  //      sessionStorage.setItem("optwidm"+i, optwidm);
  //      sessionStorage.setItem("optheim"+i, optheim)
  // }
  //   //this.update();
  // }

  public update() {
    /////////////////////////////////////////////////////////////// option 0
    var final = sessionStorage.getItem("0 source 1");
    console.log("med " + final)
    var height = sessionStorage.getItem("0 height 1");
    var width = sessionStorage.getItem("0 width 1");
    console.log("Option0: height = " + height + " Option0: Width = " + width)
    // console.log("final : " + final + "   Height: "+ height + "    Width: "+ width)
      document.getElementById("option0").style.height = height + "px"; // change height of textarea (do before page loads)
      document.getElementById("option0").style.width = width + "px"; // change width of textarea (do before page loads)
    document.getElementById("option0").style.backgroundImage='url('+ final + ')';

/////////////////////////////////////////////////////////////// option 1

    var final1 = sessionStorage.getItem("1 source 0");
    var height1 = sessionStorage.getItem("1 height 0");
    console.log("height 1: " + height1)
    var width1 = sessionStorage.getItem("1 width 0");
    console.log("width 1: "+ width1)
    console.log("Option1: height = " + height1 + " Option1: Width = " + width1)

    document.getElementById("option1").style.height = height1 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option1").style.width = width1 + "px"; // change width of textarea (do before page loads)
    document.getElementById("option1").style.backgroundImage='url('+ final1 + ')';

/////////////////////////////////////////////////////////////// option 2

    var final2 = sessionStorage.getItem("2 source 0");
    var height2 = sessionStorage.getItem("2 height 0");
    var width2 = sessionStorage.getItem("2 width 0");
    console.log("Option2: height = " + height2 + " Option2: Width = " + width2)

    // console.log("final : " + final2 + "   Height: "+ height2 + "    Width: "+ width2)


    document.getElementById("option2").style.height = height2 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option2").style.width = width2 + "px"; // change width of textarea (do before page loads)

    document.getElementById("option2").style.backgroundImage='url('+ final2 + ')';

///////////////////////////////////////////////////////////////

    var final3 = sessionStorage.getItem("3 source 0");
    var height3 = sessionStorage.getItem("3 height 0");
    var width3 = sessionStorage.getItem("3 width 0");
    console.log("Option3: height = " + height3 + " Option3: Width = " + width3)

    // console.log("final : " + final3 + "   Height: "+ height3 + "    Width: "+ width3)

    document.getElementById("option3").style.height = height3 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option3").style.width = width3 + "px"; // change width of textarea (do before page loads)

    document.getElementById("option3").style.backgroundImage='url('+ final3 + ')';

    /////////////////////////////////////////////////////////////

    var final4 = sessionStorage.getItem("4 source 0");
    var height4 = sessionStorage.getItem("4 height 0");
    var width4 = sessionStorage.getItem("4 width 0");
    console.log("Option4: height = " + height4 + " Option4: Width = " + width4)

    // console.log("final : " + final4 + "   Height: "+ height4 + "    Width: "+ width4)

    document.getElementById("option4").style.height = height4 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option4").style.width = width4 + "px"; // change width of textarea (do before page loads)
    document.getElementById("option4").style.backgroundImage='url('+ final4 + ')';

  }

  public swap(x,y){
    var xsmall = sessionStorage.getItem(x + " source 0" );
    var xsmallwid = sessionStorage.getItem(x + " width 0" );
    var xsmallhei = sessionStorage.getItem(x + " height 0" );

    var xmed = sessionStorage.getItem(x + " source 1" );
    var xmedwid = sessionStorage.getItem(x + " width 1" );
    var xmedhei = sessionStorage.getItem(x + " height 1" );

    var ysmall = sessionStorage.getItem(y + " source 0" );
    var ysmallwid = sessionStorage.getItem(y + " width 0" );
    var ysmallhei = sessionStorage.getItem(y + " height 0" );

    var ymed = sessionStorage.getItem(y + " source 1" );
    var ymedwid = sessionStorage.getItem(y + " width 1" );
    var ymedhei = sessionStorage.getItem(y + " height 1" );

    sessionStorage.setItem(y + " source 0" , xsmall);
    sessionStorage.setItem(y + " width 0" ,xsmallwid);
    sessionStorage.setItem(y + " height 0" ,xsmallhei);

    sessionStorage.setItem(y + " source 1" ,xmed);
    sessionStorage.setItem(y + " width 1" ,xmedwid);
    sessionStorage.setItem(y + " height 1" ,xmedhei)

    sessionStorage.setItem(x + " source 0" , ysmall);
    sessionStorage.setItem(x + " width 0" ,ysmallwid);
    sessionStorage.setItem(x + " height 0" ,ysmallhei);

    sessionStorage.setItem(x + " source 1" , ymed)
    sessionStorage.setItem(x + " width 1" ,ymedwid);
    sessionStorage.setItem(x + " height 1" ,ymedhei)
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

    this.update();
  console.log("PAGE START")

  var ysmallwid = sessionStorage.getItem("optwid0");
  var ysmallhei = sessionStorage.getItem("opthei0");

    // document.getElementById("option1").style.height = Number(ysmallhei) + "px"; // change height of textarea (do before page loads)
    // document.getElementById("option1").style.width = Number(ysmallwid) + "px"; // change
  var ysmallwidm = sessionStorage.getItem("0 width 2");
  var ysmallheim = sessionStorage.getItem("0 height 2");


  console.log("PAGE END")

}

}
