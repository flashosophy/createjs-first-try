var numOfApps = 11; 
var	vertAppNum = 3;
var	horizAppNum = 4;

var loadedAppsCounter;
var appContainer;

var initMenuBGHeight;
var isAppsReady;
var appIconScaleRatio =1;
var appIconGap;

function initAppsV()
{
	if(loadedAppsCounter == numOfApps )
	{
		//don't create everything again if things are already loaded
		if(currentView == "appsBtn")
			animateInAppBtns();
		else
			animateInAppBtnsFromEdge();
	}
	else
	{
		appContainer = new createjs.Container();
		mainView.addChild(appContainer);
		appVmoveVert();
		loadedAppsCounter =0;

		var tempImage;

		for(var i=0; i < numOfApps; i++)
		{
			tempImage = new Image();
			tempImage.onload = handleAppImageLoad;
			tempImage.name = "app"+i;
			tempImage.src = "images/apps/app"+i+".png";
			
			
		}
		animateInAppBtnsFromEdge();
	}

}

function handleAppImageLoad(event)
{
	var image = event.target;
	var	tempAppBtn = new createjs.Bitmap(image);
	tempAppBtn.name = image.name;
	appContainer.addChild(tempAppBtn);
	appContainer.visible = false;

	loadedAppsCounter++;
	if(loadedAppsCounter == numOfApps)
	{
		appContainer.visible = true;
		appVresizeAll(window.orientation==0 || window.orientation==180);
		isAppsReady = true;
	}

	initMouseInteractionForAppBtn(tempAppBtn);
}

function animateInAppBtns()
{
	var currentAppBtn = appContainer.getChildAt(0);
	var btnIndex=0;
	
	var xDestination, yDestination;
	var pw = canvas.parentNode.clientWidth;
	var ph = canvas.parentNode.clientHeight;

	appIconGap = currentAppBtn.image.width*.2*appIconScaleRatio;

	//if verticle
	if(window.orientation==0 || window.orientation==180)
	{
		//big mobile resolution
		if(pw > initMenuBGHeight)
		{
			
		}
		else
		{
			
		}

		
	}
	else //horizontal view
	{
		if(pw > initMenuBGHeight) //ipad or high rez
		{
			
		}
		else
		{

		}
	}

	for(i=0; i < vertAppNum ; i++)
	{
		for(j=0; j < horizAppNum ; j++)
		{
			try{
				currentAppBtn = appContainer.getChildAt(btnIndex);
				xDestination = j * currentAppBtn.image.width*appIconScaleRatio + j*appIconGap;
				yDestination = i * currentAppBtn.image.height*appIconScaleRatio + i*appIconGap;

				createjs.Tween.get(currentAppBtn,{override:true}).to({ x: xDestination, y: yDestination }, 500+btnIndex*100, createjs.Ease.getPowOut(3));
				btnIndex++;
			}catch(e){}
		}
	}	

}

function animateInAppBtnsFromEdge()
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
    	

		if(window.orientation==0 || window.orientation==180) //vert
		{
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*.1 ;	
			yDest =  menuBG.image.width*menuBG.scaleY*1.02;

		}
		else
		{
			appContainer.y = -ph;
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;	
			yDest =  menuHorizontalDestinationY +  menuBG.image.height*menuBG.scaleX*.1;
		}
		appContainer.x =  xDest ;

		createjs.Tween.get(appContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
	}
	else
	{
		appContainer.y = -ph;
		
		xDest =	appContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
		yDest = menuContainer.y +  menuBG.image.height*menuBG.scaleX*.1;
		
	
		createjs.Tween.get(appContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
			
	}
}

function animateAwayApps()
{

	var pw = canvas.parentNode.clientWidth;
	var ph = window.innerHeight+50;
	
	if(isAppsReady)
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
				//yDest =  menuHorizontalDestinationY +  menuBG.image.height*menuBG.scaleX*.1;
				yDest = ph;
			}
			createjs.Tween.get(appContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
		}
		else
		{
			
			xDest =	appContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
			yDest = ph;
		
			createjs.Tween.get(appContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
				
		}
	}
}

function appVresizeAll(isVerticle)
{
	//only scale for mobile
	if(supportsOrientationChange)
    {
		 var pw = canvas.parentNode.clientWidth;
  		 var ph = canvas.parentNode.clientHeight;
  		 var heightRatio;
  		 var currentAppBtn;



  		 if(ph > initMenuBGHeight)
  		 	heightRatio = ph/initMenuBGHeight;
  		 else
  		 	heightRatio = initMenuBGHeight/ph;

  		 appIconScaleRatio = 1/heightRatio;

  		 //give more space to canvas if verticle
		if(isVerticle)
		{
			
			if(pw > initMenuBGHeight)
			{
				//alert("big res");
				appIconScaleRatio = 1;
				
				for(i=0; i < numOfApps ; i++)
				{

					currentAppBtn = appContainer.getChildAt(i);
					currentAppBtn.scaleX = currentAppBtn.scaleY = appIconScaleRatio;
				}
			}
			else
			{
				//alert("small res");
				pw = window.innerWidth; 

				var iconSize = pw/horizAppNum*.75; 

				//alert(iconSize)

				for(i=0; i < numOfApps ; i++)
				{

					currentAppBtn = appContainer.getChildAt(i);
					appIconScaleRatio = iconSize/currentAppBtn.image.width;
					currentAppBtn.scaleX = currentAppBtn.scaleY = appIconScaleRatio;
				}
			}			
			
		}
		else //horizontal
		{
			if(pw > initMenuBGHeight) //ipad, or big resolutsion
			{
				
				for(i=0; i < numOfApps ; i++)
				{

					currentAppBtn = appContainer.getChildAt(i);
					currentAppBtn.scaleX = currentAppBtn.scaleY = appIconScaleRatio;
				}
			}
			else
			{
				
				for(i=0; i < numOfApps ; i++)
				{

					currentAppBtn = appContainer.getChildAt(i);
					currentAppBtn.scaleX = currentAppBtn.scaleY = appIconScaleRatio;
				}

			}

		}
	} 
	animateInAppBtns();
}

//centers vertically the whole menu
function appVmoveVert()
{
	var xDest, yDest;

	//mobile
	if(supportsOrientationChange)
    {
	    if(loadedAppsCounter == numOfApps)
    		appVresizeAll(window.orientation==0 || window.orientation==180);

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


		createjs.Tween.get(appContainer,{override:true}).to({ x: xDest, y: yDest}, 700, createjs.Ease.getPowOut(3));
		//animateInAppBtns();
	}
	else
	{
		//horizontal view on desktop
		appContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
		appContainer.y = menuContainer.y +  menuBG.image.height*menuBG.scaleX*.1;
			
	}
	
}