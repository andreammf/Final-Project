# Translator + Weather extension 


Project name: Translator + Weather extension for Chrome

Made by: Andrea Mendoza

For course: LMSC-261

Files included: background.js, content.js, manifest.json, options.html, options.js, small-translateicon.png, styles.css

This is a chrome extension made with JavaScript that allows the user to choose a source and target language in the options page and translate any word in 8 differet languages: English, Spanish, French, German, Greek, Filipino, Finnish and Swedish The last translated word by the user will be saved in the options page as "Most Recent Translation". In addition to that, the user can also get the current weather of any city by typing it in the optiong page, this will be shown in the same popup window that appears every time the user translates a word.

In order to implement this extension into the user browser he or she must clone or download the repository with all the files included, then, go to chrome://extensions/ in Google Chrome, select "Load unpacked" and choose the unzipped folder that contains all the files. It will appear an icon of the translation in the right corner and if the user click on it he will see the name of the extension, how the extension read and change site data and the options menu which is the page where the user can choose which languages he needs to use, the last word translated and the city to get the weather from. 

To start using this chrome extension, the user needs to highlight the desired word, right click on it and select the option "Translate", a popup window will appear showing the current weather (in Farenheit) in the city that the user input in the options page and the translated word at the bottom. The last translated word will appear at the option page automatically, the user does not need to set this function. 

Two APIs were implemented in the background.js file. A microsoft translator API and a Open Weather API


To consider: If the user type a city that does not exist, the extension will not crash but it will not allow the user to translate any word.
