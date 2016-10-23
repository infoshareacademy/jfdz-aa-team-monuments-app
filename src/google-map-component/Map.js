import React from 'react';
import './Map.css';
import jQuery from 'jquery';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

            jQuery.ajax({
                url: 'https://monuments-data.herokuapp.com/api/monuments',
                success: function(data) {
                    var _this = this;
                    this.locations = data;
                    var google = window.google;
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 14,
                        center: new google.maps.LatLng(54.354111, 18.650111),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });

                    var infowindow = new google.maps.InfoWindow();

                    var marker, i;

                    for (i = 0; i < this.locations.length; i++) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(parseFloat(this.locations[i].lon), parseFloat(this.locations[i].lat)),
                            map: map
                        });

                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                infowindow.setContent(_this.locations[i].name);
                                infowindow.setContent(_this.locations[i].description);
                                infowindow.open(map, marker);
                            }
                        })(marker, i));
                    }
                },
                dataType: 'json'
            });
    }

    render() {
        return (
            <div id="map" className="mapContainer">
            </div>
        )
    }
}