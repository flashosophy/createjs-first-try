//containers
var mainView;

//images
var BGBMP;
var btnHighlightFilter = new createjs.ColorFilter(.9,.4,.4,1); // red, green, blue, alpha
var removeAllFilter = new createjs.ColorFilter(1,1,1,1); 

function initView()
{
	mainView = new createjs.Container();
	stage.addChild(mainView);


	var BGBMPImage = new Image();
	BGBMPImage.onload = handleBGBMPImageLoad;
	BGBMPImage.src = "images/BG.jpg";
	


}
		    
function handleBGBMPImageLoad(event)
{
	var image = event.target;
	BGBMP = new createjs.Bitmap(image);
	BGBMP.name = "BGBMP";	
	BGBMP.visible = false;  //prevents brief blink
	mainView.addChild(BGBMP);
	initMenu(); //menuC.js
	resizeContents();
}

function setCanvas()
{
	//var canvasNode = document.getElementById('xcanvas');

	var pw = canvas.parentNode.clientWidth;
	var ph = canvas.parentNode.clientHeight;

	// browser viewport size
	var w = window.innerWidth;
	var h = window.innerHeight;

	//1920x1080 h:1.77, vert: .56
	//ipad 2  is 1024x672 h:1.52 , 1080p ratio .533 x.34,    776x936 vert:.82, ratio .4 x.866
	//ipod    is 480x208 h:2.3   , 1080p ratio .25 x.192,    326x363 vert:.89, ratio .185 x .336
	//android is 640x287 h:2.22  , 1080p ratio .333 x.265,   360x567 vert:.63, ratio .187 x .525 

	canvas.height =  h;  
	canvas.width  = w ;

	canvas.style.top  = "0px";
	canvas.style.left = "0px";
	stage.update();
	return canvas;
}

function resizeContents()
{
	var canvasNode = setCanvas();
	var pw = canvasNode.parentNode.clientWidth;
    var ph = canvasNode.parentNode.clientHeight;

    //mobile versions
    try{
		
    	if(supportsOrientationChange)
    	{
    		animateAwayApps();
    		animateAwayTools();
    		animateAwayServices();

    		switch(currentView)
    		{
				case "appsBtn":
					appVmoveVert();
				break;
				case "toolsBtn":
					ToolsVmoveVert();
				break;
				case "servicesBtn":
					ServicesVmoveVert();
				break;
    		}
    		

    	}
    	else //web version background moves
    	{

    		BGBMP.x = pw/2 - BGBMP.image.width/2 ;
			BGBMP.y = ph/2 - BGBMP.image.height/2 ;

    	}
    
    	//everyone centers menu
    	menuVmoveVert();
			

    }catch(e)
    { 	
    	//images are probably not loaded yet
    	//console.log("error in view resizeContents: " +e);
    }

    BGBMP.visible = true;

}

