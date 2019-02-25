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
    // TODO use the span element to find the run button
    var run_button = $('.ws-header-cta').get(0);

    if((run_button != null) && !run_button_found) {
	if (run_button.innerHTML.indexOf('run') == -1) {
	    // Wait for the run button to fully initialize
	    run_button_found = false;
	    return;
	}
	run_button_found = true;
	run_button.addEventListener("click", function(e) { // The run button has been clicked
	    run_button_found = false; // The button seems to be removed from the page with each click, so must be refound after each run

	    // First, check if the button click should result in running code in the IDE area
	    // (checking inner html of the button to see if it's currently displaying the word 'run')
	    var clickedElement = e.target || e.srcElement;
	    if (clickedElement.innerHTML.indexOf('run') == -1) {
		// The button isn't displaying run, so block this function from fully executing
		console.log('exiting early');
		return;
	    }
	    else {
		console.log('executing fully');
	    }

	    var code;
	    if (document.getElementsByClassName("ace_text-layer")[0] != undefined) {
		code = document.getElementsByClassName("ace_text-layer")[0]
	    } else if (document.getElementsByClassName("view-lines")[0] != undefined) {
		code = document.getElementsByClassName("view-lines")[0]
	    }
	    // Checking to see if we have the right code editor here in the page (error was being thrown while testing on a different repl.it page)

	    if (code != undefined) {
		var date = new Date();
  		var url = "https://script.google.com/macros/s/AKfycbzt7vR7Ks0HoGlZ5bKFP8A-oTwA1gPpTi2EdhpqDkiY1sEDoiJ8/exec"
		// TODO_datastore: var url = 'https://datastore.googleapis.com/v1/projects/my-project-1533510475410:beginTransaction'
  		$.ajax({
  		    url: url,
  		    method: "GET", // TODO_datastore: method: "POST",
  		    dataType: "json",
  		    data: {
  			"code": code.innerText,
  			"timestamp": date,
  			"userid": userid,
  			"name": "TEST_AJ"
  		    }
  		});
	    } else {
		console.error("could not find student's code");
	    }

	}, false);
    }
}, false);
