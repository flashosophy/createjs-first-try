/* Define Canvas */

var canvas; //Will be linked to the canvas in our index.html page
var stage; //Is the equivalent of stage in AS3 and we'll add "children" to it
var supportsOrientationChange; 

function Main()
{
	/* Link Canvas */
	canvas = document.getElementById("xcanvas");
  	stage = new createjs.Stage(canvas);
  		
  	stage.mouseEventsEnabled = true;
  		
	// enable touch interactions if supported on the current device:
	createjs.Touch.enable(stage);

	// enabled mouse over / out events
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
	
	supportsOrientationChange = "onorientationchange" in window, orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	//from View.js
	initView();

	/* Ticker */
	createjs.Ticker.addEventListener("tick", handleTick);
 
	
	//also a listener for resize
 	window.addEventListener(orientationEvent, function()
 	{
 		resizeContents(); //from view
	}, false);


}

function BGMLoadHandler(event) {
	// This is fired for each sound that is registered.
	var instance = createjs.Sound.play("BGM", "none", 0, 0, -1); 
	//instance.addEventListener("complete", createjs.proxy(this.BGMLoadHandlerComplete, this));

}


function handleTick(event) {
     // Actions carried out each frame
     if (!event.paused) {
         // Actions carried out when the Ticker is not paused.
          stage.update();
         // console.log("tick tock")
     }
 }

function stop() {
	createjs.Ticker.removeEventListener("tick", handleTick);
}

function openInNewTab(url )
{
  var win=window.open(url, '_blank');
  win.focus();
}
