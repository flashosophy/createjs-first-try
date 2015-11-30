var currentView;


function initMenu()
{
	initMenuV(); //initializes the view

}

function initMouseInteractionForMenuItem(btn)
{

	(function(btn) {
		btn.onPress = function(evt) 
		{
			createjs.Tween.get(this).to({ scaleX: this.scaleX + .1, scaleY: this.scaleY + .1}, 500, createjs.Ease.backOut).call(onCompletePress);
			animateAwayApps();
			animateAwayTools();
			animateAwayServices();

			switch(btn.name)
			{
				case "appsBtn":
 					initApps();
				break;
				case "toolsBtn":
					initTools();
				break;
				case "servicesBtn":
					initServices();
				break;
			}
			currentView=btn.name;

		}

		btn.onMouseOver = function() 
		{
			this.y -= 2;
			
		}

		btn.onMouseOut = function()
		{
			this.y += 2;
		}
		
	})(btn);

}

function onCompletePress(event)
{
	removeBtnFilters();

	event.target.scaleX -= .1;
	event.target.scaleY -= .1;

	event.target.filters = [btnHighlightFilter];
	event.target.cache(0,0,event.target.image.width,event.target.image.height); 
}	

function removeBtnFilters()
{
	appsBtn.filters = removeAllFilter;
	appsBtn.cache(0,0,appsBtn.image.width,appsBtn.image.height); 

	toolsBtn.filters = removeAllFilter;
	toolsBtn.cache(0,0,toolsBtn.image.width,toolsBtn.image.height); 

	servicesBtn.filters = removeAllFilter;
	servicesBtn.cache(0,0,servicesBtn.image.width,servicesBtn.image.height); 
}