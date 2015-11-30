
var ToolsContainer;

var initMenuBGHeight;
var isToolsReady;
var ToolsIconScaleRatio =1;
var numOfTools = 2;
var ToolsIconGap;
var loadedToolsCounter;


function initToolsV()
{
	if(loadedToolsCounter == numOfTools) //don't create everything again if things are already loaded
	{
		
		if(currentView == "toolsBtn")
		{
			//do nothing
		}
		else
			animateInToolsBtnsFromEdge();
			
	}
	else
	{
		loadedToolsCounter=0;
		ToolsContainer = new createjs.Container();
		mainView.addChild(ToolsContainer);
		ToolsVmoveVert();

		var tempImage = new Image();
		tempImage.onload = handleToolsImageLoad;
		tempImage.name = "u3dxt";
		tempImage.src = "images/tools/u3dxt.png";
			
		tempImage = new Image();
		tempImage.onload = handleToolsImageLoad;
		tempImage.name = "airExtensions";
		tempImage.src = "images/tools/airExtensions.png";
			
		animateInToolsBtnsFromEdge();
	}

}

function handleToolsImageLoad(event)
{
	var image = event.target;
	var	tempToolsBtn = new createjs.Bitmap(image);
	tempToolsBtn.name = image.name;
	ToolsContainer.addChild(tempToolsBtn);
	ToolsContainer.visible = false;

	loadedToolsCounter++;
	if(loadedToolsCounter == numOfTools)
	{
		ToolsContainer.visible = true;
		ToolsVresizeAll(window.orientation==0 || window.orientation==180);
		isToolsReady = true;
		initToolIconLocation();
	}
	
	initMouseInteractionForToolsBtn(tempToolsBtn);
}

function initToolIconLocation()
{
	var currentToolsBtn = ToolsContainer.getChildAt(0);
	var btnIndex=0;
	var doTopDownAnimation = true; //default
	var xDestination, yDestination;
	var pw = canvas.parentNode.clientWidth;
	var ph = canvas.parentNode.clientHeight;
	
	var currentToolsBtn = ToolsContainer.getChildAt(0);

	ToolsIconGap = currentToolsBtn.image.height*.2*ToolsIconScaleRatio;

	currentToolsBtn = ToolsContainer.getChildByName("u3dxt");
	yDestination = currentToolsBtn.y;
	currentToolsBtn.y = -20;

	createjs.Tween.get(currentToolsBtn,{override:true}).to({ x: currentToolsBtn.x, y: yDestination }, 1000, createjs.Ease.getPowOut(3));

	currentToolsBtn = ToolsContainer.getChildByName("airExtensions");
	yDestination = ToolsContainer.getChildByName("u3dxt").y  + currentToolsBtn.image.height*ToolsIconScaleRatio + ToolsIconGap ;
	currentToolsBtn.y = ToolsContainer.getChildByName("u3dxt").y+ currentToolsBtn.image.height*ToolsIconScaleRatio;

	createjs.Tween.get(currentToolsBtn,{override:true}).to({ x: currentToolsBtn.x, y: yDestination }, 1000, createjs.Ease.getPowOut(3));

}

function animateInToolsBtnsFromEdge()
{

	var xDest, yDest;
	var pw = canvas.parentNode.clientWidth;
	var ph = canvas.parentNode.clientHeight;

	//mobile
	if(supportsOrientationChange)
    {
	    if(loadedToolsCounter == numOfTools)
    		ToolsVresizeAll(window.orientation==0 || window.orientation==180);

    	updateMenuYDestination();
    	
		if(window.orientation==0 || window.orientation==180) //vert, animate from left to right
		{
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*.1 ;	
			yDest =  menuBG.image.width*menuBG.scaleY*1.02;
			ToolsContainer.x = -ToolsContainer.getChildByName("u3dxt").image.width;
		}
		else
		{
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;	
			yDest =  menuHorizontalDestinationY +  menuBG.image.height*menuBG.scaleX*.1;
			ToolsContainer.y = -ph;
		}
		ToolsContainer.x = xDest;
		createjs.Tween.get(ToolsContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
	}
	else //web
	{	
		
		xDest =	ToolsContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
		yDest = menuContainer.y +  menuBG.image.height*menuBG.scaleX*.1;
		ToolsContainer.y = -ph;			
	}
	createjs.Tween.get(ToolsContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
	
}

function animateAwayTools()
{
	var xDest, yDest;
	var pw = canvas.parentNode.clientWidth;
	var ph = window.innerHeight+50;
	
	if(isToolsReady)
	{		
		//mobile
		if(supportsOrientationChange)
	    {
		    if(loadedToolsCounter == numOfTools)
	    		ToolsVresizeAll(window.orientation==0 || window.orientation==180);

	    	updateMenuYDestination();
	    	
			if(window.orientation==0 || window.orientation==180)
			{
				xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*.1 ;	
				//yDest =  menuBG.image.width*menuBG.scaleY*1.02;
				yDest =  ph;
			}
			else
			{
				xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;	
				yDest =  ph;
			}
			createjs.Tween.get(ToolsContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
		}
		else
		{
			
			xDest =	ToolsContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
			yDest = ph;
			
			createjs.Tween.get(ToolsContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
				
		}
	}
}

function ToolsVresizeAll(isVerticle)
{
	//only scale for mobile
	if(supportsOrientationChange)
    {
		 var pw = canvas.parentNode.clientWidth;
  		 var ph = canvas.parentNode.clientHeight;
  		 var heightRatio;
  		 var currentToolsBtn;



  		 if(ph > initMenuBGHeight)
  		 	heightRatio = ph/initMenuBGHeight;
  		 else
  		 	heightRatio = initMenuBGHeight/ph;

  		 ToolsIconScaleRatio = 1/heightRatio;

  		 //give more space to canvas if verticle
		if(isVerticle)
		{
			
			if(pw > initMenuBGHeight)
			{
				//alert("big res");
				ToolsIconScaleRatio = 1;
				
				for(i=0; i < numOfTools ; i++)
				{

					currentToolsBtn = ToolsContainer.getChildAt(i);
					currentToolsBtn.scaleX = currentToolsBtn.scaleY = ToolsIconScaleRatio;
				}
			}
			else
			{
				//alert("small res");
				pw = window.innerWidth; 

				//alert(iconSize)

				for(i=0; i < numOfTools ; i++)
				{

					currentToolsBtn = ToolsContainer.getChildAt(i);
					ToolsIconScaleRatio = .5;
					currentToolsBtn.scaleX = currentToolsBtn.scaleY = ToolsIconScaleRatio;
				}
			}			
			
		}
		else //horizontal
		{
			if(pw > initMenuBGHeight) //ipad, or big resolutsion
			{
				
				for(i=0; i < numOfTools ; i++)
				{

					currentToolsBtn = ToolsContainer.getChildAt(i);
					currentToolsBtn.scaleX = currentToolsBtn.scaleY = ToolsIconScaleRatio;
				}
			}
			else
			{
				
				for(i=0; i < numOfTools ; i++)
				{

					currentToolsBtn = ToolsContainer.getChildAt(i);
					currentToolsBtn.scaleX = currentToolsBtn.scaleY = ToolsIconScaleRatio;
				}

			}

		}
	} 
	//animateInToolsBtns();
}

//centers vertically the whole menu
function ToolsVmoveVert()
{
	var xDest, yDest;

	//mobile
	if(supportsOrientationChange)
    {
	    if(loadedToolsCounter == numOfTools)
	    {
    		ToolsVresizeAll(window.orientation==0 || window.orientation==180);

    	}

    	updateMenuYDestination();
    	
		if(window.orientation==0 || window.orientation==180)
		{
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*.1 ;	
			yDest =  menuBG.image.width*menuBG.scaleY*1.02;
		}
		else
		{
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;	
			yDest =  menuHorizontalDestinationY +  menuBG.image.height*menuBG.scaleX*.1;
		}
		createjs.Tween.get(ToolsContainer,{override:true}).to({ x: xDest, y: yDest}, 700, createjs.Ease.getPowOut(3));
		//animateInToolsBtns();
	}
	else
	{
		//horizontal view on desktop
		ToolsContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
		ToolsContainer.y = menuContainer.y +  menuBG.image.height*menuBG.scaleX*.1;
			
	}
	
}