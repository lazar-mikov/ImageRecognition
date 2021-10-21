

// Define our labelmap
import $, { get } from "jquery";
//import Player from '@vimeo/player';
import Vimeo from '@vimeo/player';


const labelMap = {
    1:{name:'Mask On', color:'green'},
    2:{name:'No Mask', color:'red'},  
}

//Google analytics




//variables

var CallRingtone = document.getElementById("Call_Ringtone");
var pickup = document.getElementById("pick_up");
var pickup_phone = document.getElementById("pick_up-phone");
var hangup = document.getElementById("hang_up2");
var hangup_phone = document.getElementById("hang_up2-phone");
var twofifty = document.getElementById('twofifty');
var five = document.getElementById('five');
var twentyfive = document.getElementById('twentyfive');
var hundred = document.getElementById('hundred');
var executedForCall = false;
var executedForOn = false;
var executedForOff = false;
var a1toggle = document.getElementById("a1");
var a2toggle = document.getElementById("a2");
var a3toggle = document.getElementById("a3");
var a4toggle = document.getElementById("a4");
var a5toggle = document.getElementById("a5");
var videoid = 547178029;
     var autoplaystatus = true;
     
     var options = {
         id: 593117824,
         responsive: true,
         width: 500,
         loop: true,
         autoplay: autoplaystatus,
         autopause: false,
         controls:false
     };
     
     var options2 = {
         id: 604532379,
         responsive: true,
         width: 400,
         loop: false,
         autoplay: true,
         autopause: false,
         controls:false
     };
     
     var options3 = {
         id: 601954399,
         responsive: true,
         width: 400,
         loop: true,
         autoplay: false,
         autopause: false,
         controls:false
     };
     
     var options4 = {
         id: 601955886,
         responsive: true,
         width: 400,
         loop: true,
         autoplay: false,
         autopause: false,
         controls:false
     };
     
     var options5 = {
         id: 596027591,
         responsive: true,
         width: 400,
         loop: true,
         autoplay: false,
         autopause: false,
         controls:false
     };

     var player = ""
     var player2 = ""
     var player3 = ""
     var player4 = ""
     var player5 = ""

     var value = 1
     var value2 = 0
     var value3 = 0
     var value4 = 0
     var value5 = 0

var videos   = new Array ( 540777232 ,540777491,540777310, 540777167, 540777064, 543805221, 546151917, 546154053 );




//This part is responsible for the animations
//animate syringe

$(function() {
    var img = $("#plane"),
       width = img.get(0).width,
       screenWidth =  10111,
       duration = 11000;
 
  function animatePlane() {
         img.css("left", -width).animate({
             "left": screenWidth
         }, duration, animatePlane);
     }
 
     animatePlane();
 });

//moves the middle photo up and down
function MoveUp(){
document.getElementById("description_img_move").animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-300px)' }
  ], {
    // timing options
    duration: 1500,
    iterations: 1,
    fill: 'forwards'
});
$("#hang_up").fadeIn(1500);
$("#pick_up").fadeIn(1500);
}

function movedown(){
    document.getElementById("description_img_move").animate([
        // keyframes
        { transform: 'translateY(-300px)' },
        { transform: 'translateY(0px)' }
      ], {
        // timing options
        duration: 1500,
        iterations: 1,
        fill: 'forwards'
    });
    $("#hang_up").fadeOut("slow");
$("#pick_up").fadeOut("slow");
}

//fades text in and out
function fadeOutEffect() {
    var fadeTarget = document.getElementById("projectdescription");
    var fadeTarget2 = document.getElementById("title");
    var fadeTarget3 = document.getElementById("one");
    var fadeTarget4 = document.getElementById("three");
    var fadeTarget5 = document.getElementById("putonmask");
    var fadeTarget6 = document.getElementById("bottomrow");


    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        }
        if (!fadeTarget2.style.opacity) {
            fadeTarget2.style.opacity = 1;
        }
        if (fadeTarget2.style.opacity > 0) {
            fadeTarget2.style.opacity -= 0.1;
        }
        if (!fadeTarget3.style.opacity) {
            fadeTarget3.style.opacity = 1;
        }
        if (fadeTarget3.style.opacity > 0) {
            fadeTarget3.style.opacity -= 0.1;
        }
        if (!fadeTarget4.style.opacity) {
            fadeTarget4.style.opacity = 1;
        }
        if (fadeTarget4.style.opacity > 0) {
            fadeTarget4.style.opacity -= 0.1;
        }
        if (!fadeTarget5.style.opacity) {
            fadeTarget5.style.opacity = 1;
        }
        if (fadeTarget5.style.opacity > 0) {
            fadeTarget5.style.opacity -= 0.1;
        }
        if (!fadeTarget6.style.opacity) {
            fadeTarget6.style.opacity = 1;
        }
        if (fadeTarget6.style.opacity > 0) {
            fadeTarget6.style.opacity -= 0.1;
        }
        else {
            clearInterval(fadeEffect);
        }
    }, 10);

}

function fadeOutEffectReverse() {
    var fadeTarget = document.getElementById("projectdescription");
    var fadeTarget2 = document.getElementById("title");
    var fadeTarget3 = document.getElementById("one");
    var fadeTarget4 = document.getElementById("three");
    var fadeTarget5 = document.getElementById("putonmask");
    var fadeTarget6 = document.getElementById("bottomrow");


    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity <= 0) {
            fadeTarget.style.opacity += 1;
        }
        if (!fadeTarget2.style.opacity) {
            fadeTarget2.style.opacity = 1;
        }
        if (fadeTarget2.style.opacity <= 0) {
            fadeTarget2.style.opacity += 1;
        }
        if (!fadeTarget3.style.opacity) {
            fadeTarget3.style.opacity = 1;
        }
        if (fadeTarget3.style.opacity <= 0) {
            fadeTarget3.style.opacity += 1;
        }
        if (!fadeTarget4.style.opacity) {
            fadeTarget4.style.opacity = 1;
        }
        if (fadeTarget4.style.opacity <= 0) {
            fadeTarget4.style.opacity += 1;
        }if (!fadeTarget5.style.opacity) {
            fadeTarget5.style.opacity = 1;
        }
        if (fadeTarget5.style.opacity <= 0) {
            fadeTarget5.style.opacity += 1;
        }
        if (!fadeTarget6.style.opacity) {
            fadeTarget6.style.opacity = 1;
        }
        if (fadeTarget6.style.opacity <= 0) {
            fadeTarget6.style.opacity += 1;
        }
        else {
            clearInterval(fadeEffect);
        }
    }, 100);

}





var ActivateCall = (function() {
    return function() {
        if (!executedForCall) {
            executedForCall = true;
            fadeOutEffect()
            MoveUp()
            CallRingtone.play();
       }
    };
})();


var pickupcall = (function() {
    return function() {
        if (!executedForOn) {
            executedForOn = true;
document.getElementById("video1").style.visibility = "visible";
document.getElementById("AskForMask").style.visibility = "hidden";
        }
    };
})();

//var pickupcall_phone = (function() {
 //   return function() {
  //      if (!executedForOn) {
 //           executedForOn = true;
//document.getElementById("video1").style.visibility = "visible";
//document.getElementById("PickUpCall-phone").style.visibility = "hidden";
 //       }
 //   };
//})();

var endcall = (function() {
    return function() {
        if (!executedForOff) {
            executedForOff = true;
document.getElementById("AskForMask").style.visibility = "visible";
movedown()
fadeOutEffectReverse()
                  value = 0
                  value2 = 0
                  value3 = 0
                  value4 = 0
                  value5 = 0
                  player.setVolume(value);
                  player2.setVolume(value2);
                  player3.setVolume(value3);
                  player4.setVolume(value4);
                  player5.setVolume(value5);
        }
    };
})();






//pick up call
//pickup_phone.addEventListener("click", function() {
  //  pickupcall_phone();
    //     executedForOff = false;
     //    CallRingtone.pause();  
     //    player.play();
     //    var randomvideo = [];
     //    player.on('ended', function() {
      //       var randomvideo =  videos.sort(function() { return 0.5 - Math.random();}).pop();
      //       console.log(randomvideo)
      //       player.loadVideo(randomvideo); 
       //      console.log(videoid)
       //      player.play();
       //  });
       //  videoid = randomvideo;
 //  })

 
//camera change on click
//video magic
pickup.addEventListener("click", function() {
    pickupcall();
     executedForOff = false;
     CallRingtone.pause();  
    
     
     
     
      player = new Vimeo('video1', options);
      player2 = new Vimeo('video2', options2);
      player3 = new Vimeo('video3', options3); 
      player4 = new Vimeo('video4', options4);
      player5 = new Vimeo('video5', options5); 

    
     
    player.setVolume(value);
     player2.setVolume(value2);
     player3.setVolume(value3);
     player4.setVolume(value4);
     player5.setVolume(value5);
     


     player2.play();
     player3.play(); 
     player4.play();
     player5.play(); 
     player.play();
     player2.getVideoTitle().then(function(title) {
        console.log('title:', title);
        var res = title.valueOf();
document.getElementById("title2").innerHTML = res;
      });
      player3.getVideoTitle().then(function(title) {
        var res = title.valueOf();   
document.getElementById("title3").innerHTML = res;
      });
      player4.getVideoTitle().then(function(title) {
        var res = title.valueOf();
document.getElementById("title4").innerHTML = res;
      });
      player5.getVideoTitle().then(function(title) {
        var res = title.valueOf();
document.getElementById("title5").innerHTML = res;
      });

     var randomvideo = [];
     player2.on('ended', function() {
         var randomvideo =  videos.sort(function() { return 0.5 - Math.random();}).pop();
         console.log(randomvideo)
         player2.loadVideo(randomvideo); 
         console.log(videoid)
         player2.play();
     });
     videoid = randomvideo;




a2toggle.addEventListener("click", function() {
     value = 0
      value2 = 1
      value3 = 0
      value4 = 0
      value5 = 0
      player.setVolume(0)
      player2.setVolume(1);
       player3.setVolume(0);
       player4.setVolume(0);
       player5.setVolume(0);
 var a2temp = $('#video-wrapper-2');
   $('.video_div1').attr('class', 'video-wrapper');
   a2temp.attr('class', 'video_div1');
   console.log(a2temp)
console.log("2 becomes 1")


})

a3toggle.addEventListener("click", function() {
    value = 0
    value2 = 0
    value3 = 1
    value4 = 0
    value5 = 0
    player.setVolume(0)
    player2.setVolume(0);
     player3.setVolume(1);
     player4.setVolume(0);
     player5.setVolume(0);
   var a3temp = $('#video-wrapper-3');
   $('.video_div1').attr('class', 'video-wrapper');
   a3temp.attr('class', 'video_div1');
})

a4toggle.addEventListener("click", function() {
    value = 0
    value2 = 0
    value3 = 0
    value4 = 1
    value5 = 0
    player.setVolume(0)
    player2.setVolume(0);
     player3.setVolume(0);
     player4.setVolume(1);
     player5.setVolume(0);
 var a4temp = $('#video-wrapper-4');
   $('.video_div1').attr('class', 'video-wrapper');
   a4temp.attr('class', 'video_div1');
  console.log("4 becomes 1")


})

a5toggle.addEventListener("click", function() {
    value = 0
    value2 = 0
    value3 = 0
    value4 = 0
    value5 = 1
    player.setVolume(0)
    player2.setVolume(0);
     player3.setVolume(0);
     player4.setVolume(0);
     player5.setVolume(1);
 var a5temp = $('#video-wrapper-5');
 $('.video_div1').attr('class', 'video-wrapper');
 a5temp.attr('class', 'video_div1');
  console.log("5 becomes 1")
})


a1toggle.addEventListener("click", function() {
    player.setVolume(0)
    var a1temp = $('#video-wrapper-1');
    $('.video_div1').attr('class', 'video-wrapper');
    a1temp.attr('class', 'video_div1');
     console.log("5 becomes 1")
   })

}) 

   //pick up call

   

   hangup.addEventListener("click", function() {
    endcall();
    CallRingtone.pause();        
    executedForOn = false;
    executedForCall = false;       
})


hangup_phone.addEventListener("click", function() {
    endcall();
    CallRingtone.pause();        
    executedForOn = false;
    executedForCall = false;       
})


twofifty.addEventListener("click", function() {
  var twofifty_value =   document.getElementById('twofifty').value;
  document.getElementById('paypal').value  = twofifty_value
  console.log(document.getElementById('paypal').value)
})
five.addEventListener("click", function() {
  var five_value =  document.getElementById('five').value;
  document.getElementById('paypal').value  = five_value
  console.log(document.getElementById('paypal').value)

})
twentyfive.addEventListener("click", function() {
 var twentyfive_value = document.getElementById('twentyfive').value;
 document.getElementById('paypal').value  = twentyfive_value
  console.log(document.getElementById('paypal').value)

})
hundred.addEventListener("click", function() {
   var hundred_value = document.getElementById('hundred').value;
   document.getElementById('paypal').value  = hundred_value
  console.log(document.getElementById('paypal').value)
})





// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
          
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()

            var textname = labelMap[text]['name'];
            console.log(textname);
            
           
           
//video functionality
         if (textname.includes('On') === true) {
                    ActivateCall(); 
                    executedForOff = false;
              } 
              else if (textname.includes('No') === true){
                if ( executedForCall === true ) {
                    endcall();
                }
                  //  endcall();
                  
                    CallRingtone.pause();        
                    executedForOn = false;
                    executedForCall = false;  
              };
        }
    }
}



    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    });