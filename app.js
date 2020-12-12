var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    // take input
    var inputText = txtInput.value; 

    // processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            // output
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
