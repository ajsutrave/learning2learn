

/*
 Testing some stuff here
 */
var s = document.createElement('script');
s.type = 'module';
s.src = chrome.runtime.getURL('L2L.js');
s.onload = function() {
  console.log('loaded');
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
console.log('~~~');
console.log(window.L2L);
console.log('~~~');


function uuid(x) {
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;

		if (i == 8 || i == 12 || i == 16 || i == 20) {
			uuid += "-"
		}
		uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}

var userid;
chrome.storage.sync.get('userid', function(items) {
    userid = items.userid;
    if (!userid) {
        userid = uuid();
        chrome.storage.sync.set({userid: userid});
    }
});

var run_button_found = false;
var run_button;
function handleRunButtonClick(e) {
	if (this.textContent == "run") {
		// Checking to see if we have the right code editor here
		// in the page (error was being thrown while testing on a
		// different repl.it page)
		var code;
		for (const codeClassName of ["ace_text-layer", "view-lines"]) {
    		code = document.getElementsByClassName(codeClassName)[0]
    		if (code != undefined) {
    			var date = new Date();
    			$.ajax({
    				// url: "http://127.0.0.1:8080/api",
    				url: "https://learning2learn-gcp-backend.appspot.com/api",
    				method: "POST",
    				dataType: "json",
    				data: {
    					"code": code.innerText,
    					"timestamp": date,
    					"userid": userid,
						"name": "Test",
    				}
    			});
    			break;
    		}
		}
		if (code == undefined) {
    		console.error("could not find student's code on page");
		}

		// The button seems to be removed from the page with each
		// click, so must be refound after each run
		run_button_found = false;
		removeEventListener("click", handleRunButtonClick, false);
	}
}

document.addEventListener("DOMNodeInserted", function(e) {
    run_button = $("span:contains('run')").parent().get(0);
    if(run_button != null && !run_button_found) {
		run_button_found = true;
    	run_button.addEventListener("click", handleRunButtonClick, false);
    }
}, false);
