// ==UserScript==
// @name         GoogleTranslate_paperHelper
// @version      2.1.3
// @description  ez way to C and V
// @author       NDM
// @include      https://translate.google.com*

// @grant        unsafeWindow
// ==/UserScript==
 

(function() {


    var buttonSite = document.getElementsByClassName("tlid-input-button-container")[0]
    var newButton1 = document.createElement("span");
    var newButton2 = document.createElement("span");
    var s = ""
    newButton1.innerHTML="排版";
    newButton1.style.borderStyle="solid";
    newButton1.style.cursor="pointer";
    newButton1.onclick = ()=>{

        //preprocessing
        source.value = source.value.replace(/\n/g, " ");        
        source.value = source.value.replace(/\;/g, ";.");
        source.value = source.value.replace(/i\.e\./g, "i*e*");   // i.e.
        source.value = source.value.replace(" al.", " al");  // ... al. 
        

        //format
        source.value = source.value.replace(/\. /g, ".\n\n");   

        source.value = source.value.replace(/i\*e\*/g, "i.e."); // i.e.
        source.value = source.value.replace(/  /g, " ");
        source.value = source.value.replace(/\n /g, "\n");
        source.value = source.value.replace(/\;\./g, ";");
        // s = source.value.split(".\n\n");
        source.value += "\n\n";

        s = "done"
    }


    newButton2.innerHTML="比對";
    newButton2.style.borderStyle="solid";
    newButton2.style.cursor="pointer";
    newButton2.onclick = ()=>{
        var targetSpans = document.getElementsByClassName("tlid-translation")[0].getElementsByTagName("span");
        // console.log(targetSpans);
        
        if (s == ""){
            alert("請先按下「排版」，才可進行「比對」")
            return false
        }
        if (targetSpans.length == 0){
            alert("字數過多，1000字以內才可使用「比對」功能")
            return false
        }
        
        var separators = ['.\n\n', '\;'];
        s = source.value.split(new RegExp(separators.join('|'),'g'));

        for(i in targetSpans){
            // console.log(s[i][0]);
            while(s[i][0] == " ")
                s[i] = s[i].substr(1)
            // targetSpans[i].innerHTML += "\n<br><font color=blue>" + s[i] + ".</font>";
            var temp = targetSpans[i].innerHTML; 
            targetSpans[i].innerHTML = "<font color=blue>" + s[i] + ".</font><br>" + temp; 
        }
        console.log(s);
        
    }

    buttonSite.appendChild(newButton1);
    buttonSite.appendChild(newButton2);

})();
