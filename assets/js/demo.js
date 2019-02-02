type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocumentationCharts: function() {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);
    },

    initDashboardPageCharts: function() {

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);



        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['5:00', '6:00', '7:00', '8:00', '16:00', '17:00', '18:00'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);


        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
            }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function(value) {
                        return value[0];
                    }
                }
            }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);

    },

    initGoogleMaps: function() {
        var myLatlng = new google.maps.LatLng(-23.540095, -46.192836);
		
        var mapOptions = {
            zoom: 10,
            center: myLatlng,
			mapTypeId: 'hybrid'
        }
		
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			
		function getPoints()
		{
			var myData = [
				new google.maps.LatLng(-23.5486844, -46.2278479),
				new google.maps.LatLng(-23.5497844, -46.2378489),
				new google.maps.LatLng(-23.5479844, -46.2479499),
				new google.maps.LatLng(-23.5452844, -46.2580499),
				new google.maps.LatLng(-23.5465844, -46.2680509),
				new google.maps.LatLng(-23.5422844, -46.2780608),
				new google.maps.LatLng(-23.5414844, -46.2880794),
				new google.maps.LatLng(-23.5413544, -46.2998549),
				new google.maps.LatLng(-23.5412244, -46.3008539),
				new google.maps.LatLng(-23.5411444, -46.3177509),
				new google.maps.LatLng(-23.5410444, -46.3274549),
				new google.maps.LatLng(-23.5409544, -46.3372519),
				new google.maps.LatLng(-23.5408644, -46.3468489),
				new google.maps.LatLng(-23.5407744, -46.3578499),
				new google.maps.LatLng(-23.5406844, -46.3478509),
				new google.maps.LatLng(-23.5405944, -46.3378519),
				new google.maps.LatLng(-23.5404844, -46.3278529),
				new google.maps.LatLng(-23.5403844, -46.3178539),
				new google.maps.LatLng(-23.5180844, -46.2078549),
				new google.maps.LatLng(-23.5179844, -46.2079559),
				new google.maps.LatLng(-23.5178844, -46.2080569),
				new google.maps.LatLng(-23.5177844, -46.2081579),
				new google.maps.LatLng(-23.5176844, -46.2076589),
				new google.maps.LatLng(-23.5175844, -46.2075599),
				new google.maps.LatLng(-23.5174844, -46.2074609),
				new google.maps.LatLng(-23.5173844, -46.2073608),
				new google.maps.LatLng(-23.5172844, -46.2072607),
				new google.maps.LatLng(-23.5171744, -46.2071606),
				new google.maps.LatLng(-23.5470640, -46.2070605),
				new google.maps.LatLng(-23.5169690, -46.2069604),
				new google.maps.LatLng(-23.5486740, -46.2068603),
				new google.maps.LatLng(-23.5396790, -46.2067602),
				new google.maps.LatLng(-23.5395830, -46.2067652),
				new google.maps.LatLng(-23.5394880, -46.2068702),
				new google.maps.LatLng(-23.5393920, -46.2067752),
				new google.maps.LatLng(-23.5392980, -46.2066802),
				new google.maps.LatLng(-23.5393030, -46.2065852),
				new google.maps.LatLng(-23.5393080, -46.2064902),
				new google.maps.LatLng(-23.5393130, -46.2063952),
				new google.maps.LatLng(-23.5393180, -46.2064002),
				new google.maps.LatLng(-23.5393230, -46.2064052),
				new google.maps.LatLng(-23.5483280, -46.2064102),
				new google.maps.LatLng(-23.5483330, -46.2064152),
				new google.maps.LatLng(-23.5483380, -46.2064202),
				new google.maps.LatLng(-23.5483430, -46.2064252),
				new google.maps.LatLng(-23.5486844, -46.2064302),
				new google.maps.LatLng(-23.5486844, -46.2064352),
				new google.maps.LatLng(-23.541199, -46.178400),
				new google.maps.LatLng(-23.541199, -46.178450),
				new google.maps.LatLng(-23.541199, -46.178500),
				new google.maps.LatLng(-23.541199, -46.178550),
				new google.maps.LatLng(-23.541199, -46.178600),
				new google.maps.LatLng(-23.541199, -46.178650),
				new google.maps.LatLng(-23.541199, -46.178700),
				new google.maps.LatLng(-23.541199, -46.178750),
				new google.maps.LatLng(-23.541199, -46.178800),
				new google.maps.LatLng(-23.541199, -46.178850),
				new google.maps.LatLng(-23.541199, -46.178900),
				new google.maps.LatLng(-23.541199, -46.178950),
				new google.maps.LatLng(-23.535265, -46.179000),
				new google.maps.LatLng(-23.535265, -46.179050),
				new google.maps.LatLng(-23.535250, -46.177019),
				new google.maps.LatLng(-23.535300, -46.177019),
				new google.maps.LatLng(-23.535350, -46.177019),
				new google.maps.LatLng(-23.535400, -46.177019),
				new google.maps.LatLng(-23.535450, -46.177019),
				new google.maps.LatLng(-23.534500, -46.177368),
				new google.maps.LatLng(-23.534550, -46.177843),
				new google.maps.LatLng(-23.534600, -46.177843),
				new google.maps.LatLng(-23.534650, -46.177843),
				new google.maps.LatLng(-23.534700, -46.177843),
				new google.maps.LatLng(-23.534750, -46.177843),
				new google.maps.LatLng(-23.534800, -46.177843),
				new google.maps.LatLng(-23.534850, -46.177843),
				new google.maps.LatLng(-23.534255, -46.177843),
				new google.maps.LatLng(-23.534255, -46.177843),
				new google.maps.LatLng(-23.534255, -46.177843),
				new google.maps.LatLng(-23.534255, -46.177843),
				new google.maps.LatLng(-23.533876, -46.178390),
				new google.maps.LatLng(-23.533876, -46.178390),
				new google.maps.LatLng(-23.533876, -46.178390),
				new google.maps.LatLng(-23.533876, -46.178390),
				new google.maps.LatLng(-23.533876, -46.178390),
				new google.maps.LatLng(-23.533876, -46.178390),
				new google.maps.LatLng(-23.533876, -46.178390),
				new google.maps.LatLng(-23.592536, -46.171323),
				new google.maps.LatLng(-23.592536, -46.171323),
				new google.maps.LatLng(-23.592536, -46.171323),
				new google.maps.LatLng(-23.592536, -46.171323),
				new google.maps.LatLng(-23.592536, -46.171323),
				new google.maps.LatLng(-23.565433, -46.218503),
				new google.maps.LatLng(-23.565433, -46.218503),
				new google.maps.LatLng(-23.565433, -46.218503),
				new google.maps.LatLng(-23.565433, -46.218503),
				new google.maps.LatLng(-23.565433, -46.218503),
				new google.maps.LatLng(-23.549289, -46.204646),
				new google.maps.LatLng(-23.549289, -46.204646),
				new google.maps.LatLng(-23.549289, -46.204646),
				new google.maps.LatLng(-23.545055, -46.208110),
				new google.maps.LatLng(-23.545055, -46.208110),
				new google.maps.LatLng(-23.545055, -46.208110),
				new google.maps.LatLng(-23.540556, -46.203492),
				new google.maps.LatLng(-23.540556, -46.203492),
				new google.maps.LatLng(-23.540556, -46.203492),
				new google.maps.LatLng(-23.540556, -46.203492),
				new google.maps.LatLng(-23.528811, -46.205667),
				new google.maps.LatLng(-23.528811, -46.205667),
				new google.maps.LatLng(-23.528811, -46.205667),
				new google.maps.LatLng(-23.531293, -46.214075),
				new google.maps.LatLng(-23.531293, -46.214075),
				new google.maps.LatLng(-23.531293, -46.214075),
				new google.maps.LatLng(-23.542148, -46.234893),
				new google.maps.LatLng(-23.542148, -46.234893),
				new google.maps.LatLng(-23.544019, -46.245507),
				new google.maps.LatLng(-23.544019, -46.245507),
				new google.maps.LatLng(-23.505306, -46.192633),
				new google.maps.LatLng(-23.505306, -46.192633),
				new google.maps.LatLng(-23.505070, -46.191346),
				new google.maps.LatLng(-23.505070, -46.191346),
				new google.maps.LatLng(-23.505070, -46.191346),
				new google.maps.LatLng(-23.503338, -46.190660),
				new google.maps.LatLng(-23.503338, -46.190660),
				new google.maps.LatLng(-23.503338, -46.190660),
				new google.maps.LatLng(-23.503260, -46.192891),
				new google.maps.LatLng(-23.503260, -46.192891),
				new google.maps.LatLng(-23.503260, -46.192891),
				new google.maps.LatLng(-23.514042, -46.194521),
				new google.maps.LatLng(-23.514042, -46.194521),
				new google.maps.LatLng(-23.514908, -46.195809),
				new google.maps.LatLng(-23.514908, -46.195809),
				new google.maps.LatLng(-23.641127, -46.122166),
				new google.maps.LatLng(-23.641127, -46.122166),
				new google.maps.LatLng(-23.648986, -46.116324),
				new google.maps.LatLng(-23.648986, -46.116324),
				new google.maps.LatLng(-23.648986, -46.116324),
				new google.maps.LatLng(-23.614720, -46.143123),
				new google.maps.LatLng(-23.614720, -46.143123),
				new google.maps.LatLng(-23.614720, -46.143123),
				new google.maps.LatLng(-23.614720, -46.143123),
				new google.maps.LatLng(-23.533884, -46.190692),
				new google.maps.LatLng(-23.533884, -46.190692),
				new google.maps.LatLng(-23.533550, -46.189782),
				new google.maps.LatLng(-23.533550, -46.189782),
				new google.maps.LatLng(-23.532437, -46.188325),
				new google.maps.LatLng(-23.532437, -46.188325),
				new google.maps.LatLng(-23.532437, -46.188325),
				new google.maps.LatLng(-23.531436, -46.189175),
				new google.maps.LatLng(-23.531436, -46.189175),
				new google.maps.LatLng(-23.530434, -46.190571),
				new google.maps.LatLng(-23.530434, -46.190571),
				new google.maps.LatLng(-23.526095, -46.208439),
				new google.maps.LatLng(-23.526095, -46.208439),
				new google.maps.LatLng(-23.528478, -46.209016),
				new google.maps.LatLng(-23.528478, -46.209016)
			];
			
			for (var p = 0; p < 1500; p++) 
			{
				var rLatD = Math.floor(Math.random() * 3000);
				var rLonD = Math.floor(Math.random() * 3000);
				
				myData.push(
					new google.maps.LatLng(
						(-23.625408 + (rLatD / 15000)), 
						(-46.325724 + (rLonD / 15000))
					)
				);
			}
			
			return myData;
		}
		
        var heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
    },
	
	initGoogleMapsLive: function() 
	{
		var startPos = [-23.560882,-46.2151829];
		var startPos2 = [-23.6284968,-46.3026949];
		
        var myLatlng = new google.maps.LatLng(startPos[0], startPos[1]);
		
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
			mapTypeId: 'roadmap'
        }
		
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

		var speed = 50; // km/h

		var delay = 100;

		function animateMarker(marker, coords, km_h, add)
		{
			var target = 0;
			
			var km_h = km_h || 50;
			
			coords.push([startPos2[0], startPos2[1]]);
			
			function goToPoint()
			{
				var lat = marker.position.lat();
				var lng = marker.position.lng();
				var step = (km_h * 1000 * delay) / 3600000; // in meters
				
				var dest = new google.maps.LatLng(
				coords[target][0] + add, coords[target][1] + add);
				
				var distance =
				google.maps.geometry.spherical.computeDistanceBetween(dest, marker.position);
				
				var numStep = distance / step;
				var i = 0;
				var deltaLat = ((coords[target][0] + add) - lat) / numStep;
				var deltaLng = ((coords[target][1] + add) - lng) / numStep;
				
				function moveMarker()
				{
					lat += deltaLat;
					lng += deltaLng;
					i += step;
					
					if (i < distance)
					{
						marker.setPosition(new google.maps.LatLng(lat, lng));
						setTimeout(moveMarker, delay);
					}
					else
					{   marker.setPosition(dest);
						target++;
						if (target == coords.length){ target = 0; }
						
						setTimeout(goToPoint, delay);
					}
				}
				
				moveMarker();
			}
			
			goToPoint();
		}

		for(var i = 0; i <= 120; i++)
		{
			var myData = new Array();
			var rLatD = 0;
			var rLonD = 0;
			
			for (var p = 0; p < 5; p++) 
			{
				var rLatD = Math.floor(Math.random() * 3000);
				var rLonD = Math.floor(Math.random() * 3000);
				
				myData.push([(startPos2[0] + (rLatD / 20000)), (startPos2[1] + (rLonD / 20000))]);
			}
	
			var velMedia = Math.floor(Math.random() * 19) + 1;
			var varIcon = "../assets/img/police03.png";
			var varStatus = "<li>Status: Ocupado</li>";
                        var varMsg = '<input type="text" placeholder="Digite sua mensagem"';
			
			if(i > 100)
			{
				velMedia = 52.1;
				varIcon = "../assets/img/police01.png";
				varStatus = "<li>Status: Livre</li>";
                        }
			
			if(i == "66")
			{
				velMedia = 18.6;
				varIcon = "../assets/img/police01.png";
				varStatus = "<li>Status: Livre</li>";
				
				geraMarker(0, 0);
				geraMarker(5000, 1);
			}
			
			if(i != "55" | i != "66")
			{
				geraMarker(0, 0);
			}
	
			function geraMarker(add, id)
			{
				var contentString = 
				'<h4>ID: bbc44ce5-83d3-410d-a16e-d13f9a60f'+ i + id +'</h4>'+
				'<ul>'+
				'<li>Velocidade M&eacute;dia: '+ velMedia +'Km/h</li>'+
				'<li>Dire&ccedil;&atilde;o: Norte</li>'+
				varStatus +
				'</ul>'
				
				if(i == "55" || i == "72")
				{
					contentString = contentString + '<input type="button" value="Cancelar Benefício Definitivamente" onclick="cancViagem('+i+')"/><div id="statusCanc_'+i+'"></div>';
				};

				var infowindow = new google.maps.InfoWindow()

				var marker = new google.maps.Marker({
					icon: varIcon,
					position: new google.maps.LatLng((startPos2[0] + (rLatD / 15000) + add), (startPos2[1] + (rLonD / 15000) + add)),
					map: map
				});
						
				google.maps.event.addListener(marker,'click', (function(marker,contentString,infowindow){ 
					return function() {
					   infowindow.setContent(contentString);
					   infowindow.open(map,marker);
					};
				})(marker,contentString,infowindow)); 
							
				google.maps.event.addListenerOnce(map, 'idle', (function(marker, myData)
				{ 
					return function() 
					{
					   animateMarker(marker, myData, speed, add);
					};
				})(marker, myData)); 
			}
		}
    },

    showNotification: function(from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}

function cancViagem(id)
{
	document.getElementById("statusCanc_"+ id).innerHTML="<br/> Benefício Cancelado!"
}