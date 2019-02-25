function uuid() {
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
document.addEventListener("DOMNodeInserted", function(e) {
    var run_button = $("span:contains('run')").parent().get(0);
    if(run_button != null && !run_button_found) {
	run_button_found = true;

    	run_button.addEventListener("click", function(e) {
    	    // The run button has been clicked

    	    // The button seems to be removed from the page with each
    	    // click, so must be refound after each run
    	    run_button_found = false;

    	    // Checking to see if we have the right code editor here
    	    // in the page (error was being thrown while testing on a
    	    // different repl.it page)
    	    var code;
    	    for (const codeClassName of ["ace_text-layer", "view-lines"]) {
    		code = document.getElementsByClassName(codeClassName)[0]
    		if (code != undefined) {
    		    var date = new Date();
    		    var url = "https://script.google.com/macros/s/AKfycbzt7vR7Ks0HoGlZ5bKFP8A-oTwA1gPpTi2EdhpqDkiY1sEDoiJ8/exec"
    		    $.ajax({
    			url: url,
    			method: "GET",
    			dataType: "json",
    			data: {
    			    "code": code.innerText,
    			    "timestamp": date,
    			    "userid": userid,
    			    "name": "TEST_AJ"
    			}
    		    });
    		    break;
    		}
    	    }
    	    if (code == undefined) {
    		console.error("could not find student's code on page");
    	    }
    	}, false);
    }
}, false);
