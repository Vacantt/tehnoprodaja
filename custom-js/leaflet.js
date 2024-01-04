var map = L.map('map').setView([44.80345, 20.39715], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

L.marker([44.80345, 20.39715]).addTo(map).bindPopup("Sedište Tehnoprodaja prodavnice:<br>Jurija Gagarina 31, Novi Beograd").openPopup();