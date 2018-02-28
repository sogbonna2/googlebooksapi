//WEEK 14 VIDEO NOTES 
// VIDEO 2
function initialize(){
	var mapProp = {
		center: new google.maps.LatLng(37.788890, -122.398104),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
}
google.maps.event.addDomListener(window, 'load', initialize) 

//VIDEO 3
// function bookSearch(){
// 		var search = document.getElementById('search').value
// 		document.getElementById('results').innerHTML = ""
// 		console.log(search)

// 		$.ajax({
// 			url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
// 			dataType: "json",

// 			success: function(data) {
// 				for(i = 0, i < data.items.length; i==){
// 					results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
// 				}
// 			},

// 			type: 'GET'
// 		});
		
// }

// document.getElementById('button').addEventListener('click', bookSearch, false)

// VIDEO 4 NOTES
//JSON-javaScript object notation





// Week 14 Group Discussion Questions
// 1. What does API stand for and why are APIs useful to developers?
// An application program interface---code from a third party source---lets you utilize a fully working application on your website. 


// 2. When choosing an API, what is one of the most important things to look for?
// Documentation---has to be easy to use, meaning a good API, so that you can understnad how to use the API


// 3. What is the method we use when making an API request?
// Its a GET request--- it makes a request to a server


// 4. What is the function we run when we get the data we requested from an API?
// $Ajax---asynchronous javascript and xml---so it doesnt interupt the user experience


// 5. What is the prefered datatype that is returned from an API?
// JSON data



// 6. What does JSON stand for and how do we access the properties in JSON Objects?
// javascript object notation



// WEEK 14 EXERCISE
// In HTML and CSS: Create an element to display the map. Make sure to your element has some width and height so there is 'space' for the map.
// <div id="googleMap" style="width:100%;height:400px"></div>


// In HTML: Add a script tag to include the Google Maps API.
// <script src="http://maps.googleapis.com/maps/api/js"></script>


// In JS: Create a function to add the map, with one variable for map properties. Update the location to your favorite place on Earth.
function myMap() {
	var mapProp= {
	    center:new google.maps.LatLng(51.508742,-0.120850),
	    zoom:5,
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}



// // In JS: Using the google.maps.event.addDomListener method, select the window and when it loads, run the function to add the map.
google.maps.event.addDomListener(window, 'load', initialize); 


// // In JS: Add the map to the screen using the google.maps.Map method.
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);



// // In JS: Create a marker and set the position to mapProp.center. Add the marker to the map using the Google setMap method.
var marker = new google.maps.Marker({position: mapProp.center});

marker.setMap(map);


// // In JS: Using the google.maps.event.addListener method, add an event so when you click on the marker it zooms in on the map marker.
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
  });


// // In JS: Disable the default controls on the map.
var mapOptions = {disableDefaultUI: true}




