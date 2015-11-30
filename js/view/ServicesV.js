
var ServicesContainer;

var initMenuBGHeight;
var isServicesReady;
var ServicesIconScaleRatio =1;
var numofServiceImageItems = 1;
var ServicesIconGap;
var loadedServicesCounter;


function initServicesV()
{
	if(loadedServicesCounter == numofServiceImageItems) //don't create everything again if things are already loaded
	{
		
		if(currentView == "servicesBtn")
		{
			//animateInServicesBtns();
		}			
		else
			animateInServicesBtnsFromEdge();
			
	}
	else
	{
		loadedServicesCounter=0;
		ServicesContainer = new createjs.Container();
		mainView.addChild(ServicesContainer);
		ServicesVmoveVert();

		var tempImage = new Image();
		tempImage.onload = handleServicesImageLoad;
		tempImage.name = "services";
		tempImage.src = "images/services/services.png";
			/*
		tempImage = new Image();
		tempImage.onload = handleServicesImageLoad;
		tempImage.name = "airExtensions";
		tempImage.src = "images/services/airExtensions.png";
			*/
		animateInServicesBtnsFromEdge();
	}

}

function handleServicesImageLoad(event)
{
	var image = event.target;
	var	tempServicesBtn = new createjs.Bitmap(image);
	tempServicesBtn.name = image.name;
	ServicesContainer.addChild(tempServicesBtn);
	ServicesContainer.visible = false;

	loadedServicesCounter++;
	if(loadedServicesCounter == numofServiceImageItems)
	{
		ServicesContainer.visible = true;
		ServicesVresizeAll(window.orientation==0 || window.orientation==180);
		isServicesReady = true;
		initServicesIconLocation();
	}

	initMouseInteractionForServicesBtn(tempServicesBtn);
}

function initServicesIconLocation()
{
	var currentServicesBtn = ServicesContainer.getChildAt(0);
	var btnIndex=0;
	var doTopDownAnimation = true; //default
	var xDestination, yDestination;
	var pw = canvas.parentNode.clientWidth;
	var ph = canvas.parentNode.clientHeight;
	

	currentServicesBtn = ServicesContainer.getChildByName("services");
	yDestination = currentServicesBtn.y;
	currentServicesBtn.y = -20;
	createjs.Tween.get(currentServicesBtn,{override:true}).to({ x: currentServicesBtn.x, y: yDestination }, 1000, createjs.Ease.getPowOut(3));
	
}

function animateInServicesBtnsFromEdge()
{

	var xDest, yDest;
	var pw = canvas.parentNode.clientWidth;
	var ph = canvas.parentNode.clientHeight;

	//mobile
	if(supportsOrientationChange)
    {
	    if(loadedServicesCounter == numofServiceImageItems)
    		ServicesVresizeAll(window.orientation==0 || window.orientation==180);

    	updateMenuYDestination();
    	
		if(window.orientation==0 || window.orientation==180)
		{
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*.1 ;	
			yDest =  menuBG.image.width*menuBG.scaleY*1.02;
		}
		else
		{
			ServicesContainer.y = -ph;
			xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;	
			yDest =  menuHorizontalDestinationY +  menuBG.image.height*menuBG.scaleX*.1;
		}
		ServicesContainer.x = xDest;
		createjs.Tween.get(ServicesContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
	}
	else
	{
		
		
		xDest =	ServicesContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
		yDest = menuContainer.y +  menuBG.image.height*menuBG.scaleX*.1;
		ServicesContainer.y = -ph;
		
	
		createjs.Tween.get(ServicesContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
			
	}
}

function animateAwayServices()
{
	var xDest, yDest;
	var pw = window.innerWidth;
	var ph = window.innerHeight+50;
	
	if(isServicesReady)
	{		

		//mobile
		if(supportsOrientationChange)
	    {
		    if(loadedServicesCounter == numofServiceImageItems)
	    		ServicesVresizeAll(window.orientation==0 || window.orientation==180);

	    	updateMenuYDestination();
	    	
			if(window.orientation==0 || window.orientation==180) //vert
			{
				xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*.1 ;	
				//yDest =  menuBG.image.width*menuBG.scaleY*1.02;
				yDest =  ph;
			}
			else //horiz
			{
				xDest =  menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;	
				yDest =  ph;
			}
			createjs.Tween.get(ServicesContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
		}
		else
		{
			
			xDest =	ServicesContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
			yDest = ph;
			
			createjs.Tween.get(ServicesContainer,{override:true}).to({ x: xDest, y: yDest}, 1000, createjs.Ease.getPowOut(3));
				
		}
	}
}

function ServicesVresizeAll(isVerticle)
{
	//only scale for mobile
	if(supportsOrientationChange)
    {
		 var pw = canvas.parentNode.clientWidth;
  		 var ph = canvas.parentNode.clientHeight;
  		 var heightRatio;
  		 var currentServicesBtn;



  		 if(ph > initMenuBGHeight)
  		 	heightRatio = ph/initMenuBGHeight;
  		 else
  		 	heightRatio = initMenuBGHeight/ph;

  		 ServicesIconScaleRatio = 1/heightRatio;

  		 //give more space to canvas if verticle
		if(isVerticle)
		{
			
			if(pw > initMenuBGHeight)
			{
				//alert("big res");
				ServicesIconScaleRatio = 1;
				
				for(i=0; i < numofServiceImageItems ; i++)
				{

					currentServicesBtn = ServicesContainer.getChildAt(i);
					currentServicesBtn.scaleX = currentServicesBtn.scaleY = ServicesIconScaleRatio;
				}
			}
			else
			{
				//alert("small res");
				pw = window.innerWidth; 

				for(i=0; i < numofServiceImageItems ; i++)
				{

					currentServicesBtn = ServicesContainer.getChildAt(i);
					ServicesIconScaleRatio = .5;
					currentServicesBtn.scaleX = currentServicesBtn.scaleY = ServicesIconScaleRatio;
				}
			}			
			
		}
		else //horizontal
		{
			if(pw > initMenuBGHeight) //ipad, or big resolutsion
			{
				
				for(i=0; i < numofServiceImageItems ; i++)
				{

					currentServicesBtn = ServicesContainer.getChildAt(i);
					currentServicesBtn.scaleX = currentServicesBtn.scaleY = ServicesIconScaleRatio;
				}
			}
			else
			{
				
				for(i=0; i < numofServiceImageItems ; i++)
				{

					currentServicesBtn = ServicesContainer.getChildAt(i);
					currentServicesBtn.scaleX = currentServicesBtn.scaleY = ServicesIconScaleRatio;
				}

			}

		}
	} 
	
}

//centers vertically the whole menu
function ServicesVmoveVert()
{
	var xDest, yDest;

	//mobile
	if(supportsOrientationChange)
    {
	    if(loadedServicesCounter == numofServiceImageItems)
    		ServicesVresizeAll(window.orientation==0 || window.orientation==180);

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
		createjs.Tween.get(ServicesContainer,{override:true}).to({ x: xDest, y: yDest}, 700, createjs.Ease.getPowOut(3));
		//animateInServicesBtns();
	}
	else
	{
		//horizontal view on desktop
		ServicesContainer.x = menuContainer.x +  menuBG.image.width*menuBG.scaleX*1.1 ;
		ServicesContainer.y = menuContainer.y +  menuBG.image.height*menuBG.scaleX*.1;
			
	}
	
}