


function initTools()
{
	initToolsV(); //initializes the view
}

function initMouseInteractionForToolsBtn(btn)
{

	(function(btn) {
		btn.onPress = function(evt) 
		{
		
			switch(btn.name)
			{
				case "u3dxt":
					openInNewTab("http://www.u3dxt.com");
					/*
                if(DetectIOS())
					{
						openInNewTab("");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("");
							}
							else //web
							{
								openInNewTab("");
							}*/
				break;
                case "airExtensions":
                	openInNewTab("http://www.airExtensions.net");
				
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
