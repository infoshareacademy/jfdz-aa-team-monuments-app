const createMap = {
    createUserMap : function(userLat, userLon) {
        const google = window.google;
        const userMap = new google.maps.Map(document.getElementById('monument-map'), {
            zoom: 15,
            center: new google.maps.LatLng(userLon, userLat),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        });
        let userMarker;
        userMarker = new google.maps.Marker({
            position: new google.maps.LatLng( userLon, userLat ),
            map: userMap
        });
    },

    createMonumentMap : function(monumentLat, monumentLon, userLat, userLon) {
        const google = window.google;
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });

        const userMap = new google.maps.Map(document.getElementById('monument-map'), {
            center: new google.maps.LatLng(monumentLon, monumentLat),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        });

        let userMarker;
        userMarker = new google.maps.Marker({
            map: userMap,
            position: new google.maps.LatLng( userLat, userLon )
        });

        let monumentMarker;
        monumentMarker = new google.maps.Marker({
            map: userMap,
            position: new google.maps.LatLng( parseFloat(monumentLon),parseFloat(monumentLat) ),
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });

        directionsDisplay.setMap(userMap);
        let request = {
            origin: new google.maps.LatLng(userLat, userLon ),
            destination:new google.maps.LatLng(monumentLon, monumentLat),
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }
}

export default createMap