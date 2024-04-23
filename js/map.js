function initMap() {
    var mapOptions = {
        center: { lat: -36.7167, lng: -73.1167 },
        zoom: 8
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: { lat: -36.7167, lng: -73.1167 },
        map: map,
        title: 'Talcahuano',
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' // URL de la imagen del marcador rojo
    });
}
