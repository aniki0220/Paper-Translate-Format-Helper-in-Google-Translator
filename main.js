// ==UserScript==
// @name         GoogleTranslate_paperHelper
// @version      1.3.3
// @description  ez way to translate with google
// @author       NDM
// @include      https://translate.google.com*

// @grant        unsafeWindow
// ==/UserScript==
 
(function() {
            var buttonSite = document.getElementById("gt-apb-main");
            var newButton1 = document.createElement("span");
            var words = [];
            newButton1.innerHTML="排版";
            newButton1.style.borderStyle="solid";
            newButton1.style.cursor="pointer";
            newButton1.onclick = ()=>{
                source.value = source.value.replace(/\n/g, " ");
                source.value = source.value.replace(/\. /g, ".\n\n");
                source.value += "\n\n====\n"
                for(i= source.textLength+1;i<=1001;i++)
                    source.value += "💩";
            }
            var newButton2 = document.createElement("span");
            newButton2.innerHTML="比對";
            newButton2.style.borderStyle="solid"
            newButton2.style.cursor="pointer";
            newButton2.onclick = ()=>{
                for(var i = 0; i< result_box.children.length; i++)
                result_box.children[i].innerHTML = result_box.children[i].title+"<br><font color=blue>" + result_box.children[i].innerHTML +"</font>"
            }
            buttonSite.appendChild(newButton1);
            buttonSite.appendChild(newButton2);
        })();
