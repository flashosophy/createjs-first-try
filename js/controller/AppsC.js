


function initApps()
{
	initAppsV(); //initializes the view
}

function initMouseInteractionForAppBtn(btn)
{

	(function(btn) {
		btn.onPress = function(evt) 
		{
		
			switch(btn.name)
			{
				case "app0":
                if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/id582086329");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.kittendreams");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/kitten-dreams/");
							}
							else //web
							{
								openInNewTab("http://www.cutecatgames.com/games/kittendreams/");
							}
				break;
                case "app1":
                	if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/valentine-kitty/id597639944");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("http://www.vitapoly.com/valentine-kitty/");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/valentine-kitty/");
							}
							else //web
							{
								openInNewTab("http://www.cutecatgames.com/games/valentinekitty/");
							}
				
				break;
				case "app2":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/crossword-ninja-cat/id592893812");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.crosswordninjacat");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/crossword-ninja-cat/");
							}
							else //web
							{
								openInNewTab("http://www.cutecatgames.com/games/crosswordninjacat/");
							}
				break;
				case "app3":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/nomnom-numbers/id593962088");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.nomnomnumbers");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/nomnom-numbers/");
							}
							else //web
							{
								openInNewTab("http://www.cutecatgames.com/games/nomnomnumbers/");
							}
				break;
				case "app4":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/hungry-sushi-cat/id590464550");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.hungrysushicat");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/hungry-sushi-cat/");
							}
							else //web
							{
								openInNewTab("http://www.cutecatgames.com/games/hungrysushicat/");
							}
				break;
				case "app5":
					if(DetectIOS())
					{
						openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.spellingkitty");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.spellingkitty");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.spellingkitty");
							}
							else //web
							{
								openInNewTab("http://www.cutecatgames.com/games/spellingkitty/");
							}
				break;
				case "app6":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/whats-this-mommy/id618474962");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("https://play.google.com/store/apps/details?id=air.com.vitapoly.whatsthismommy");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/whats-this-mommy/");
							}
							else //web
							{
								openInNewTab("http://www.vitapoly.com/whats-this-mommy/");
							}
				break;
				case "app7":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/falling-apples-adaptive-casual/id340428185");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("http://www.vitapoly.com/falling-apples/");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/falling-apples/");
							}
							else //web
							{
								openInNewTab("http://www.vitapoly.com/falling-apples/");
							}
				break;
				case "app8":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/super-egg/id318692511");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("https://itunes.apple.com/us/app/super-egg/id318692511");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("https://itunes.apple.com/us/app/super-egg/id318692511");
							}
							else //web
							{
								openInNewTab("https://itunes.apple.com/us/app/super-egg/id318692511");
							}
				break;
				case "app9":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/iappwall/id419568227");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("http://www.vitapoly.com/iappwall/");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/iappwall/");
							}
							else //web
							{
								openInNewTab("http://www.vitapoly.com/iappwall/");
							}
				break;
				case "app10":
					if(DetectIOS())
					{
						openInNewTab("https://itunes.apple.com/us/app/star-rewards/id346475675");
					}
					else
						if(DetectAndroid())
						{
							openInNewTab("http://www.vitapoly.com/starrewards/");
						}
						else
							if(DetectMobileOS())
							{
								openInNewTab("http://www.vitapoly.com/starrewards/");
							}
							else //web
							{
								openInNewTab("http://www.vitapoly.com/starrewards/");
							}
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
