Design Document 

I started this project by following different guides that explained which files where needed in order to create the chrome extension. First, I created the manifest.json file, which gives details about the data of the extension and request permissions. I followed some guides about how to create a simple extension that made a popup window and then I expand the idea from it. I found the microsoft translator API that I could implement into the background.js file and I added a http request for the translation api. 

I created an options.html and formatted it with the styles css so the color of the "save" button matches with the icon of the extension. The reason of making this file was to allow the user to choose the languages from there and to see the user's most recent translation in there. 

It took me a while to figure out how to get the weather API and I finally found a current weather data from Open Weather to implement in the background.js file too. For some reason, when creating another background.js file to implement the weather api, chrome did not let me load the folder with all the files in google chrome so I decided to mantain all APIs in one file. 

The last thing I added was the location in the options page so the user could get the right weather for where the use location is. I tried to keep the option page as simple as possible so the user will not get confused trying to differentiate between languages and weather settings. 


