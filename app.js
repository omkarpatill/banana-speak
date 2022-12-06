var btnTranslate=document.querySelector("#btn-translate");
var inputText=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/minion.json";


function constructUrl(text){
    return serverUrl+"?text="+ text
}

function errorHandler(){
console.log("error occurred", error);
}

function clickHandler(){
    var input=inputText.value;

    fetch(constructUrl(input))
    .then(Response=>Response.json())
    .then(json=>{var translatedText=json.contents.translated
        outputDiv.innerText=translatedText
    
    })
    .catch(errorHandler);

};

btnTranslate.addEventListener("click",clickHandler)

