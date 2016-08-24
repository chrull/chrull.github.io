
    
function smileFunction()
   { 
OpenWindow=window.open("", "newwin", "height=300, width=550,toolbar=no,scrollbars="+scroll+",menubar=no");
OpenWindow.document.write("<TITLE>Smiley Emoji</TITLE>")
OpenWindow.document.write("<BODY BGCOLOR=#E0EEE0>")
OpenWindow.document.write("<h1>Hello!</h1>")
OpenWindow.document.write("This emoji has a smile on its face, which means it is happy. If someone looks happy, they are likely to be a nice person. Try talking to them! <hr> <img src ='pictures/greatjob.gif' alt='Good job!'> </hr><hr>Exit out of here and try the next question.</hr>")
OpenWindow.document.write("</BODY>")
OpenWindow.document.write("</HTML>")

OpenWindow.document.close()
self.name="main"
   }
   
function disappointedFunction()
   { 
OpenWindow=window.open("", "newwin", "height=300, width=550,toolbar=no,scrollbars="+scroll+",menubar=no");
OpenWindow.document.write("<TITLE>Disappointed Emoji</TITLE>")
OpenWindow.document.write("<BODY BGCOLOR=#E0EEE0>")
OpenWindow.document.write("<h1>Hello!</h1>")
OpenWindow.document.write("This emoji has a sad face and scrunched eyebrows, which means it is disappointed. If someone looks disappointed, something may have happended that they did not want to happen. They may not feel in the mood to talk to you or to anyone, but don't take it personally.<hr> <img src ='pictures/greatjob.gif' alt='Good job!'> </hr><hr> Exit out of here and try the next question.</hr>")
OpenWindow.document.write("</BODY>")
OpenWindow.document.write("</HTML>")

OpenWindow.document.close()
self.name="main"
   }
   
function angryFunction()
   { 
OpenWindow=window.open("", "newwin", "height=300, width=550,toolbar=no,scrollbars="+scroll+",menubar=no");
OpenWindow.document.write("<TITLE>Disappointed Emoji</TITLE>")
OpenWindow.document.write("<BODY BGCOLOR=#E0EEE0>")
OpenWindow.document.write("<h1>Hello!</h1>")
OpenWindow.document.write("This emoji is angry! There are lot of things that make people angry. If someone is yelling or being mean, this is a sign that there are angry. There are other signs that people are angry too.<hr> <img src ='pictures/greatjob.gif' alt='Good job!'> </hr>  <hr> Exit out of here and try the next question. </hr>")
OpenWindow.document.write("</BODY>")
OpenWindow.document.write("</HTML>")

OpenWindow.document.close()
self.name="main"
   }

function surpriseFunction()
   { 
OpenWindow=window.open("", "newwin", "height=300, width=550,toolbar=no,scrollbars="+scroll+",menubar=no");
OpenWindow.document.write("<TITLE>Disappointed Emoji</TITLE>")
OpenWindow.document.write("<BODY BGCOLOR=#E0EEE0>")
OpenWindow.document.write("<h1>You are right!</h1>")
OpenWindow.document.writeln("This emoji is surprised! You can tell because their eyebrows are high and their mouth is opened. When someone is surprised, this means that something happened that they did not expect to happen.<hr> <img src ='pictures/greatjob.gif' alt='Good job!'> </hr> <hr>Exit out of here and try the next question. </hr>")
OpenWindow.document.write("</BODY>")
OpenWindow.document.write("</HTML>")

OpenWindow.document.close()
self.name="main"
   }
 
 
 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// When the user clicks on the button, open the modal 
btn.addEventListener("click", function(){
    modal.style.display = "block";
	console.log("WHYYY");
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var answer_tries = 0;
function check() {
	var answer = "skull";
	var useranswer = document.getElementById("text").value;
	if (useranswer.toLowerCase()==answer){
	document.getElementById("answer").innerHTML = "CORRECT";
	}
	else{ 
		answer_tries++;
		console.log(answer);
		if (answer_tries==3) {
			document.getElementById("answer").innerHTML = "YOU WERE WRONG THREE TIMES, THE ACTUAL ANSWER IS SKULL";
			answer_tries = 0;
		} else {
			document.getElementById("answer").innerHTML = "try again";
		}
	}

}
