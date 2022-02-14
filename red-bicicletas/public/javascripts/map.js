var map = L.map('main_map').setView([-33.4694645,-70.6566241], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-33.4476718,-70.6447573]).addTo(map);
L.marker([-33.4450067,-70.646887]).addTo(map);
L.marker([-33.4456681,-70.650457]).addTo(map);