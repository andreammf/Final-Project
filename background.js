// background.js

function translate(info)
{
    var searchstring = info.selectionText;
    let sourceLang;
    let targetLang;
    
    // get user's saved options from chrome's storage
    chrome.storage.sync.get({
        sourceLang: 'en',
        targetLang: 'es',
        lastTranslation: '',
        lastSource: '',
        locationString: 'Boston'
      }, function(items) {
        // set the language/location variables for use with http request
        sourceLang = items.sourceLang;
        targetLang = items.targetLang;
        locationString = items.locationString;

        var data = null;
        var alertString = "";
        var responseCount = 0; // set response count to 0 everytime we call translate

        // create XMLHttpRequests
        var xhrA = new XMLHttpRequest();
        var xhrB = new XMLHttpRequest();

        xhrA.withCredentials = true;

        // called when translation api responds
        xhrA.addEventListener("readystatechange", function () {
            // on response
	        if (this.readyState === this.DONE) {
                chrome.storage.sync.set({
                    lastTranslation: this.response,
                    lastSource: searchstring
                }, function() {
                    console.log("Saved most recent translation!");
                });
                // add translation info to alertString
                alertString = alertString + "\n\nTranslation: " + extractContent(this.response);
                responseCount = responseCount + 1;
            }
            if (responseCount === 2){
                alert(alertString);
            }
        });

        // called when weather api responds
        xhrB.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var resObject = JSON.parse(this.response);
                // add weather info to alertString
                alertString = alertString + "\n\nCurrent Weather: " + resObject.weather[0].main + ", " + resObject.weather[0].description + " (" + resObject.main.temp + String.fromCharCode(176) + "F)"; 
                responseCount = responseCount + 1;
            }
            if (responseCount === 2){
                alert(alertString);
            }
        });
        
        // open, set headers for and send translation request
        xhrA.open("GET", "https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=" + sourceLang + "&to=" + targetLang + "&text=" + searchstring);
        xhrA.setRequestHeader("x-rapidapi-host", "microsoft-azure-translation-v1.p.rapidapi.com");
        xhrA.setRequestHeader("x-rapidapi-key", "a479028c71msh30e13e71ff449b7p1c9242jsna854634c27c4");
        xhrA.setRequestHeader("accept", "application/json");
        xhrA.send(data);
        
        //open and send weather api request
        xhrB.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + locationString + "&units=imperial&appid=970b77d7cfa17e8cd6bedbe89500d128");
        xhrB.send(data);
    });
}

// extracts content from an HTML response
function extractContent(responseString) {
    var span = document.createElement('span');
    span.style.visibility = false;
    span.innerHTML = responseString;
    return span.textContent || span.innerText;
};

chrome.contextMenus.create({title: "Translate", contexts:["selection"], onclick: translate});

// add options for changing languages