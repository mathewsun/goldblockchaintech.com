/*********************
--------THEME JS------
*********************/

	var map;
    var locations = [
      ['<b>Belgium</b><br> Adolf Greinerstraat 14B-2660 Hoboken', 51.169689, 4.342030, '.belgium'],
      ['<b>Brazil</b><br>Av.Paulista, 1728 – Bela Vista, São Paulo - SP', -23.560550, -46.657160, '.brazil'],
      ['<b>Australia</b><br>PO Box 6297, East Perth, WA 6892', -31.958490, 115.871620, '.australia'],
      ['<b>Switzerland</b><br>HERCULIS GUARDIANS SA 30,ru 23 Juin, 2900 Porrentruy', 47.426660, 7.130850, '.switzerland'],
      ['<b>Chicago</b><br>Cboe Options Exchange 400 South LaSalle Street<br>Chicago, IL 60605 1.877.THE.', 41.876383, -87.632619, '.cbchicago'],
      ['<b>Hong Kong</b><br>Cboe Options Exchange<br>Cboe Hong Kong Limited 66/F<br>The Center 99 Queen’s Road Central', 22.284586, 114.154725, '.chkg'],
      ['<b>LONDON</b><br>10 Finsbury Square  London  EC2A 1AJ', 51.521236, -0.087475, '.london'],
      ['<b>SINGAPORE</b><br>7th Floor, MYP Centre 9<br>Battery Road  Singapore  049910', 1.285131, 103.852348, '.singapur'],
      ['<b>New York</b><br>NYMEX World Headquarters 300<br>Vesey Street New York,NY 10282', 40.714430, -74.016957, '.ny'],
      ['<b>Calgary</b><br>#1000, 888 - 3rd St. SW Bankers Hall,<br>West Tower Calgary, Alberta,<br>T2P 5C5, Canada', 51.050654,-114.066193
, '.calgary'],
      ['<b>Sao Paulo </b><br>Avenida Paulista, 1079 — 7° Andar<br>Sao Paulo, Brazil 01311-200', -23.564868,-46.652893, '.san-paulo'],
    ];

    function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			zoomControl: true,
		});
		map.setCenter({lat:locations[0][1], lng:locations[0][2]});
		var infowindow = new google.maps.InfoWindow({});

		var marker, i;

		for (i = 0; i < locations.length; i++) {

			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map: map
			});
		}
	}

	jQuery(document).ready(function($){

		$('.map_box_title h2').html(locations[0][0]);
		$('.btn_show_map').on("click", function(){
		  map.setCenter({
		    lat : locations[parseInt($(this).attr('data-mnum'))][1],
		    lng : locations[parseInt($(this).attr('data-mnum'))][2]
		  });
			$([document.documentElement, document.body]).animate({
			    scrollTop: $("#map_gugle").offset().top
			}, 500);
		  $('.active_m_btn').removeClass('active_m_btn');
		  $(this).addClass('active_m_btn');
		  $('.map_box_title h2').html(locations[parseInt($(this).attr('data-mnum'))][0]);
		});
		$('.acc_get_card label').append('<span class="checkmark"></span>');

	

	});
