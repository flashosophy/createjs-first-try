var menuContainer;
var menuBG;
var appsBtn, toolsBtn, servicesBtn;

var initMenuBGHeight;
var isMenuReady;
var menuHorizontalDestinationY;

function initMenuV()
{
	menuContainer = new createjs.Container();
	mainView.addChild(menuContainer);

	var tempImage;
	tempImage = new Image();
	tempImage.onload = handleMenuBGImageLoad;
	tempImage.src = "images/menuBG.png";
	tempImage.name = "menuBG"
	
}

function handleMenuBGImageLoad(event)
{
	var image = event.target;
	menuBG = new createjs.Bitmap(image);
	initMenuBGHeight = image.width;
	menuContainer.addChild(menuBG);
	menuContainer.x = initMenuBGHeight*.01;
	updateMenuYDestination();
	isMenuReady= true;

	if(!supportsOrientationChange) //destop animate to middle
		createjs.Tween.get(menuContainer).to({ x: menuContainer.x, y: (canvas.parentNode.clientHeight - image.height)/2}, 1200, createjs.Ease.getPowOut(3));
	else
		menuVmoveVert();


	menuVresize(window.orientation==0 || window.orientation==180);

	var tempImage;
	tempImage = new Image();
	tempImage.src = "images/appsBtn.png";
	tempImage.name = "appsBtn"
	tempImage.onload = handleMenuItemImageLoad;

	tempImage = new Image();
	tempImage.src = "images/toolsBtn.png";
	tempImage.name = "toolsBtn"
	tempImage.onload = handleMenuItemImageLoad;

	tempImage = new Image();
	tempImage.src = "images/servicesBtn.png";
	tempImage.name = "servicesBtn"
	tempImage.onload = handleMenuItemImageLoad;
}

function handleMenuItemImageLoad(event)
{
	var image = event.target;
	
	switch(image.name)
	{
		case "appsBtn":
			appsBtn = new createjs.Bitmap(image);
			appsBtn.name = image.name;
			menuContainer.addChild(appsBtn);

			initMouseInteractionForMenuItem(appsBtn);
		break;
		case "toolsBtn":		
			toolsBtn = new createjs.Bitmap(image);
			toolsBtn.name = image.name;
			menuContainer.addChild(toolsBtn);
			initMouseInteractionForMenuItem(toolsBtn);
		break;
		case "servicesBtn":		
			servicesBtn = new createjs.Bitmap(image);
			servicesBtn.name = image.name;
			menuContainer.addChild(servicesBtn);
			initMouseInteractionForMenuItem(servicesBtn);
		break;

	}

	menuBtnResize(window.orientation==0 || window.orientation==180);
}

function menuVresize(isVerticle)
{
	if(supportsOrientationChange)
    {
		 var pw = window.innerWidth; //canvas.parentNode.clientWidth;
  		 var ph = window.innerHeight;//canvas.parentNode.clientHeight;
  		 var heightRatio;

  		 //give more space to canvas if verticle
		if(isVerticle)
		{
			if(pw > initMenuBGHeight)
			{
				//alert("big res");
				menuBG.scaleX = menuBG.scaleY = .8;
			}
			else
			{
				//alert("small res");
				heightRatio = initMenuBGHeight/pw;
				menuBG.scaleX = menuBG.scaleY = 1/heightRatio*.8; //.7 good for phones with high length but not iphone

				//low height version
				if(heightRatio > 1.5)
				{
					menuBG.scaleX = menuBG.scaleY = 1/heightRatio*.45; //.7 good for phones with high length but not iphone

				}
			}			
			
		}
		else
		{

			if(ph > initMenuBGHeight)
				heightRatio = ph/initMenuBGHeight;
			else
				heightRatio = initMenuBGHeight/ph;
			//var w = window.innerWidth;
			//var h = window.innerHeight;
			menuBG.scaleX = menuBG.scaleY = 1/heightRatio;
		}
		

	} 
}

function updateMenuYDestination()
{
	if(isMenuReady && supportsOrientationChange)
	{
		var pw = window.innerWidth;
		 var ph = canvas.parentNode.clientHeight;	
		
		if(window.orientation==0 || window.orientation==180)
		{
			menuHorizontalDestinationY = 5;
		}
		else
		{
			if(pw > initMenuBGHeight) //big rez stuff can center
			{
				menuHorizontalDestinationY = Math.abs(window.innerHeight - menuBG.image.height*menuBG.scaleX)/2;
			}
			else
			{
				menuHorizontalDestinationY = 5;
				
			}
		}
		//alert(menuHorizontalDestinationY)
	}
}

function menuBtnResize(isVerticle)
{
	if(supportsOrientationChange && isMenuReady)
    {
		//sub items scale are based on menu scale
		appsBtn.scaleX = appsBtn.scaleY = menuBG.scaleX;
		toolsBtn.scaleX = toolsBtn.scaleY =  menuBG.scaleX;
		servicesBtn.scaleX = servicesBtn.scaleY = menuBG.scaleX;

	}

	if(isMenuReady)
	{
		if(appsBtn != null)
		{
			appsBtn.x = menuBG.image.width*.17*menuBG.scaleX; 
			appsBtn.y = menuBG.image.height*.15*menuBG.scaleX;
			createjs.Tween.get(appsBtn).to({ x: appsBtn.x, y: appsBtn.y*1.5 }, 700, createjs.Ease.getPowOut(3));
		}

		if(toolsBtn != null)
		{
			toolsBtn.x = menuBG.image.width*.53*menuBG.scaleX;
			toolsBtn.y = menuBG.image.height*.15*menuBG.scaleX;
			createjs.Tween.get(toolsBtn).to({ x: toolsBtn.x, y: toolsBtn.y*1.5 }, 1400, createjs.Ease.getPowOut(3));
		}

		if(servicesBtn != null)
		{
			servicesBtn.x = menuBG.image.width*.35*menuBG.scaleX;
			servicesBtn.y = menuBG.image.height*.5*menuBG.scaleX;
			createjs.Tween.get(servicesBtn).to({ x: servicesBtn.x, y: servicesBtn.y*1.1 }, 2100, createjs.Ease.getPowOut(3));
		}
   }
}


//centers vertically the whole menu
function menuVmoveVert()
{

	if(isMenuReady)
	{
	
		//mobile
		if(supportsOrientationChange)
	    {
	    	menuVresize(window.orientation==0 || window.orientation==180);

	    	if(appsBtn != null && toolsBtn!= null && servicesBtn!= null)
		    	menuBtnResize(window.orientation==0 || window.orientation==180);

	    	updateMenuYDestination();
			//if verticle
			if(window.orientation==0 || window.orientation==180)
			{
				createjs.Tween.get(menuContainer).to({ x: menuContainer.x, y: menuHorizontalDestinationY}, 1200, createjs.Ease.getPowOut(3));
			}
			else
			{
				
				createjs.Tween.get(menuContainer).to({ x: menuContainer.x, y: menuHorizontalDestinationY}, 1200, createjs.Ease.getPowOut(3));
			}
		}
		else
		{
			menuContainer.y = window.innerHeight/2 - menuBG.image.height/2*menuBG.scaleX;
		}
	}

}


