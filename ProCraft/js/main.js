$("#main_slick").slick({
    autoplay: true,
    infinite: false,
    dots: false,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800
}); 
// var isMobile = false; //initiate as false

// // device detection
// if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
//     || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;


// var _window = $(window),
//     window_height = _window.height();

// if (isMobile) {
//     $("body").addClass("mobile");
// }
// console.log($(window));
// console.log($(document));


// /* Index slider begin */

// /* Index slider end */


// /* Double carousel begin */

// if ($(".double_carousel").length) {
//     if (_window.width() > $(".double_carousel figure").length * 150) {
//         $(".double_carousel").addClass("one_line");
//     } else {
//         if ($(".double_carousel figure").length & 1) {
//             $(".double_carousel figure").eq(($(".double_carousel figure").length-1)/2).clone().appendTo(".double_carousel");
//             console.log("nechet");
//         }

//     }
//     $carousel = $(".double_carousel").flickity({
//         // options
//         groupCells: true,
//         lazyLoad: 2,
//         wrapAround: true

//     });
// }

// /* Double carousel end */


// /* Fixed nav begin */
// var top_pos = (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop) || 0;
// if (top_pos > $(".inner_topik").height() - 120 || top_pos > $(".index_bg").height() - 120) {
//     $("header#header").addClass("show_bg");
// } else {
//     $("header#header").removeClass("show_bg");
// }

// _window.scroll(function () {
//     var top_pos = (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop) || 0;
//     if (top_pos > $(".inner_topik").height() - 120 || top_pos > $(".index_bg").height() - 120) {
//         $("header#header").addClass("show_bg");
//     } else {
//         $("header#header").removeClass("show_bg");
//     }
// });


// // var top_pos = document.documentElement.scrollTop || document.body.scrollTop;
// // if (top_pos > $(".inner_topik").height() - 120 || top_pos > $(".index_bg").height() - 120) {
// //     $("header#header").addClass("show_bg")
// // } else {
// //     $("header#header").removeClass("show_bg")
// // }

// // _window.scroll(function () {
// //     var top_pos = document.documentElement.scrollTop || document.body.scrollTop;
// //     if (top_pos > $(".inner_topik").height() - 120 || top_pos > $(".index_bg").height() - 120) {
// //         $("header#header").addClass("show_bg")
// //     } else {
// //         $("header#header").removeClass("show_bg")
// //     }
// // });

// /* Fixed nav end */


// /* Search modal begin */
// $(document).on("click", ".show_search", function (e) {
//     $(".purpless_bg").addClass("show_me");
//     setTimeout(function () {
//         $(".modal_search").addClass("show_me");
//     }, 150);
//     return false;
// });

// $(document).on("click", ".modal_search a.close", function (e) {
//     $(".modal_search").removeClass("show_me");
//     setTimeout(function () {
//         $(".purpless_bg").removeClass("show_me");
//     }, 150);
//     return false;
// });

// $(document).keydown(function (e) {
//     if (e.keyCode == 27) {
//         $(".modal_search a.close").click();
//     }
// });
// /* Search modal end */

// /* Quick search emulation begin */
// /*
// $(document).on("keyup", ".search_form .input input", function (e) {
//     if ($(".search_form .input input").val() == "") {
//         $(".search_form").removeClass("show_result");

//     } else {
//         $(".search_form").addClass("show_result");
//     }
// });
// */
// $(function () {
//     $(".search_form .input input").autocomplete({
//         source: function (request, response) {
//             $.ajax({
//                 url: $domain + 'search?ajax=true',
//                 data: {q: request.term},
//                 dataType: "json",
//                 success: response,
//                 error: function () {
//                     response([]);
//                 }
//             });
//         },
//         select: function (event, ui) {
//             document.location.href = $domain + ui.item.url;
//         },
//         appendTo: ".quick_result"
//     });
// });

// /* Quick search emulation end */


// /* Map begin */
// var map2, markers;

// function gmap() {
//     var latitude = $('#simple_map').attr('data-latitude');
//     var longitude = $('#simple_map').attr('data-longitude');

//     map2 = new GMaps({
//         el: '#simple_map',
//         zoom: 10,
//         lat: latitude,
//         lng: longitude,
//         mapTypeControl: false,
//         //scrollwheel: false,
//         panControl: false,
//         scaleControl: false,
//         streetViewControl: false,
//         zoomControl: true/*,
//          click: function(e) {
//          console.log(e);
//          }*/
//     });
//     markers = [];//some array

//     $.each(map_json_data, function (i, v) {
//         $marker = map2.addMarker({
//             lat: v.lat,
//             lng: v.lng,
//             title: v.name,
//             /*infoWindow: {
//                 content: '<div style="overflow:hidden; max-width:150px;text-align:center;">' + v.name + '</div>'
//             },*/
//             icon:  '/ProCruft/images/label.png',
//             click: function (e) {
//                 map2.setCenter(e.position.lat(), e.position.lng());
//             }
//         });
//         markers.push($marker);
//     });

//     if (markers.length == 1) {
//         map2.setCenter(markers[0].position.lat(), markers[0].position.lng());
//     } else {
//         map2.fitZoom();
//     }

//     $("#show_big_map_form").submit(function (e) {
//         e.preventDefault();
//         map2.removeMarkers();
//         map2.cleanRoute();


//         $.each(map_json_data, function (i, v) {
//             $marker = map2.addMarker({
//                 lat: v.lat,
//                 lng: v.lng,
//                 title: v.name,
//                 icon: $domain + 'images/label.png'
//             });
//         });

//         GMaps.geocode({
//             address: $('#show_big_map_type_adress').val().trim(),
//             callback: function (results, status) {
//                 if (status == 'OK') {
//                     //console.log(results[0].formatted_address);
//                     var latlng = results[0].geometry.location;
//                     map2.addMarker({
//                         lat: latlng.lat(),
//                         lng: latlng.lng(),
//                         draggable: true,
//                         title: results[0].formatted_address,
//                         infoWindow: {
//                             content: '<div style="overflow:hidden; max-width:150px;text-align:center;">' + results[0].formatted_address + '</div>'
//                         },
//                         //icon: './images/man.png?aaa'
//                     });
//                     map2.fitZoom();

//                     $.each(map_json_data, function (i, v) {
//                         map2.drawRoute({
//                             origin: [v.lat, v.lng],
//                             destination: [latlng.lat(), latlng.lng()],
//                             travelMode: 'driving',
//                             strokeColor: '#131540',
//                             strokeOpacity: 0.6,
//                             strokeWeight: 4
//                         });
//                     });

//                 }
//             }
//         });
//     });



//     /*var myLatlng = new google.maps.LatLng(latitude, longitude);
//     var myOptions = {
//         zoom: 13,
//         center: myLatlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         scrollwheel: false,
//     }

//     map = new google.maps.Map(document.getElementById("simple_map"), myOptions);

//     markers = [];//some array

//     $.each(map_json_data, function (i, v) {
//         var position_i = new google.maps.LatLng(v.lat, v.lng);
//         new google.maps.Marker({
//             position: position_i,
//             map: map,
//             title: v.name,
//             icon: $domain + 'images/label.png'
//         });

//         var marker = new google.maps.Marker({
//             position: position_i,
//             map: map,
//             icon: $domain + 'images/label.png'
//         });

//         var contentString = '<div id="content"><h3><strong style="font-weight: bold; font-size: 14px;">'+v.name+'</strong></h3><br>'+
//         '<img src="'+v.img+'" alt="" style="float: left; margin: 0 10px 10px 0;" />'+
//         '<p style="margin: 0 0 10px;">'+v.address+' </p>'+
//         '<p style="margin: 0 0 10px;">'+v.working_time+' </p>'+
//         '<p style="margin: 0 0 10px;">'+v.phone+' </p>';

//         var infowindow = new google.maps.InfoWindow({
//             content: contentString
//         });

//         marker.addListener('click', function() {
//             infowindow.open(map, marker);
//         });
//         markers.push(marker);
//     });

//     var bounds = new google.maps.LatLngBounds();
//     for (var i = 0; i < markers.length; i++) {
//         bounds.extend(markers[i].getPosition());
//     }
//     if (markers.length == 1) {
//         map.setCenter(markers[0].getPosition());
//     } else {
//         map.fitBounds(bounds);
//     }*/
// }

// if ($("#simple_map").length > 0) {
//     gmap();
// }

// /* Map end */


// /* Resize begin */
// if (isMobile) {
//     _lite_margin = 10;
//     _lite_class = "mobile";
// } else {
//     _lite_margin = 250;
//     _lite_class = "";
// }

// function super_resize(imageA) {
//     var window_width = _window.width(),
//         window_height = _window.height(),
//         aspect_ratio = window_width / window_height;
//     image_width = imageA[0].width,
//         image_height = imageA[0].height,
//         image_ratio = image_width / image_height;


//     if (image_width > window_width && image_height > window_height) {
//         if (aspect_ratio > image_ratio) {
//             image_height = window_height - _lite_margin;
//             image_width = image_height * image_ratio;
//         } else {
//             image_width = window_width - _lite_margin;
//             image_height = image_width / image_ratio;
//         }
//     } else {
//         if (image_height < window_height && image_width > window_width) {
//             image_width = window_width - _lite_margin;
//             image_height = image_width / image_ratio - 1;
//         }
//         if (image_height > window_height - _lite_margin && image_width < window_width) {
//             image_height = window_height - _lite_margin;
//             image_width = image_height * image_ratio;
//         }
//     }

//     $(".e_light_zoom").css("width", image_width + "px").css("height", image_height + "px").css("margin-left", (-(image_width) / 2) + "px").css("margin-top", (-(image_height) / 2) + "px");

// }

// /* Resize end */


// /* Run light begin */

// run_light = function (_this, _this_index, image_url, _this_top, _this_left, _this_width, _this_height, imageA, hide_arrows) {
//     console.log("Index:" + _this_index + ", Src:" + image_url + ", Position top:" + _this_top + ", Position left:" + _this_left);

//     _this.find("img").addClass("light_active");

//     $("body").append("<div class='darkness'></div><div class='e_light_zoom preload " + _lite_class + "' style='top: " + _this_top + "px; left: " + _this_left + "px; width: " + _this_width + "px; height: " + _this_height + "px;'><div class='image'><img src='" + image_url + "' alt='' draggable='false' /></div><a href='#' class='close'></a><a href='#' class='prev'></a><a href='#' class='next'></a></div>");

//     if (hide_arrows) {
//         $(".e_light_zoom a.next, .e_light_zoom a.prev").remove();
//     }

//     setTimeout(function () {
//         $(".e_light_zoom").addClass("first_show");
//     }, 1);

//     $(".e_light_zoom").imagesLoaded(function () {

//         $(".e_light_zoom").removeClass("preload");

//         setTimeout(function () {
//             super_resize(imageA);
//             $(".e_light_zoom").addClass("second_show");
//         }, 300);

//         setTimeout(function () {
//             $(".e_light_zoom").addClass("last_show");
//             $(".darkness").addClass("show_me");
//         }, 600);
//     });

// }

// /* Run light end */


// /* Close light begin */

// function close_light() {
//     var active_img = $(".e_universal img.light_active"),
//         top_pos = document.documentElement.scrollTop || document.body.scrollTop,
//         _image_width = active_img.width(),
//         _image_height = active_img.height(),
//         _image_top = active_img.offset().top - top_pos,
//         _image_left = active_img.offset().left;

//     $(".e_light_zoom").removeClass("last_show");
//     $(".darkness").removeClass("show_me");

//     setTimeout(function () {
//         $(".e_light_zoom").removeClass("second_show");
//         $(".e_light_zoom").removeAttr("style");
//         //$(".e_light_zoom").css("width", _image_width+"px").css("height", _image_height+"px").css("top", _image_top+"px").css("left", _image_left+"px");
//     }, 300);

//     setTimeout(function () {
//         $(".e_light_zoom").removeClass("first_show");
//     }, 600);

//     setTimeout(function () {
//         $(".e_light_zoom, .darkness").remove();
//         $(".light_active").removeClass("light_active");
//     }, 900);

// }

// /* Close light end */

// /* Arrows light begin */

// run_next = function (_next_src, _this_index) {

//     $(".e_light_zoom").addClass("unactive");
//     $(".e_light_zoom").addClass("preload");


//     setTimeout(function () {
//         $(".e_light_zoom").removeClass("unactive");
//     }, 1200);

//     $(".prev, .next").removeClass("hide_me");


//     $(".e_light_zoom .image").append("<img src='" + _next_src + "' alt='' style='opacity: 0' draggable='false' />");
//     $(".e_light_zoom .image").imagesLoaded(function () {

//         $(".e_light_zoom .image img:first-child, .e_light_zoom .image iframe:first-child").css("opacity", "0");

//         var imageA = $("<img>").attr("src", _next_src);

//         setTimeout(function () {
//             $(".e_light_zoom").removeClass("preload");
//             super_resize(imageA);
//         }, 300);

//         setTimeout(function () {
//             $(".e_light_zoom .image img:last-child").removeAttr("style");
//             $(".e_light_zoom .image img:first-child, .e_light_zoom .image iframe:first-child").remove();
//         }, 600);

//     });

// }


// $(document).on("click", ".e_light_zoom a.next, .e_light_zoom a.prev", function () {
//     if ($(".e_light_zoom").hasClass("unactive")) {
//     } else {
//         var _this = $(this),
//             gallery_length = $(".e_universal figure").length;
//         if (_this.hasClass("prev")) {

//             var _this_index = $(".light_active").parent().parent().index();
//             _this_index--;
//             if (_this_index < 0) {
//                 _this_index = gallery_length - 1;
//             }
//             console.log(_this_index)

//             $(".light_active").removeClass("light_active");
//             $(".e_universal figure").eq(_this_index).find("img").addClass("light_active");
//             var _next_src = $(".light_active").parent().attr("href");

//         } else {

//             var _this_index = $(".light_active").parent().parent().index();
//             _this_index++;
//             if (_this_index > gallery_length - 1) {
//                 _this_index = 0;
//             }
//             console.log(_this_index)


//             $(".light_active").removeClass("light_active");
//             $(".e_universal figure").eq(_this_index).find("img").addClass("light_active");
//             var _next_src = $(".light_active").parent().attr("href");
//         }

//         run_next(_next_src, _this_index);
//     }
//     return false;
// });

// /* Arrows light end */

// /* E-light light begin */

// $(document).on("click", ".e_universal a, a.e_universal", function () {
//     var _this = $(this),
//         _this_index = _this.parent().index(),
//         top_pos = document.documentElement.scrollTop || document.body.scrollTop,
//         image_url = _this.attr("href"),
//         _this_top = _this.find("img").offset().top - top_pos,
//         _this_left = _this.find("img").offset().left,
//         _this_width = _this.find("img").width(),
//         _this_height = _this.find("img").height(),
//         imageA = $("<img>").attr("src", $(this).prop('href')),
//         hide_arrows = false;

//     if (_this.hasClass("e_universal")) {
//         var hide_arrows = true;
//     }

//     run_light(_this, _this_index, image_url, _this_top, _this_left, _this_width, _this_height, imageA, hide_arrows);


//     return false;
// });

// $(document).on("click", ".e_light_zoom a.close", function () {
//     close_light();
//     return false;
// });

// /* E-light light end */


// // ESCAPE key pressed
// $(document).keydown(function (e) {
//     if (e.keyCode == 27) {
//         $(".e_light_zoom a.close").click();
//     }
//     if (e.keyCode == 37) {
//         $(".e_light_zoom a.prev").click();
//     }
//     if (e.keyCode == 39) {
//         $(".e_light_zoom a.next").click();
//     }
// });

// $(document).on("click", ".darkness", function () {
//     $("a.close").click();
// });


// $(function () {
//     // Bind the swipeleftHandler callback function to the swipe event on div.box
//     $("body").on("swipeleft", swipeleftHandler);
//     $("body").on("swiperight", swiperightHandler);

//     // Callback function references the event target and adds the 'swipeleft' class to it
//     function swipeleftHandler(event) {
//         if ($(".e_light_zoom").length) {
//             $(".e_light_zoom a.next").click()
//         }
//     }

//     function swiperightHandler(event) {
//         if ($(".e_light_zoom").length) {
//             $(".e_light_zoom a.prev").click()
//         }
//     }
// });

// _window.resize(function () {
//     var _next_src = $(".light_active").parent().attr("href");
//     var imageA = $("<img>").attr("src", _next_src);
//     super_resize(imageA)
// });


// /* Mobile toggler begin */
// $(document).on('click', 'a.toggler', function (e) {
//     var _this = $(this);
//     if (_this.hasClass("animated")) {
//     } else {
//         if (_this.hasClass("active")) {
//             _this.removeClass("active_last");
//             $("body").removeClass("overflow");
//             $("aside#aside_nav").removeClass("show_me");
//             setTimeout(function () {
//                 _this.removeClass("active_second");
//             }, 300);
//             setTimeout(function () {
//                 _this.removeClass("active");
//             }, 600);
//         } else {
//             _this.addClass("active");
//             $("body").addClass("overflow");
//             $("aside#aside_nav").addClass("show_me");
//             setTimeout(function () {
//                 _this.addClass("active_second");
//             }, 300);
//             setTimeout(function () {
//                 _this.addClass("active_last");
//             }, 600);
//         }
//         _this.addClass("animated");
//         setTimeout(function () {
//             _this.removeClass("animated");
//         }, 900);
//     }
//     return false;
// });
// /* Mobile toggler end */

// /* Mobile nav begin */

// $(document).on('click', 'nav.mobile_nav ul li a.submenu', function (e) {
//     var _this = $(this);
//     _this.toggleClass("active");
//     _this.siblings("ul").animate({"height": 'toggle'}, 350, "easeInOutExpo")
//     return false;
// });
// /* Mobile nav end */