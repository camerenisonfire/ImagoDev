---
title: Simple Internet Radio Music Visualizer
tags: ["tutorial", "generative", "coding", "music"]
cover: alexey-ruban-radio-mixer.jpg
author: cameren dolecheck
---

<re-img
    src="alexey-ruban-radio-mixer.jpg"
    title="Photo by Alexey Ruban on Unsplash"
    href="unsplash.com/photos/73o_FzZ5x-w"
    >
</re-img>

Creating animations that react to music is a fun way to get started learning how to build generative art and design. There is something extremely satisfying in seeing shapes dance around the screen to the music. This tutorial will walk you through how to get started creating reactive music visualizer based on an Internet radio stream. This tutorial will stick to web technologies and is based on my [Radio Visualizer Starter Project](https://github.com/camerenisonfire/radio-visualizer-starter).

###Keeping Time
Music acts as an easy to use and constantly changing data set for generative animations. Both sound and animation share a common variable — time. While words or images are locked into place once created, both sound and animation must be experienced over time. It is this shared parameter that allows such an easy link between the two mediums.

The strong bond of time allows for easier mappings of the parameters that do differ between sound and animation. For sound, commonly employed parameters are volume, frequency, and tempo. These intuitively map to an object's size, position, color, and speed in the animation. Since changing these parameters over time is what creates animation, having the music control the various values is an ideal way to drive the animation.

While this connection between music and animation can be done with any piece of music, doing so against a radio stream provides a practically unlimited amount of music to play with. Given that even the lamest radio stations do not play the exact same song 24/7, it has the benefit of providing a wider range of sound parameters to build your animation around. Not only that, but you the developer also have the benefit of not hearing the same first 20 seconds of a song hundreds of times as you refresh the animation while building.

###Bring On The Sound
To start, we first need to receive and analyze the radio stream. There are many great sound libraries for a variety of languages. Modern web browsers come equipped with the `<audio>` node and [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). This API gives easy to use methods to connect and analyze our audio source. First, we need to define our audio source. In the example, I use [NC State University’s radio station, WKNC Raleigh](https://wknc.org). As long as the stream allows Cross Origin sharing, you can replace the `src` with the station of your liking.

```html
<audio id="radio" preload="auto" crossorigin="anonymous">
  <source src="http://sc8.streammystation.com:7430/stream" />
</audio>
```

Now that the audio node is defined, it needs to be told to play. Chrome, and likely more browsers, now enforces that the user interacts with the page before allowing audio to begin playing. To handle this, we must put our call to the `play()` method inside an event listener. In the starter project, this is contained inside of the `radio.js` file.

```javascript
//Uses the WebAudio API to analyze streaming audio
let analyser, source;
let audioElement = document.getElementById("radio"); //gets the element in the HTML document with the id="radio"

window.onload = function() {
  // Start playing the radio stream when document is clicked
  document.getElementById("defaultCanvas0").addEventListener("click", function() {
    audioElement.play();

    //TODO: hook up the analyzer
  });
};
```

But wait, what is this `defaultCanvas0` element? Now is when we get to the animation side of this tutorial. The starter project employs p5js to create our animations. The initial `setup()` function creates our `<canvas>` which gets the id of `defaultCanvas`.

Until we get the audio stream going and hook it up to the API that will analyze the audio for us, we need the `draw()` p5js function to tell us to click the `<canvas>` to get started. Since we have not created our analyzer yet, we will just have p5js draw the background and start text, and then not run any of the rest of our draw function.

```javascript
drawBackground();

if (!analyser) {
  //we haven't started the audio yet
  showStartText();
  return;
}
```

Now we need to hook up the analyzer, which our entire animation hinges on. This is where the Web Audio API really shines. All of the hooking up of audio nodes happens inside the click event listener, immediately following our `audioElement.play();` call.

```javascript
let context = new (window.AudioContext || window.webkitAudioContext)(); //Tells the browser we want to use Audio for out analyser

source = context.createMediaElementSource(audioElement); //Set the context to be our radio stream
analyser = context.createAnalyser();

source.connect(analyser); //Connect up the radio stream to the audio analyser

// Connect the output of the analyser to the destination, so that the audio will play out speakers
analyser.connect(context.destination);
```

Basically, all the above code does is tell the Web Audio API where to find our audio source, connect that source up to the analyzer, and then connect the analyzer up to our `destination`, which is really just our computer’s speakers.

###Getting The Frequency
Everything is all hooked up and ready to be analyzed for our animation. To use our analyzer, we need to ask it for data every frame of animation. For the starter project, we will base the animation off of the sound frequencies. To do this, in the `draw()` method of p5js, we have

```javascript
frequencyData = new Uint8Array(analyser.frequencyBinCount);

//Tell the analyser in radio.js to fill our Array with the frequency data
analyser.getByteFrequencyData(frequencyData);
```

This clears out the frequencyData from the previous animation frame and then fills it with the latest frequency data. This data is put into an array, which by default the analyzer fills with 1024 different values. The lower the index in the array, like `frequencyData[10]`, the lower the audio frequency; thus, the higher the index, like `frequencyData[900]`, the higher the audio frequency the cell represents.

###Driving The Animation
The final step is to use this frequency data for our animation. This starter project simply adjusts the size of a circle based on a low frequency. The more the audio has that frequency, the bigger the circle will be.

```javascript
//Draw an ellipse in the center of our canvas that scales with the frequency data
ellipse(width / 2, height / 2, 1 + frequencyData[10], 1 + frequencyData[10]);
```

And that’s it! Every frame, we have a new value for `frequencyData[10]`, and thus a new size for our circle. One last minor effect to add is having the circle fade out. This gives a smoother animation as the circle changes size.

The way we redraw our frame is by covering the previous frame with a new one. We do this by covering the last frame with the background of our new frame. If we keep our background with 100% opacity, every frame is drawn seemingly totally separate from the previous; however, if we lower the opacity to 10% then the frames bleed into each other, since the last frame is only a little bit obscured by the new background. This creates the desired fade out effect.

```javascript
drawBackground() {
  //Sets the fill color of our shape red with low opacity
  //uses low opacity so the circle fades out on edges
  fill(255, 0, 0, 10);

  //Draw a rectangle, which will be red with low opacity
  rect(0, 0, width, height);
}
```

Now that you’ve got the basics of building animation based on music, try linking other animation parameters, like position or the number of objects, to the frequency data!
