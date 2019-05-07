// ==UserScript==
// @name         GoogleTranslate_paperHelper
// @version      2.0.1
// @description  ez way to translate with google
// @author       NDM
// @include      https://translate.google.com*

// @grant        unsafeWindow
// ==/UserScript==
 

(function() {


    var buttonSite = document.getElementsByClassName("tlid-input-button-container")[0]
    var newButton1 = document.createElement("span");
    var newButton2 = document.createElement("span");
    var s = ''
    newButton1.innerHTML="排版";
    newButton1.style.borderStyle="solid";
    newButton1.style.cursor="pointer";
    newButton1.onclick = ()=>{
        source.value = source.value.replace(/\n/g, " ");
        s = source.value.split(".");
        source.value = source.value.replace(/\. /g, ".\n\n");
    }
    newButton2.innerHTML="比對";
    newButton2.style.borderStyle="solid";
    newButton2.style.cursor="pointer";
    newButton2.onclick = ()=>{
        var targetSpans = document.getElementsByClassName("tlid-translation")[0].getElementsByTagName("span");
        for(i in targetSpans){
            targetSpans[i].innerHTML += "\n<br><font color=blue>" + s[i] + ".</font>";
        }
    }

    buttonSite.appendChild(newButton1);
    buttonSite.appendChild(newButton2);

})();
