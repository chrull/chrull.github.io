
function initMap(){
  var mapDiv = document.getElementById('map');
   var map = new google.maps.Map(mapDiv, {
	  center: {lat: 40.753862, lng: -73.932597},
	  zoom: 12
	});
	var contentString = "Quality Services-Autism Comm <br> Address: 30-10 38th Ave, Long Island City, NY 11101 <br> Phone:(718) 728-8476 <br> <a href='http://www.qsac.com/' target='_blank'>http://www.qsac.com/</a>" ;
	var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
		
	var contentString1 = "New York Families for Autistic Children <br> Address: 95-16 Pitkin Ave, Ozone Park, NY 11417 <br> Phone:(718) 641-3441 <br> <a href='http://nyfac.org/' target='_blank'>http://nyfac.org/</a> ";
	var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
        });
	
	var contentString2 = "Brooklyn Autism Center <br> Address: 57 Willoughby St, Brooklyn, NY 11201 <br> Phone:(718) 554-1027 <br> <a href='https://www.brooklynautismcenter.org/' target='_blank'>https://www.brooklynautismcenter.org/</a> ";
	var infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });
	
	var contentString3 = "Autism Speaks <br> Address: 1 East 33rd Street, 4th Floor, New York, NY 10016 <br> Phone:(212) 252-8584 <br> <a href='https://www.autismspeaks.org/ ' target='_blank'>https://www.autismspeaks.org/ </a> ";
	var infowindow3 = new google.maps.InfoWindow({
          content: contentString3
        });
		
	var contentString4 = "New York Collaborates for Autism <br> Address: 3 E 54th St, New York, NY 10022 <br> Phone:(212) 759-3775 <br> <a href='http://www.nyc4a.org/ ' target='_blank'>http://www.nyc4a.org/ </a>  ";
	var infowindow4 = new google.maps.InfoWindow({
          content: contentString4
        });
	
	
	var contentString5 = "New York Center for Autism Charter School <br> Address: 433 E 100th St, New York, NY 10029 <br> Phone:(212) 860-2580 <br> <a href=' http://www.nycautismcharterschool.org/ ' target='_blank'> http://www.nycautismcharterschool.org/ </a> ";
	var infowindow5 = new google.maps.InfoWindow({
          content: contentString5
        });
	
	
	
	
	
	
	
	
	var marker= new google.maps.Marker({
		position: {lat:40.753862 , lng:  -73.932597}, 
		map: map, 
		title: contentString
	});	
	var marker1= new google.maps.Marker({
		position: {lat:40.672340 , lng:  -73.840518}, 
		map: map, 
		title:contentString1
	
	}); 
	var marker2= new google.maps.Marker({
		position: {lat:40.692507 , lng:  -73.986475}, 
		map: map, 
		title:contentString2
	
	}); 
	var marker3= new google.maps.Marker({
		position: {lat:40.747270 , lng:  -73.980065}, 
		map: map, 
		title:contentString3
	
	}); 
	var marker4= new google.maps.Marker({
		position: {lat:40.760959 , lng:  -73.974649}, 
		map: map, 
		title:contentString4
	
	}); 
	
	
	var marker5= new google.maps.Marker({
		position: {lat:40.785868 , lng: -73.940587 }, 
		map: map, 
		title:contentString5
	
	}); 
	
	
	
	
	
	
	
	/*infoWindow = new google.maps.InfoWindow; //static infoWindow for all your markers
google.maps.event.addDomListener(window, 'load', function()*/ 
	
	

	marker.addListener('click', function() {
          infowindow.open(map, marker);
		  infowindow1.close();
		  infowindow2.close();
		  infowindow3.close();
		  infowindow4.close();
		  infowindow5.close();
        });
	
	marker1.addListener('click', function() {
          infowindow1.open(map, marker1);
		  infowindow.close();
		  infowindow2.close();
		  infowindow3.close();
		  infowindow4.close();
		  infowindow5.close();
        });
	marker2.addListener('click', function() {
          infowindow2.open(map, marker2);
		  infowindow1.close();
		  infowindow.close();
		  infowindow3.close();
		  infowindow4.close();
		  infowindow5.close();
        });
	marker3.addListener('click', function() {
          infowindow3.open(map, marker3);
		  infowindow1.close();
		  infowindow2.close();
		  infowindow.close();
		  infowindow4.close();
		  infowindow5.close();
        });
	marker4.addListener('click', function() {
          infowindow4.open(map, marker4);
		  infowindow1.close();
		  infowindow2.close();
		  infowindow3.close();
		  infowindow.close();
		  infowindow5.close();
        });	
		
	marker5.addListener('click', function() {
          infowindow5.open(map, marker5);
		  infowindow1.close();
		  infowindow2.close();
		  infowindow3.close();
		  infowindow4.close();
		  infowindow.close();
        });			

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
	var answer = "footsteps";
	var useranswer = document.getElementById("text").value;
	if (useranswer.toLowerCase()==answer){
	document.getElementById("answer").innerHTML = "CORRECT";
	}
	else{ 
		answer_tries++;
		console.log(answer);
		if (answer_tries==3) {
			document.getElementById("answer").innerHTML = "YOU WERE WRONG THREE TIMES, THE ACTUAL ANSWER IS FOOTSTEPS";
			answer_tries = 0;
		} else {
			document.getElementById("answer").innerHTML = "try again";
		}
	}

}
