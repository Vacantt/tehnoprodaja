var map = L.map('map').setView([44.804, 20.397], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

L.marker([44.804, 20.397]).addTo(map);
L.popup().setLatLng([44.804, 20.397]).setContent("Tehnoprodaja prodavnica").openOn(map);