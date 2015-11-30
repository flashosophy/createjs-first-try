


function initServices()
{
	initServicesV(); //initializes the view
}

function initMouseInteractionForServicesBtn(btn)
{

	(function(btn) {
		btn.onPress = function(evt) 
		{
		
			switch(btn.name)
			{
				case "services":
				//	window.open('mailto:services@vitapoly.com');
					
				break;
            
			}
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
