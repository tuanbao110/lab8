function initMap() {
	// add your code here
    var ucsd_ltlng = {lat:32.878810, lng:-117.235910};

    var map = new google.maps.Map(document.getElementById('map'),
        {center: ucsd_ltlng, zoom: 18});

    var marker = new google.maps.Marker(
        {position: ucsd_ltlng, map:map, label: "Student Services Center"});
}
