const createMap = {
    createUserMap : function(userLat, userLon) {
        const google = window.google;
        const userMap = new google.maps.Map(document.getElementById('user-map'), {
            zoom: 15,
            center: new google.maps.LatLng(userLon, userLat),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let userMarker;
        userMarker = new google.maps.Marker({
            position: new google.maps.LatLng( userLon, userLat ),
            map: userMap
        });
    },

    createMonumentMap : function(monumentLat, monumentLon, userLat, userLon) {
        const google = window.google;
        const userMap = new google.maps.Map(document.getElementById('user-map'), {
            zoom: 15,
            center: new google.maps.LatLng(monumentLon, monumentLat),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        let userMarker;
        userMarker = new google.maps.Marker({
            position: new google.maps.LatLng( userLon, userLat ),
            map: userMap
        });

        let monumentMarker;
        let monumentIcon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        monumentMarker = new google.maps.Marker({
            position: new google.maps.LatLng( parseFloat(monumentLon),parseFloat(monumentLat) ),
            map: userMap,
            icon: monumentIcon
        });
    }
}

export default createMap
