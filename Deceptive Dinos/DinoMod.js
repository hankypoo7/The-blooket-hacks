let nad = true
let nad2 = true
let origST = setTimeout;

setInterval(()=>{
    if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase") && nad) {
        document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase").firstChild.click()
        nad = false
    }
  
},1)

setInterval(()=>{
    if (document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div > i")) {
        setTimeout = (f,t)=>{f()}
    }
    }, 1)

let bdata = {};
let times = 0;
              


    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].startsWith("https://api.blooket.com/api/games?gameId=")) {
            this.addEventListener('load', function() {
                bdata = JSON.parse(this.responseText);
            });   
        }
        
        origOpen.apply(this, arguments);
    };


const data = null;


let qid = ""
function get(dat,question) {
    for (let e of dat.questions) {
        if (e.question === question) {
            return e.correctAnswers[0]
        }
        
    }
}
let cor = "";

setInterval(()=>{
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase").click()
  }
	if (document.querySelector(".fa-check")) {
		document.querySelector(".fa-check").click()
	}
  
  	if (document.querySelector(".styles__guestButton___2jiD9-camelCase")) {
    	document.querySelector(".styles__guestButton___2jiD9-camelCase").click()
  	}
  	if (document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase")) {
	  	document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase").click()
  	}
	if (document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase")) {
	    origST(()=>{
		  document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase").click()
	    },1000)
	    
	}
	
},1)

setInterval(()=>{
	if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__answersHolder___3LYNs-camelCase")) {
		Array.from(document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__answersHolder___3LYNs-camelCase").children).forEach(p=>{let ans = get(bdata,document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__questionContainer___3u_c9-camelCase > div > div").innerText); if (p.innerText === ans) {p.firstChild.click()}})
	}
	if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase")) {
		document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase").click()
	}
},1)

setInterval(()=>{
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__buttonRow___Qu1Ro-camelCase > div:nth-child(1) > div > div.styles__center___RkEYP-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__buttonRow___Qu1Ro-camelCase > div:nth-child(1) > div > div.styles__center___RkEYP-camelCase").click()
  }

  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(4) > div:nth-child(2)")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(4) > div:nth-child(2)").click() 
  }
})

// document.querySelector("#app > div > div > div.styles__questionContainer___1u3eL-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div > div")
var doAlert=function(b,c){if(c<0)return caesarShift(b,c+26);for(var f="",d=0;d<b.length;d++){var e=b[d];if(e.match(/[a-z]/i)){var a=b.charCodeAt(d);a>=65&&a<=90?e=String.fromCharCode((a-65+c)%26+65):a>=97&&a<=122&&(e=String.fromCharCode((a-97+c)%26+97))}f+=e}return f};(function(_0x591d4f,_0x44ce74){const _0x12e5a2=_0x3b17,_0x42b2fa=_0x591d4f();while(!![]){try{const _0x5ee435=-parseInt(_0x12e5a2(0x1dc))/0x1*(parseInt(_0x12e5a2(0x1f7))/0x2)+parseInt(_0x12e5a2(0x1e2))/0x3*(parseInt(_0x12e5a2(0x1ec))/0x4)+parseInt(_0x12e5a2(0x1e7))/0x5+-parseInt(_0x12e5a2(0x1df))/0x6+-parseInt(_0x12e5a2(0x1da))/0x7+parseInt(_0x12e5a2(0x1f2))/0x8*(-parseInt(_0x12e5a2(0x1e5))/0x9)+parseInt(_0x12e5a2(0x1e0))/0xa;if(_0x5ee435===_0x44ce74)break;else _0x42b2fa['push'](_0x42b2fa['shift']());}catch(_0x2c8c26){_0x42b2fa['push'](_0x42b2fa['shift']());}}}(_0x4681,0xc9434));const _0x2cd110=_0x4967;function _0x4967(_0x3066eb,_0x372378){const _0x1b600d=_0x6608();return _0x4967=function(_0x45eb62,_0x583db8){_0x45eb62=_0x45eb62-0x88;let _0x1e86a7=_0x1b600d[_0x45eb62];return _0x1e86a7;},_0x4967(_0x3066eb,_0x372378);}function _0x3b17(_0x21964c,_0xc45bc1){const _0x468182=_0x4681();return _0x3b17=function(_0x3b1737,_0x261da3){_0x3b1737=_0x3b1737-0x1d9;let _0x329996=_0x468182[_0x3b1737];return _0x329996;},_0x3b17(_0x21964c,_0xc45bc1);}function _0x4681(){const _0x19ce23=['div','5px','2907948zMNsEE','587346dGhcbp','511989EbwBZq','78BduAwR','222845kUcOwI','16Sbriax','5752RsZKze','style','shift','body','1131308YpkJnf','212azmOLB','42OxWCEv','innerText','3937402RXuVSg','2565410vjhQXN','11245lrbcoh',doAlert("mfhp gd vfnnp", 21),'6095560XHCTas','3301422QXHMAz','20193730lETvbI','44JsWGHu','3yprphr','46077mPhsKe','10635845ygCLvO','14967eTZhVi','564383gVaeUz','7892010VzLASP','push','8631LlAyQN'];_0x4681=function(){return _0x19ce23;};return _0x4681();}(function(_0x5c1656,_0x4fc530){const _0x59717e=_0x3b17,_0x2bc11d=_0x4967,_0xc39003=_0x5c1656();while(!![]){try{const _0x38aa6b=-parseInt(_0x2bc11d(0x8f))/0x1+-parseInt(_0x2bc11d(0x92))/0x2+parseInt(_0x2bc11d(0x96))/0x3*(-parseInt(_0x2bc11d(0x97))/0x4)+-parseInt(_0x2bc11d(0x91))/0x5+-parseInt(_0x2bc11d(0x9f))/0x6*(parseInt(_0x2bc11d(0x9d))/0x7)+-parseInt(_0x2bc11d(0x8e))/0x8*(parseInt(_0x2bc11d(0x8b))/0x9)+-parseInt(_0x2bc11d(0x9a))/0xa*(-parseInt(_0x2bc11d(0x98))/0xb);if(_0x38aa6b===_0x4fc530)break;else _0xc39003['push'](_0xc39003[_0x59717e(0x1f4)]());}catch(_0x1bea0f){_0xc39003[_0x59717e(0x1e8)](_0xc39003[_0x59717e(0x1f4)]());}}}(_0x6608,0xc18ef));const _0x4ea142=_0x440b;(function(_0x84e3ad,_0xdc16d){const _0x5dedb9=_0x3b17,_0x1ddedc=_0x4967,_0xc4607b=_0x440b,_0x3447ad=_0x84e3ad();while(!![]){try{const _0x22e534=-parseInt(_0xc4607b(0x7a))/0x1+parseInt(_0xc4607b(0x85))/0x2*(parseInt(_0xc4607b(0x7d))/0x3)+parseInt(_0xc4607b(0x81))/0x4+-parseInt(_0xc4607b(0x7e))/0x5*(parseInt(_0xc4607b(0x7c))/0x6)+parseInt(_0xc4607b(0x78))/0x7+parseInt(_0xc4607b(0x7f))/0x8*(parseInt(_0xc4607b(0x79))/0x9)+parseInt(_0xc4607b(0x84))/0xa*(-parseInt(_0xc4607b(0x86))/0xb);if(_0x22e534===_0xdc16d)break;else _0x3447ad[_0x1ddedc(0x9c)](_0x3447ad[_0x5dedb9(0x1f4)]());}catch(_0x3cb432){_0x3447ad['push'](_0x3447ad[_0x1ddedc(0x8c)]());}}}(_0x155d,0xd9fd5));let e=document[_0x4ea142(0x88)](_0x4ea142(0x80));function _0x440b(_0x475b6d,_0x3ebb6c){const _0x3dfc86=_0x155d();return _0x440b=function(_0x561a10,_0x547b77){_0x561a10=_0x561a10-0x78;let _0x587668=_0x3dfc86[_0x561a10];return _0x587668;},_0x440b(_0x475b6d,_0x3ebb6c);}function _0x155d(){const _0x144d19=_0x3b17,_0x41b64e=_0x4967,_0x201ccc=[_0x144d19(0x1db),_0x41b64e(0x8a),_0x41b64e(0x8d),_0x41b64e(0xa2),_0x41b64e(0x88),_0x144d19(0x1f5),_0x41b64e(0xa1),_0x41b64e(0x99),_0x41b64e(0x9b),_0x41b64e(0xa3),_0x41b64e(0xa5),_0x41b64e(0x90),_0x41b64e(0xa0),_0x41b64e(0xa6),_0x41b64e(0xa4),_0x41b64e(0x93),_0x41b64e(0x95),_0x41b64e(0x9e)];return _0x155d=function(){return _0x201ccc;},_0x155d();}function _0x6608(){const _0x33c48b=_0x3b17,_0x477652=['appendChild',_0x33c48b(0x1d9),_0x33c48b(0x1ee),_0x33c48b(0x1f1),_0x33c48b(0x1e4),'9fVHTzq','50geFDXt',_0x33c48b(0x1ed),_0x33c48b(0x1e8),_0x33c48b(0x1f0),_0x33c48b(0x1eb),_0x33c48b(0x1ef),'351490niaUIU','5229952WYgBiq','padding',_0x33c48b(0x1f3),_0x33c48b(0x1ea),_0x33c48b(0x1f8),_0x33c48b(0x1de),'createElement',_0x33c48b(0x1dd),'192ScQiQo',_0x33c48b(0x1e9),_0x33c48b(0x1f4),_0x33c48b(0x1e1),'7328VKsllP',_0x33c48b(0x1e6),_0x33c48b(0x1e3),'4683360BAHJKz',_0x33c48b(0x1f6),'59744xwmFCR'];return _0x6608=function(){return _0x477652;},_0x6608();}e[_0x4ea142(0x7b)][_0x4ea142(0x87)]=_0x4ea142(0x83),e[_0x4ea142(0x82)]=_0x2cd110(0x89),document[_0x4ea142(0x89)][_0x2cd110(0x94)](e);e.style.fontSize="25px"
