// Import dependencies
import React, { useRef, useState, useEffect, Component  } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
import { nextFrame } from "@tensorflow/tfjs";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import {drawRect} from "./utilities"; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import ReactGa from "react-ga";




//  "homepage": "http://yvo.lij.mybluehost.me/",
//- for bluehost



function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //google analytics
  useEffect(() => {
    ReactGa.initialize("G-5EDSBT4HE8")
    ReactGa.pageview('/')
    }, [])
  
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    // https://maskdetectionbucket.s3.eu-de.cloud-object-storage.appdomain.cloud/model.json
    const net = await tf.loadGraphModel(process.env.REACT_APP_MODEL_URL)
    
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [500,500])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()
      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
     tf.dispose(expanded)
     tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);
  return (

    <div id="VideoCanvas" className="App">
     
     



        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
           
          }}
        />
    </div>
  );
}



export default App;
