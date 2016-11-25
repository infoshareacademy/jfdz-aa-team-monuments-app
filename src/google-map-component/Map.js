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
                        zoom: 16,
                        center: new google.maps.LatLng(54.351372, 18.653138),
                        scrollwheel: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });

                    var infowindow = new google.maps.InfoWindow({maxWidth:300});

                    var marker, i;

                    for (i = 0; i < this.locations.length; i++) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(parseFloat(this.locations[i].lon), parseFloat(this.locations[i].lat)),
                            map: map
                        });

                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                infowindow.setContent(`
<h3>${_this.locations[i].name}</h3>
<img class="map-img" src="${_this.locations[i].imageUrl}" />
`);
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
            <div>
                <div className="home-page-intro">
                    <h3>Odkryj zabytki Gdańska</h3>
                    <p>
                        Gdańskie Stare Miasto to wymarzone miejsce na spokojny spacer szlakiem zabytków.<br/>
                       <strong>Pokażemy Ci te najciekawsze, bez których Twoja wyprawa nie może się odbyć.</strong>
                    </p>
                </div>
                <div id="map" className="mapContainer"></div>
            </div>
        )
    }
}