$(document).ready(function() {
        $('[data-sidenav]').sidenav();

        $(".closebtn").click(function() {
            $("nav").removeClass("show");
        });

        var scrolled = $(this).scrollTop();
        $(".section").filter(function() {
            return scrolled >= $(this).offset().top - 240
        }).addClass("in-view").trigger("classChange")

        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 800);
            }
        });

        $(".buttontween").on("click", function() {
            $(".sidenav-menu").removeClass('show-down');
        })
        $("#sidenav-toggle").on('click', function() {
            $('.sidenav-menu').each(function() {
                var list = $(this).find('li');
                TweenMax.staggerFromTo(list, 1, {
                    y: "-=50",
                    opacity: "0"
                }, {
                    y: "0",
                    opacity: "1"
                }, 0.2);
            })
        })


        var toggles = document.querySelectorAll(".c-hamburger");
        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        var shrinkHeader = 2;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.containerheader').addClass('shrink');
            } else {
                $('.containerheader').removeClass('shrink');
            }
        });

        $("#sidenav-toggle").on('click', function() {
            TweenMax.staggerFromTo('.social-sidebar-topright li a', 2, {
                x: "-=100",
                opacity: "0"
            }, {
                x: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('.credentials_nav p', 2, {
                x: "-=80",
                opacity: "0"
            }, {
                x: "0",
                opacity: "1"
            }, 0.4);
        })
        TweenMax.staggerFromTo('#sliderhead .text-det h2', 2, {
            y: "-=50",
            opacity: "0"
        }, {
            y: "0",
            opacity: "1"
        }, 0.9);
        TweenMax.staggerFromTo('#sliderhead .text-det h4', 3, {
            y: "-=50",
            opacity: "0"
        }, {
            y: "0",
            opacity: "1"
        }, 0.9);
        TweenMax.staggerFromTo('#sliderhead .booknw2', 3, {
            y: "+=50",
            opacity: "0"
        }, {
            y: "0",
            opacity: "1"
        }, 0.9);


        $(".section").on("classChange", function(e) {
            TweenMax.staggerFromTo('#aboutdailmore.section h4', 2, {
                y: "-=50",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#aboutdailmore.section h5', 2, {
                y: "-=100",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#aboutdailmore.section .dets', 2, {
                y: "-=40",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#aboutdailmore.section .btnenqr a', 2, {
                x: "-=50",
                opacity: "0"
            }, {
                x: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#services2.section h3', 2, {
                y: "-=50",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#services2.section .subttleserv', 2, {
                y: "-=100",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#services2.section .col-md-3', 2, {
                y: "-=40",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#coursesoffer.section .detcours2 h4', 2, {
                y: "-=50",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#coursesoffer.section .detcours2 .det', 2, {
                y: "-=50",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            TweenMax.staggerFromTo('#blogsec.section .col-md-4 ', 2, {
                y: "-=50",
                opacity: "0"
            }, {
                y: "0",
                opacity: "1"
            }, 0.4);
            $(this).off(e);
        });

        // Activate map
        settingInit();

    }) // End of document


function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
    });
}

// Initialize Google Map
// Custom Color / Template color: line 269 & line 293
function settingInit() {

    var feedSource, googleEmail, googlemapapi, adsTitle, mapLocation, websiteUrl, filterLocation, API_KEY, queryMap, map;

    $.ajax({
        url: '/data/site.json',
        success: function(data) {
			googleMapApi = data.sitedata[0].googlemapapi;
			map_address  = data.sitedata[0].company_address;
			adsTitle     = data.sitedata[0].sitename;
			websiteUrl 	 = data.sitedata[0].website;

            if (map_address.length == 0) {
                return map_address = "London, United Kingdom";
            } else {
                mapLocation = map_address;
                filterLocation = mapLocation.split(' ').join('+');
                API_KEY = googleMapApi;
                queryMap = "https://maps.googleapis.com/maps/api/geocode/json?address=" + filterLocation + "&key=" + API_KEY;

                // Query our Longitude & Latitude
                // More Option: https://developers.google.com/maps/documentation/geocoding/start
                $.getJSON(queryMap, function(data) {
                    var results = data.results[0].geometry.location,
                        loc_Lat = results.lat,
                        loc_Lng = results.lng,
                        infoC = '<div style="width: 350px; padding: 10px 25px 25px 25px;"><h5 style="color:rbga(0,0,0, .87)">' + adsTitle + '</h5>' + mapLocation + ' </br> <a href="' + websiteUrl + '" target="_blank" style="font-weight: bold; margin-top: 15px; text-decoration: none; display: inline-block; font-size: 15px; text-transform: uppercase; color: rgba(0,0,0,.87)">Visit Site</a></div>',
                        iconBase = 'https://maps.google.com/mapfiles/kml/shapes/',
                        infowindow = new google.maps.InfoWindow({
                            content: infoC
                        })
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: {
                            lat: loc_Lat,
                            lng: loc_Lng
                        },
                        zoom: 15,
                        styles: [{
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#f5f5f5"
                            }]
                        }, {
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        }, {
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#616161"
                            }]
                        }, {
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#f5f5f5"
                            }]
                        }, {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#bdbdbd"
                            }]
                        }, {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "visibility": "on"
                            }]
                        }, {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#eeeeee"
                            }]
                        }, {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#759aff"
                            }]
                        }, {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#e5e5e5"
                            }]
                        }, {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#9e9e9e"
                            }]
                        }, {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        }, {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#759aff"
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#939393"
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#616161"
                            }]
                        }, {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#c6d5ff"
                            }]
                        }, {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#e5e5e5"
                            }]
                        }, {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#eeeeee"
                            }]
                        }, {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#c9c9c9"
                            }]
                        }, {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#9e9e9e"
                            }]
                        }]
                    });
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(loc_Lat, loc_Lng),
                        map: map
                    });
                    marker.addListener('click', function() {
                        infowindow.open(map, marker)
                    })
                    map.addListener('click', function() {
                        window.setTimeout(function() {
                            map.panTo(marker.getPosition());
                            map.setZoom(15)
                        }, 6000)
                    })
                })
            }
        }, // Success
        error: function(e) {
            console.log("An error occured!", e);
        }
    })
}