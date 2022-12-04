var btnTranslate=document.querySelector("#btn-translate");
var inputText=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


function clickHandler(){
    outputDiv.innerText="banana"+inputText.value;

};

btnTranslate.addEventListener("click",clickHandler)

