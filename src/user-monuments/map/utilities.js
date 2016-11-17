const filteredMap = {
    createFilteredMap : function(list) {
        const google = window.google;
        const mapka = new google.maps.Map(document.getElementById('map-filtered'), {
            zoom: 16,
            center: new google.maps.LatLng(54.349634, 18.652271),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        })

        list.map(function(item) {
             new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(item.lon), parseFloat(item.lat)),
                map: mapka
            })
        })
    }
}

export default filteredMap