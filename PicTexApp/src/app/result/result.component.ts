import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";
// import fs = require("fs");
// import {readFileSync} from "fs";

// Helper text in result page, save to top right or bigger?, smaller buttons? save url, bigger pictures?
@Component({
  // selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [],
})
export class ResultComponent implements OnInit {
  public badlist = "2 girls 1 cup,2g1c,4r5e,5h1t,5hit,a$$,a$$hole,a_s_s,a2m,a54,a55,a55hole,acrotomophilia,aeolus,ahole,alabama hot pocket,alaskan pipeline,anal,anal impaler,anal leakage,analprobe,anilingus,anus,apeshit,ar5e,areola,areole,arian,arrse,arse,arsehole,aryan,ass,ass fuck,ass fuck,ass hole,assbag,assbandit,assbang,assbanged,assbanger,assbangs,assbite,assclown,asscock,asscracker,asses,assface,assfaces,assfuck,assfucker,ass-fucker,assfukka,assgoblin,assh0le,asshat,ass-hat,asshead,assho1e,asshole,assholes,asshopper,ass-jabber,assjacker,asslick,asslicker,assmaster,assmonkey,assmucus,assmucus,assmunch,assmuncher,assnigger,asspirate,ass-pirate,assshit,assshole,asssucker,asswad,asswhole,asswipe,asswipes,auto erotic,autoerotic,axwound,azazel,azz,b!tch,b00bs,b17ch,b1tch,babeland,baby batter,baby juice,ball gag,ball gravy,ball kicking,ball licking,ball sack,ball sucking,ballbag,balls,ballsack,bampot,bang (one's) box,bangbros,bareback,barely legal,barenaked,barf,bastard,bastardo,bastards,bastinado,batty boy,bawdy,bbw,bdsm,beaner,beaners,beardedclam,beastial,beastiality,beatch,beaver,beaver cleaver,beaver lips,beef curtain,beef curtain,beef curtains,beeyotch,bellend,bender,beotch,bescumber,bestial,bestiality,bi+ch,biatch,big black,big breasts,big knockers,big tits,bigtits,bimbo,bimbos,bint,birdlock,bitch,bitch tit,bitch tit,bitchass,bitched,bitcher,bitchers,bitches,bitchin,bitching,bitchtits,bitchy,black cock,blonde action,blonde on blonde action,bloodclaat,bloody,bloody hell,blow job,blow me,blow mud,blow your load,blowjob,blowjobs,blue waffle,blue waffle,blumpkin,blumpkin,bod,bodily,boink,boiolas,bollock,bollocks,bollok,bollox,bondage,boned,boner,boners,bong,boob,boobies,boobs,booby,booger,bookie,boong,booobs,boooobs,booooobs,booooooobs,bootee,bootie,booty,booty call,booze,boozer,boozy,bosom,bosomy,breasts,Breeder,brotherfucker,brown showers,brunette action,buceta,bugger,bukkake,bull shit,bulldyke,bullet vibe,bullshit,bullshits,bullshitted,bullturds,bum,bum boy,bumblefuck,bumclat,bummer,buncombe,bung,bung hole,bunghole,bunny fucker,bust a load,bust a load,busty,butt,butt fuck,butt fuck,butt plug,buttcheeks,buttfuck,buttfucka,buttfucker,butthole,buttmuch,buttmunch,butt-pirate,buttplug,c.0.c.k,c.o.c.k.,c.u.n.t,c0ck,c-0-c-k,c0cksucker,caca,cacafuego,cahone,camel toe,cameltoe,camgirl,camslut,camwhore,carpet muncher,carpetmuncher,cawk,cervix,chesticle,chi-chi man,chick with a dick,child-fucker,chinc,chincs,chink,chinky,choad,choade,choade,choc ice,chocolate rosebuds,chode,chodes,chota bags,chota bags,cipa,circlejerk,cl1t,cleveland steamer,climax,clit,clit licker,clit licker,clitface,clitfuck,clitoris,clitorus,clits,clitty,clitty litter,clitty litter,clover clamps,clunge,clusterfuck,cnut,cocain,cocaine,coccydynia,cock,c-o-c-k,cock pocket,cock pocket,cock snot,cock snot,cock sucker,cockass,cockbite,cockblock,cockburger,cockeye,cockface,cockfucker,cockhead,cockholster,cockjockey,cockknocker,cockknoker,Cocklump,cockmaster,cockmongler,cockmongruel,cockmonkey,cockmunch,cockmuncher,cocknose,cocknugget,cocks,cockshit,cocksmith,cocksmoke,cocksmoker,cocksniffer,cocksuck,cocksuck,cocksucked,cocksucked,cocksucker,cock-sucker,cocksuckers,cocksucking,cocksucks,cocksucks,cocksuka,cocksukka,cockwaffle,coffin dodger,coital,cok,cokmuncher,coksucka,commie,condom,coochie,coochy,coon,coonnass,coons,cooter,cop some wood,cop some wood,coprolagnia,coprophilia,corksucker,cornhole,cornhole,corp whore,corp whore,corpulent,cox,crabs,crack,cracker,crackwhore,crap,crappy,creampie,cretin,crikey,cripple,crotte,cum,cum chugger,cum chugger,cum dumpster,cum dumpster,cum freak,cum freak,cum guzzler,cum guzzler,cumbubble,cumdump,cumdump,cumdumpster,cumguzzler,cumjockey,cummer,cummin,cumming,cums,cumshot,cumshots,cumslut,cumstain,cumtart,cunilingus,cunillingus,cunnie,cunnilingus,cunny,cunt,c-u-n-t,cunt hair,cunt hair,cuntass,cuntbag,cuntbag,cuntface,cunthole,cunthunter,cuntlick,cuntlick,cuntlicker,cuntlicker,cuntlicking,cuntlicking,cuntrag,cunts,cuntsicle,cuntsicle,cuntslut,cunt-struck,cunt-struck,cus,cut rope,cut rope,cyalis,cyberfuc,cyberfuck,cyberfuck,cyberfucked,cyberfucked,cyberfucker,cyberfuckers,cyberfucking,cyberfucking,d0ng,d0uch3,d0uche,d1ck,d1ld0,d1ldo,dago,dagos,dammit,damn,damned,damnit,darkie,darn,date rape,daterape,dawgie-style,deep throat,deepthroat,deggo,dendrophilia,dick,dick head,dick hole,dick hole,dick shy,dick shy,dickbag,dickbeaters,dickdipper,dickface,dickflipper,dickfuck,dickfucker,dickhead,dickheads,dickhole,dickish,dick-ish,dickjuice,dickmilk,dickmonger,dickripper,dicks,dicksipper,dickslap,dick-sneeze,dicksucker,dicksucking,dicktickler,dickwad,dickweasel,dickweed,dickwhipper,dickwod,dickzipper,diddle,dike,dildo,dildos,diligaf,dillweed,dimwit,dingle,dingleberries,dingleberry,dink,dinks,dipship,dipshit,dirsa,dirty,dirty pillows,dirty sanchez,dirty Sanchez,div,dlck,dog style,dog-fucker,doggie style,doggiestyle,doggie-style,doggin,dogging,doggy style,doggystyle,doggy-style,dolcett,domination,dominatrix,dommes,dong,donkey punch,donkeypunch,donkeyribber,doochbag,doofus,dookie,doosh,dopey,double dong,double penetration,Doublelift,douch3,douche,douchebag,douchebags,douche-fag,douchewaffle,douchey,dp action,drunk,dry hump,duche,dumass,dumb ass,dumbass,dumbasses,Dumbcunt,dumbfuck,dumbshit,dummy,dumshit,dvda,dyke,dykes,eat a dick,eat a dick,eat hair pie,eat hair pie,eat my ass,ecchi,ejaculate,ejaculated,ejaculates,ejaculates,ejaculating,ejaculating,ejaculatings,ejaculation,ejakulate,erect,erection,erotic,erotism,escort,essohbee,eunuch,extacy,extasy,f u c k,f u c k e r,f.u.c.k,f_u_c_k,f4nny,facial,fack,fag,fagbag,fagfucker,fagg,fagged,fagging,faggit,faggitt,faggot,faggotcock,faggots,faggs,fagot,fagots,fags,fagtard,faig,faigt,fanny,fannybandit,fannyflaps,fannyfucker,fanyy,fart,fartknocker,fatass,fcuk,fcuker,fcuking,fecal,feck,fecker,feist,felch,felcher,felching,fellate,fellatio,feltch,feltcher,female squirting,femdom,fenian,fice,figging,fingerbang,fingerfuck,fingerfuck,fingerfucked,fingerfucked,fingerfucker,fingerfucker,fingerfuckers,fingerfucking,fingerfucking,fingerfucks,fingerfucks,fingering,fist fuck,fist fuck,fisted,fistfuck,fistfucked,fistfucked,fistfucker,fistfucker,fistfuckers,fistfuckers,fistfucking,fistfucking,fistfuckings,fistfuckings,fistfucks,fistfucks,fisting,fisty,flamer,flange,flaps,fleshflute,flog the log,flog the log,floozy,foad,foah,fondle,foobar,fook,fooker,foot fetish,footjob,foreskin,freex,frenchify,frigg,frigga,frotting,fubar,fuc,fuck,fuck,f-u-c-k,fuck buttons,fuck hole,fuck hole,Fuck off,fuck puppet,fuck puppet,fuck trophy,fuck trophy,fuck yo mama,fuck yo mama,fuck you,fucka,fuckass,fuck-ass,fuck-ass,fuckbag,fuck-bitch,fuck-bitch,fuckboy,fuckbrain,fuckbutt,fuckbutter,fucked,fuckedup,fucker,fuckers,fuckersucker,fuckface,fuckhead,fuckheads,fuckhole,fuckin,fucking,fuckings,fuckingshitmotherfucker,fuckme,fuckme,fuckmeat,fuckmeat,fucknugget,fucknut,fucknutt,fuckoff,fucks,fuckstick,fucktard,fuck-tard,fucktards,fucktart,fucktoy,fucktoy,fucktwat,fuckup,fuckwad,fuckwhit,fuckwit,fuckwitt,fudge packer,fudgepacker,fudge-packer,fuk,fuker,fukker,fukkers,fukkin,fuks,fukwhit,fukwit,fuq,futanari,fux,fux0r,fvck,fxck,gae,gai,gang bang,gangbang,gang-bang,gang-bang,gangbanged,gangbangs,ganja,gash,gassy ass,gassy ass,gay,gay sex,gayass,gaybob,gaydo,gayfuck,gayfuckist,gaylord,gays,gaysex,gaytard,gaywad,gender bender,genitals,gey,gfy,ghay,ghey,giant cock,gigolo,ginger,gippo,girl on,girl on top,girls gone wild,git,glans,goatcx,goatse,god,god damn,godamn,godamnit,goddam,god-dam,goddammit,goddamn,goddamned,god-damned,goddamnit,godsdamn,gokkun,golden shower,goldenshower,golliwog,gonad,gonads,goo girl,gooch,goodpoop,gook,gooks,goregasm,gringo,grope,group sex,gspot,g-spot,gtfo,guido,guro,h0m0,h0mo,ham flap,ham flap,hand job,handjob,hard core,hard on,hardcore,hardcoresex,he11,hebe,heeb,hell,hemp,hentai,heroin,herp,herpes,herpy,heshe,he-she,hircismus,hitler,hiv,ho,hoar,hoare,hobag,hoe,hoer,holy shit,hom0,homey,homo,homodumbshit,homoerotic,homoey,honkey,honky,hooch,hookah,hooker,hoor,hootch,hooter,hooters,hore,horniest,horny,hot carl,hot chick,hotsex,how to kill,how to murdep,how to murder,huge fat,hump,humped,humping,hun,hussy,hymen,iap,iberian slap,inbred,incest,injun,intercourse,jack off,jackass,jackasses,jackhole,jackoff,jack-off,jaggi,jagoff,jail bait,jailbait,jap,japs,jelly donut,jerk,jerk off,jerk0ff,jerkass,jerked,jerkoff,jerk-off,jigaboo,jiggaboo,jiggerboo,jism,jiz,jiz,jizm,jizm,jizz,jizzed,jock,juggs,jungle bunny,junglebunny,junkie,junky,kafir,kawk,kike,kikes,kill,kinbaku,kinkster,kinky,klan,knob,knob end,knobbing,knobead,knobed,knobend,knobhead,knobjocky,knobjokey,kock,kondum,kondums,kooch,kooches,kootch,kraut,kum,kummer,kumming,kums,kunilingus,kunja,kunt,kwif,kwif,kyke,l3i+ch,l3itch,labia,lameass,lardass,leather restraint,leather straight jacket,lech,lemon party,LEN,leper,lesbian,lesbians,lesbo,lesbos,lez,lezza/lesbo,lezzie,lmao,lmfao,loin,loins,lolita,looney,lovemaking,lube,lust,lusting,lusty,m0f0,m0fo,m45terbate,ma5terb8,ma5terbate,mafugly,mafugly,make me come,male squirting,mams,masochist,massa,masterb8,masterbat*,masterbat3,masterbate,master-bate,master-bate,masterbating,masterbation,masterbations,masturbate,masturbating,masturbation,maxi,mcfagget,menage a trois,menses,menstruate,menstruation,meth,m-fucking,mick,microphallus,middle finger,midget,milf,minge,minger,missionary position,mof0,mofo,mo-fo,molest,mong,moo moo foo foo,moolie,moron,mothafuck,mothafucka,mothafuckas,mothafuckaz,mothafucked,mothafucked,mothafucker,mothafuckers,mothafuckin,mothafucking,mothafucking,mothafuckings,mothafucks,mother fucker,mother fucker,motherfuck,motherfucka,motherfucked,motherfucker,motherfuckers,motherfuckin,motherfucking,motherfuckings,motherfuckka,motherfucks,mound of venus,mr hands,muff,muff diver,muff puff,muff puff,muffdiver,muffdiving,munging,munter,murder,mutha,muthafecker,muthafuckker,muther,mutherfucker,n1gga,n1gger,naked,nambla,napalm,nappy,nawashi,nazi,nazism,need the dick,need the dick,negro,neonazi,nig nog,nigaboo,nigg3r,nigg4h,nigga,niggah,niggas,niggaz,nigger,niggers,niggle,niglet,nig-nog,nimphomania,nimrod,ninny,ninnyhammer,nipple,nipples,nob,nob jokey,nobhead,nobjocky,nobjokey,nonce,nsfw images,nude,nudity,numbnuts,nut butter,nut butter,nut sack,nutsack,nutter,nympho,nymphomania,octopussy,old bag,omg,omorashi,one cup two girls,one guy one jar,opiate,opium,orally,organ,orgasim,orgasims,orgasm,orgasmic,orgasms,orgies,orgy,ovary,ovum,ovums,p.u.s.s.y.,p0rn,paedophile,paki,panooch,pansy,pantie,panties,panty,pawn,pcp,pecker,peckerhead,pedo,pedobear,pedophile,pedophilia,pedophiliac,pee,peepee,pegging,penetrate,penetration,penial,penile,penis,penisbanger,penisfucker,penispuffer,perversion,phallic,phone sex,phonesex,phuck,phuk,phuked,phuking,phukked,phukking,phuks,phuq,piece of shit,pigfucker,pikey,pillowbiter,pimp,pimpis,pinko,piss,piss off,piss pig,pissed,pissed off,pisser,pissers,pisses,pisses,pissflaps,pissin,pissin,pissing,pissoff,pissoff,piss-off,pisspig,playboy,pleasure chest,pms,polack,pole smoker,polesmoker,pollock,ponyplay,poof,poon,poonani,poonany,poontang,poop,poop chute,poopchute,Poopuncher,porch monkey,porchmonkey,porn,porno,pornography,pornos,pot,potty,prick,pricks,prickteaser,prig,prince albert piercing,prod,pron,prostitute,prude,psycho,pthc,pube,pubes,pubic,pubis,punani,punanny,punany,punkass,punky,punta,puss,pusse,pussi,pussies,pussy,pussy fart,pussy fart,pussy palace,pussy palace,pussylicking,pussypounder,pussys,pust,puto,queaf,queaf,queef,queer,queerbait,queerhole,queero,queers,quicky,quim,racy,raghead,raging boner,rape,raped,raper,rapey,raping,rapist,raunch,rectal,rectum,rectus,reefer,reetard,reich,renob,retard,retarded,reverse cowgirl,revue,rimjaw,rimjob,rimming,ritard,rosy palm,rosy palm and her 5 sisters,rtard,r-tard,rubbish,rum,rump,rumprammer,ruski,rusty trombone,s hit,s&m,s.h.i.t.,s.o.b.,s_h_i_t,s0b,sadism,sadist,sambo,sand nigger,sandbar,sandbar,Sandler,sandnigger,sanger,santorum,sausage queen,sausage queen,scag,scantily,scat,schizo,schlong,scissoring,screw,screwed,screwing,scroat,scrog,scrot,scrote,scrotum,scrud,scum,seaman,seamen,seduce,seks,semen,sex,sexo,sexual,sexy,sh!+,sh!t,sh1t,s-h-1-t,shag,shagger,shaggin,shagging,shamedame,shaved beaver,shaved pussy,shemale,shi+,shibari,shirt lifter,shit,s-h-i-t,shit ass,shit fucker,shit fucker,shitass,shitbag,shitbagger,shitblimp,shitbrains,shitbreath,shitcanned,shitcunt,shitdick,shite,shiteater,shited,shitey,shitface,shitfaced,shitfuck,shitfull,shithead,shitheads,shithole,shithouse,shiting,shitings,shits,shitspitter,shitstain,shitt,shitted,shitter,shitters,shitters,shittier,shittiest,shitting,shittings,shitty,shiz,shiznit,shota,shrimping,sissy,skag,skank,skeet,skullfuck,slag,slanteye,slave,sleaze,sleazy,slope,slope,slut,slut bucket,slut bucket,slutbag,slutdumper,slutkiss,sluts,smartass,smartasses,smeg,smegma,smut,smutty,snatch,sniper,snowballing,snuff,s-o-b,sod off,sodom,sodomize,sodomy,son of a bitch,son of a motherless goat,son of a whore,son-of-a-bitch,souse,soused,spac,spade,sperm,spic,spick,spik,spiks,splooge,splooge moose,spooge,spook,spread legs,spunk,stfu,stiffy,stoned,strap on,strapon,strappado,strip,strip club,stroke,stupid,style doggy,suck,suckass,sucked,sucking,sucks,suicide girls,sultry women,sumofabiatch,swastika,swinger,t1t,t1tt1e5,t1tties,taff,taig,tainted love,taking the piss,tampon,tard,tart,taste my,tawdry,tea bagging,teabagging,teat,teets,teez,teste,testee,testes,testical,testicle,testis,threesome,throating,thrust,thug,thundercunt,tied up,tight white,tinkle,tit,tit wank,tit wank,titfuck,titi,tities,tits,titt,tittie5,tittiefucker,titties,titty,tittyfuck,tittyfucker,tittywank,titwank,toke,tongue in a,toots,topless,tosser,towelhead,tramp,tranny,transsexual,trashy,tribadism,trumped,tub girl,tubgirl,turd,tush,tushy,tw4t,twat,twathead,twatlips,twats,twatty,twatwaffle,twink,twinkie,two fingers,two fingers with tongue,two girls one cup,twunt,twunter,ugly,unclefucker,undies,undressing,unwed,upskirt,urethra play,urinal,urine,urophilia,uterus,uzi,v14gra,v1gra,vag,vagina,vajayjay,va-j-j,valium,venus mound,veqtable,viagra,vibrator,violet wand,virgin,vixen,vjayjay,vodka,vomit,vorarephilia,voyeur,vulgar,vulva,w00se,wad,wang,wank,wanker,wankjob,wanky,wazoo,wedgie,weed,weenie,weewee,weiner,weirdo,wench,wet dream,wetback,wh0re,wh0reface,white power,whiz,whoar,whoralicious,whore,whorealicious,whorebag,whored,whoreface,whorehopper,whorehouse,whores,whoring,wigger,willies,willy,window licker,wiseass,wiseasses,wog,womb,wop,wrapping men,wrinkled starfish,wtf,xrated,x-rated,xx,xxx,yaoi,yeasty,yellow showers,yid,yiffy,yobbo,zibbi,zoophilia,zubb";
  public badarray = this.badlist.split(",");
  // private role: string;
  // private localtext: string =  this.role = sessionStorage.getItem('inputtext');
  imgsrc: string = "https://farm";
  imgfarmid: string = ".staticflickr.com/";
  tagsURL: string = "http://localhost:4200/api/getTags";
  elements: [string];
  allText : [string];
  /////////////////////IMAGE EDIT VARIBLES

  prevcd: boolean = false;
  nextcd : boolean = false;
  nextprev = 0;
  editurl: string = "http://localhost:4200/api/editImage";
  public urls: string = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19";
  public urlarray = this.urls.split(",");

  editfamily: String;
  editsize = 32;
  editformat = 0;
  editcol : String;
  editstring : String;
  editx = 100;
  edity = 100;
  editname : String = "edited";


  ////////////////////IMAGE EDIT VARIABLES

  flag = 1;
  private  baseurl: string = "https://api.flickr.com/services/rest/";
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";
  searchterm: string = "nothing";
  searchextension: string = "?method=flickr.photos.search&api_key=";
  sizeextension: string = "?method=flickr.photos.getSizes&api_key=";
  private imagesearchurl: string = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm+"&tag_mode=all&sort=relevance&safe_search=1&content_type=1&text="+this.searchterm ;
  private imagesizeurl: string = this.baseurl+this.sizeextension+this.APIkey;

  public loadimages() {
    let image1;
    let image2;
     for (let i = 0; i <= 18; i++) {
       let Sid: string = sessionStorage.getItem("id" + i);
       // let Sowner: string = sessionStorage.getItem("owner" + i);
       let Ssecret: string = sessionStorage.getItem("secret" + i);
       let Sserver: string = sessionStorage.getItem("server" + i);
       let Sfarm: string = sessionStorage.getItem("farm" + i);
       // let Stitle: string = sessionStorage.getItem("title" + i);
       // console.log(Stitle)
       // let Sispublic: string = sessionStorage.getItem("ispublic" + i);
       //let Sisfriend: string = sessionStorage.getItem("isfriend" + i);
       // let Sisfamily: string = sessionStorage.getItem("isfamily" + i);

       // gets url img for src (t for thumbnail and n for "small")
       let thumbfinal: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_t.jpg";
       let final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_c.jpg";

      image1 = document.getElementById("choice"+i) as HTMLImageElement;
      image2 = document.getElementById("thumb"+i) as HTMLImageElement;
      this.urlarray[i] = final;
      image1.src = final;
      image2.src = thumbfinal;
   }
  console.log(this.urlarray)
    this.editurl = this.urlarray[0];

     if (sessionStorage['uploadedphoto']){
       console.log("uploaded file detected");
       let upsrc = sessionStorage.getItem("uploadedphoto");
       let imageup1 = document.getElementById("choice19") as HTMLImageElement;
       let imageup2 = document.getElementById("thumb19") as HTMLImageElement;
       imageup1.src = upsrc;
       imageup2.src = upsrc;

     }
     else{
       console.log("no uploaded file detected here");
     }

  }

  private updateImgSearchURL(string) {
    this.imagesearchurl = this.baseurl+this.searchextension+this.APIkey+"&tags="+string+"&tag_mode=all&sort=relevance&safe_search=1&content_type=1&text="+string;
  }

  private updateimages(){ // use tags, get correct tag string, create flickr url, create xhr request, open and update thumbnail + carousel images.
      // this.elements = tag array
      (<HTMLInputElement>document.getElementById("addbutton")).innerText = "Updating";
      (<HTMLInputElement>document.getElementById("addbutton")).disabled = true;
      for (let i=1; i<=this.elements.length; i++) {
        (<HTMLInputElement>document.getElementById("badge"+i)).disabled = true;
      }

    let tagstring = this.elements.join(",+");
    this.updateImgSearchURL(tagstring);

    let results;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        // document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;

        let parser = new DOMParser();
        let xmlDoc= parser.parseFromString(results,  "text/xml");
        let x = xmlDoc.documentElement.getElementsByTagName("photo");

        // console.log(x)

        for (let i = 0; i <= 18 ; i++) {
          let id = x[i].getAttribute("id");
          let owner = x[i].getAttribute("owner");
          let secret = x[i].getAttribute("secret");
          let server = x[i].getAttribute("server");
          let farm = x[i].getAttribute("farm");
          let title = x[i].getAttribute("title");
          let ispublic = x[i].getAttribute("ispublic");
          let isfriend = x[i].getAttribute("isfriend");
          let isfamily = x[i].getAttribute("isfamily");
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
    // let y = xhr.responseXML;
    // console.log("y= " +y[0].attributes[0].nodeValue)
    // console.log("successfully changed images")
    // images are now updated, use loadimages to update.

    setTimeout(() => {this.loadimages();
    (<HTMLInputElement>document.getElementById("addbutton")).disabled = false;
      (<HTMLInputElement>document.getElementById("addbutton")).innerText = "Add Tag";

      for (let i=1; i<=this.elements.length; i++) {
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
    // let tagstring = String.join(",",this.elements)
      let tt = this.elements.join(",+");

    // console.log(tt)
  }

  private getTags() {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET",this.tagsURL, false);
    xhr.send();
    if(xhr.readyState == 4 && xhr.status == 200) {
      // console.log(xhr.responseText);
      this.elements = eval(xhr.responseText);
    }
  }

  private loadtags(){
    for(let j = 1; j < 10 ; j++ ) {
      document.getElementById("badge"+j).innerHTML="";
    }
    for(let i = 0; i < this.elements.length; i++ ){
      for (let j = 0; j <= this.badarray.length; j++){
        if (this.elements[i] === this.badarray[j]){
          this.elements.splice(i,1);
          i--;
          break;
        }
      }
      document.getElementById("badge"+(i+1)).innerHTML=this.elements[i] + '  <i (click)= "test()" class="fa fa-times" ></i>';

    }
  }

  private addtag(){
    let truee = "1"
    sessionStorage.setItem("addedtag",truee);
    // console.log("pushed")
    let newtag = (<HTMLInputElement>document.getElementById("tag")).value;
    if(newtag){
      for (let i = 0; i<= this.badarray.length; i++){
        if (newtag === this.badarray[i]){
          (<HTMLInputElement>document.getElementById("tag")).value="";
          return;
        }
      }      // console.log(newtag)
      this.elements.push(newtag);
      this.loadtags();
      (<HTMLInputElement>document.getElementById("tag")).value="";
      this.updateimages();
    }
  }

  private Remove(int){
    this.elements.splice(int,1)
    // console.log(this.elements)
    this.loadtags();
    this.updateimages();
  }

  private increasefont() {
    let box = document.getElementById("option0");
    let size = window.getComputedStyle(box, null).getPropertyValue('font-size');
    let fontsize = parseFloat(size);
    if (fontsize < 32) {
      box.style.fontSize = (fontsize + 2) + 'px';
      let fontInput = (<HTMLInputElement>document.getElementById("fontSizeInput"));
      fontInput.value = String(fontsize + 2);
      //this.editsize = fontsize + 2;
    }
  }

  private decreasefont(){
    let box = document.getElementById("option0");
    let size = window.getComputedStyle(box, null).getPropertyValue('font-size');
    let fontsize = parseFloat(size);
    if (fontsize > 10) {
      box.style.fontSize = (fontsize - 2) + 'px';
      let fontInput = (<HTMLInputElement>document.getElementById("fontSizeInput"));
      fontInput.value = String(fontsize - 2);
      //this.editsize = fontsize - 2;
    }


  }

  private setFontSize(size : number) {
    let box = document.getElementById("option0");
    box.style.fontSize = size + 'px';
    //this.editsize = size;

  }

  private normalfont(){
    let box = document.getElementById("option0");
    box.style.fontStyle = "normal";
    box.style.fontWeight = "normal";
    //this.editformat = 0;
  }

  private boldfont(){
    let box = document.getElementById("option0");
    // console.log(box.style.fontWeight)
    if (box.style.fontWeight == "bold"){
      box.style.fontWeight = "normal";
      //this.editformat = 0;
    }
    else {
      box.style.fontWeight = "bold";
      //this.editformat = 1;
    }
  }

  private italicfont(){
    let box = document.getElementById("option0");
    // console.log(box.style.fontStyle)
    if (box.style.fontStyle == "italic"){
      box.style.fontStyle = "normal";
      //this.editformat = 0;

    }
    else{
      box.style.fontStyle = "italic";
      //this.editformat = 2;

    }

  }

  private underlinefont(){
    let box = document.getElementById("option0");
    // console.log(box.style.textDecoration)
    if (box.style.textDecoration == "underline"){
      box.style.textDecoration = "none";

    }
    else{
      box.style.textDecoration = "underline";
    }

  }

  private changefont(string){
    let box = document.getElementById("option0");
    document.getElementById("fontfamilydropdown").style.fontFamily = string;
    document.getElementById("fontfamilydropdown").innerText = string;
    box.style.fontFamily = string;
    //this.editfamily = string;
  }

  constructor() {}

///////////////////////////////
  private dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
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
    let savedd = (<HTMLInputElement>document.getElementById("option0")).textContent; //inputted text from textarea
    sessionStorage.setItem('inputtext',savedd );

    let results;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;

        let parser = new DOMParser();
        let xmlDoc= parser.parseFromString(results,  "text/xml");
        let x = xmlDoc.documentElement.getElementsByTagName("photo");

        for (let i = 0; i <= 18 ; i++) {
          let id = x[i].getAttribute("id");
          let owner = x[i].getAttribute("owner");
          let secret = x[i].getAttribute("secret");
          let server = x[i].getAttribute("server");
          let farm = x[i].getAttribute("farm");
          let title = x[i].getAttribute("title");
          let ispublic = x[i].getAttribute("ispublic");
          let isfriend = x[i].getAttribute("isfriend");
          let isfamily = x[i].getAttribute("isfamily");
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

  public updateediturl(int){
    this.editurl = this.urlarray[int];
    console.log(this.editurl);

}
  public carouselnext(){
    // console.log("next pressed")
    if (this.nextcd){
      console.log("on cooldown")
      return;
    }

    else{
        this.nextprev ++;
        this.editurl = this.urlarray[this.nextprev];
      console.log(this.editurl)
      this.nextcd = true;
      setTimeout( () => {
          this.nextcd = false;
          console.log("cd now false")
      },1000);
    }
  }

  public carouselprev(){
    if (this.nextcd){
      console.log("on cooldown")
      return;
    }

    else{
      this.nextprev --;
      this.editurl = this.urlarray[this.nextprev];
      console.log(this.editurl)
      this.nextcd = true;
      setTimeout( () => {
          this.nextcd = false;
          console.log("cd now false")
        },1000);
    }
  }

  public sendemail(){
    let recipient = (<HTMLInputElement>document.getElementById("saveemail")).value;
    this.saveImage(); //Save image first
    let emailURL : string = "http://localhost:4200/api/email?recipient="+recipient;
    let xhr : XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET",emailURL, false);
    xhr.send();
    if(xhr.readyState == 4 && xhr.status == 200) {
      if(xhr.responseText == "E-mail sent successfully") {
        //Modal pop up saved successfully at location...
        console.log("SUCCESS!");
      } else if (xhr.responseText == "E-mail unsuccessful") {
        //Modal pop up error occurred...
        console.log("ERROR!");
      } else {
        console.log("Nothing happened");
        //Do nothing?
      }
    }
  }

  public saveImage() {
    //let imageURL = encodeURI((<HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName("carousel-item active"))[1].src);
    // let imageURL = encodeURI((<HTMLImageElement>document.getElementById("choice0")).src);
    let imageURL = encodeURI(this.editurl);
    let textBox = (<HTMLInputElement>document.getElementById("option0"));
    let fontFamily : string = textBox.style.fontFamily;
    let temp = fontFamily.split("\"");
    fontFamily = encodeURI(temp[1]);

    let isBold : string = "false";
    let isItalics : string = "false";
    let isUnderline : string = "false";

    if(textBox.style.fontWeight == "bold") {
      isBold = "true";
    }

    if(textBox.style.fontStyle == "italic") {
      isItalics = "true";
    }

    if (textBox.style.textDecoration == "underline") {
      isUnderline = "true";
    }

    let fontSize = textBox.style.fontSize;
    temp = fontSize.split("px");
    fontSize = temp[0];

    let wcp = (<HTMLInputElement>document.getElementById("color-input"));
    let colours : string = "%23" + $(wcp).wheelColorPicker('getValue', 'hex'); //%23 = #
    let text : string = encodeURI(textBox.innerText);
    let fileName : string = encodeURI("PicTex"); //test.jpg
    let x: number = 100; //need to obtain, relative to image, somehow.
    let y : number = 100;

    let saveImgURL : string = "http://localhost:4200/api/saveImg?"+
      "imgURL="+imageURL+
      "&fontFamily="+fontFamily+
      "&hex="+colours+
      "&text="+text+
      "&fileName="+fileName+
      "&bold="+isBold+
      "&italics="+isItalics+
      "&underline="+isUnderline+
      "&x="+x+
      "&y="+y+
      "&fontSize="+fontSize;
    console.log("URL = " + saveImgURL);
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET",saveImgURL, false);
    xhr.send();
    if(xhr.readyState == 4 && xhr.status == 200) {
      if(xhr.responseText == "SUCCESS") {
        //Modal pop up saved successfully at location...
        console.log("SUCCESS!");
      } else if (xhr.responseText == "ERROR") {
        //Modal pop up error occurred...
        console.log("ERROR!");
      } else {
        console.log("Nothing happened");
        //Do nothing?
      }
    }

  }

  ///////////////

  ngOnInit() {
    // console.log(this.badarray)

    $("[data-toggle=popover]").popover();
    let input = sessionStorage.getItem("inputtext");
    document.getElementById("option0").innerText = input;
    //this.editstring = input;
    this.changefont("Abril Fatface");
    let div = document.getElementById("mydiv");
    this.dragElement(div);

    let wcp = (<HTMLInputElement>document.getElementById("color-input"));
    let fontInput = (<HTMLInputElement>document.getElementById("fontSizeInput"));
    let text = document.getElementById("option0");

    this.setFontSize(24);
    text.style.color = $(wcp).wheelColorPicker('getValue','rgb');

    // fontInput.addEventListener('input', this.setFontSize(fontInput.value));
    fontInput.addEventListener('input',() => {
      let size = Number(fontInput.value);
      this.setFontSize(size);
      //this.editsize = size;
    });

    $(wcp).on('slidermove', () => {
      let colours : string = $(wcp).wheelColorPicker('getValue', 'rgb');
      let splitted = colours.split(",");
      text.style.color = colours;
      //this.editcol = colours;
    });
    this.getTags();
    this.loadtags();
    this.updateimages();
    this.loadimages();
  }

}
