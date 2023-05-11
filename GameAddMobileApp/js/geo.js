/**
 * File Name: geo.js
 *
 * Revision History:
 *       Danial Takdehghan, 2023-04-15 : Created
 */

var lat;
var lng;

function showMap() {
    //initiliaze the platform object
    var platform = new H.service.Platform({
        'apikey': '7Mc869XIpmp9bFPnCZT633jbLZAY2UmC--tC5oigUqQ'
    });

    //obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    //instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
            zoom: 15,
            center: {
                lng,
                lat
            }
        });
    var icon = new H.map.Icon('img/mapLocation.png');
    var marker = new H.map.Marker({
        lat: lat,
        lng: lng
    }, {
        icon: icon
    });

    //add the marker to the map and center the map at the location of the marker:
    map.addObject(marker);
}


function showPositionAndMap() {

    try {
        if (navigator.geolocation != null) {
            let options = {
                enableHighAccuracy: true,
                timeout: 60000,
                maximumAge: 0
            }

            function onSuccess(position) {
                let coordinates = position.coords;
                lat = coordinates.latitude;
                lng = coordinates.longitude;
                console.log(`Latitude:${lat} Longitude:${lng}`);
                showMap();

            }

            function onError(error) {
                let msg = "";
                if (error) {
                    switch (error.code) {
                        case error.TIMEOUT:
                            msg = `TIMEOUT : ${error.message}`;
                            break;
                        case error.PERMISSION_DENIED:
                            msg = `PERMISSION DENIED : ${error.message}`;
                            break;
                        case error.POSITION_UNAVAILABLE:
                            msg = `POSITION UNAVAILABLE : ${error.message}`;
                            break;
                        default:
                            msg = `Unhandled message code : ${error.message}`;
                            break;
                    }
                    console.error(msg);
                }
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        }
        else {
            console.error("Geolocation not supported");
        }
    } catch (e) {
        console.error("exception in showPositionAndMap(): " + e)
    }
}
