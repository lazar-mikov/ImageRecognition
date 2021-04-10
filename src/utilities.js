
/* eslint no-undef: "off"*/

// Define our labelmap
import $ from "jquery";
//import test  from "../src/vimeo.js-master/lib/vimeo";
//var Vimeo = require('../src/vimeo.js-master/lib/vimeo').Vimeo

const labelMap = {
    1:{name:'Mask On', color:'green'},
    2:{name:'No Mask', color:'red'},  
}
//variables
var video3 = document.getElementById("video3");
var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var CallRingtone = document.getElementById("Call_Ringtone");
var pickup = document.getElementById("pick_up");
var hangup = document.getElementById("hang_up2");
var executedForCall = false;
var executedForOn = false;
var executedForOff = false;
var TurnOnAndRemoveTV = (function() {
    return function() {
        if (!executedForOn) {
            executedForOn = true;
document.getElementById("video1").style.visibility = "visible";
//document.getElementById("turn-offTV").style.zIndex = 0;
document.getElementById("PickUpCall").style.visibility = "hidden";
video1.currentTime=0;
//setTimeout(function(){
//document.getElementById("turn-onTV").style.visibility = "hidden";
//}, 3700);
        }
    };
})();
var TurnOffAndRemoveTV = (function() {
    return function() {
        if (!executedForOff) {
            executedForOff = true;
document.getElementById("video2").style.visibility = "visible";
//document.getElementById("turn-offTV").style.zIndex = 1000;
video1.play();
video1.currentTime=0;
document.getElementById("AskForMask").style.visibility = "visible";
document.getElementById("PickUpCall").style.visibility = "visible";
        }
    };
})();


var ActivateCall = (function() {
    return function() {
        if (!executedForCall) {
            executedForCall = true;
            document.getElementById("AskForMask").style.visibility = "hidden";
            CallRingtone.play();
          }
    };
})();

//pick up call
pickup.addEventListener("click", function() {
        TurnOnAndRemoveTV();
         executedForOff = false;
         CallRingtone.pause();      
         document.getElementById("video2").style.visibility = "visible";
         document.getElementById("video3").style.visibility = "visible";
   })

   //hang up call
   hangup.addEventListener("click", function() {
    video3.pause();
    TurnOffAndRemoveTV();
    CallRingtone.pause();        
    executedForOn = false;
    executedForCall = false;       
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
            
            document.getElementById('video1').addEventListener('ended',myHandler,false);
            function myHandler(e) {
              //  if (video1.src === "1.mp4") {
                video1.src = "3.mp4";
                video3.src = "1.mp4";
          //      } else if (video1.src === "3.mp4"){
            //        video1.src = "1.mp4";
            //        video3.src = "3.mp4";
           //     }
            }    
           
//video functionality
         if (textname.includes('On') === true) {
                    ActivateCall(); 
                    video2.play(); 
                    video3.play();
                    video1.play();
                    executedForOff = false;

              } 
              else if (textname.includes('No') === true){
                    video3.pause();
                    TurnOffAndRemoveTV();
                    CallRingtone.pause();        
                    executedForOn = false;
                    executedForCall = false;
              };
        }
    }
}

var uploadv = document.getElementById("uploadvideo");
      uploadv.addEventListener("click", function() {


console.log('clicked');

      


      try {
        var config = require('./config.json')
      } catch (error) {
        console.error('ERROR: For this example to run properly you must create an API app at ' +
          'https://developer.vimeo.com/apps/new and set your callback url to ' +
          '`http://localhost:8080/oauth_callback`.')
        console.error('ERROR: Once you have your app, make a copy of `config.json.example` named ' +
          '`config.json` and add your client ID, client secret and access token.')
        process.exit()
      }
      
      if (!config.access_token) {
        throw new Error('You can not upload a video without configuring an access token.')
      }
      
      // Instantiate the library with your client id, secret and access token (pulled from dev site)
      var client = new Vimeo(config.client_id, config.client_secret, config.access_token)
      
      // Create a variable with a hard coded path to your file system
      var filePath = 'testvideo.mp4'
      
      console.log('Uploading: ' + filePath)
      
      var params = {
        'name': 'Vimeo API SDK test upload',
        'description': "This video was uploaded through the Vimeo API's NodeJS SDK."
      }
      
      client.upload(
        filePath,
        params,
        function (uri) {
          // Get the metadata response from the upload and log out the Vimeo.com url
          client.request(uri + '?fields=link', function (error, body, statusCode, headers) {
            if (error) {
              console.log('There was an error making the request.')
              console.log('Server reported: ' + error)
              return
            }
      
            console.log('"' + filePath + '" has been uploaded to ' + body.link)
      
            // Make an API call to edit the title and description of the video.
            client.request({
              method: 'PATCH',
              path: uri,
              params: {
                'name': 'Vimeo API SDK test edit',
                'description': "This video was edited through the Vimeo API's NodeJS SDK."
              }
            }, function (error, body, statusCode, headers) {
              if (error) {
                console.log('There was an error making the request.')
                console.log('Server reported: ' + error)
                return
              }
      
              console.log('The title and description for ' + uri + ' has been edited.')
      
              // Make an API call to see if the video is finished transcoding.
              client.request(
                uri + '?fields=transcode.status',
                function (error, body, statusCode, headers) {
                  if (error) {
                    console.log('There was an error making the request.')
                    console.log('Server reported: ' + error)
                    return
                  }
      
                  console.log('The transcode status for ' + uri + ' is: ' + body.transcode.status)
                }
              )
            })
          })
        },
        function (bytesUploaded, bytesTotal) {
          var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
          console.log(bytesUploaded, bytesTotal, percentage + '%')
        },
        function (error) {
          console.log('Failed because: ' + error)
        }
      )
    })