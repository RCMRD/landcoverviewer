// some data used in the forms
Ext.namespace('Ext.ghg');

Ext.ghg.countries = [
    ['Tanzania'],
    ['Rwanda'],
    ['Malawi'],
    ['Botswana'],
    ['Zambia'],
    ['Namibia'],
    ['Ethiopia'],
    ['Uganda'],
    ['Lesotho']
];

Ext.ghg.years = [
    ['2000'],
    ['2010']
    
];

Ext.ghg.schemes = [
    ['scheme_i', 'Scheme I'],
    ['scheme_ii', 'Scheme II']
    
];

var _country;

function makeGraph(ghgdata){
	var _gdata = [
		['Land Cover', 'Area (Ha)']
	];
	for(var x=0; x < ghgdata.length; x++){
		_gdata.push([ghgdata[x].cover, parseFloat(ghgdata[x].area)]);
	}

	return _gdata;
	
}



Ext.define('LandCover.controller.WebMapping.ButonOnclickActions', {
	extend: 'Ext.app.Controller',
	init: function(){
		
		this.control(
		{		
			'WebMappingViewport button[action=loadStats]':
			{
				click:function() {

					Ext.getCmp('chart').expand();

					// Get selected country, scheme and year
					var sel_country = Ext.getCmp('country').getValue();
					var country_sel = sel_country.toLowerCase();

					var sel_scheme = Ext.getCmp('scheme').getValue();
					var sel_year = Ext.getCmp('year1').getValue();

					//var _url = 'http://localhost/ghg/statistics/?country=tanzania&scheme=scheme_i&yr=2000&format=json&limit=0'
					var _url = 'http://localhost/ghg/statistics/?country='+country_sel+'&scheme='+sel_scheme+'&yr='+sel_year+'&format=json&limit=0';

					$.ajax({
								type: "GET",
								url: _url,
								async: false,
								dataType: "json",
								success: function(data){
									
									//alert(data.objects.length);
									var graph_data = makeGraph(data.objects);

									var data = google.visualization.arrayToDataTable(graph_data);

							        var options1 = {
								        title: 'Land Cover Statistics for '+sel_country+' '+sel_year+' '+sel_scheme,
								        //chartArea: {width: '80%'},
								        width: 400,
								        height: 350,
								        hAxis: {
								          title: 'Area(Hectares)',
								          minValue: 0
								        },
								        legend: { position: 'none' }
								        //vAxis: {
								        //  title: 'Land Cover'
								        //}
								      };

								      var options2 = {
								          title: 'Land Cover Statistics for '+sel_country+' '+sel_year+' '+sel_scheme 
								        };

							        var chart1 = new google.visualization.BarChart(document.getElementById('chart1_div'));
							        chart1.draw(data, options1);

							         var chart2 = new google.visualization.PieChart(document.getElementById('chart2_div'));
				        			chart2.draw(data, options2);



								}

							});

		        
					
				}
			},

			'WebMappingViewport combobox[name=country]': {
				select:function(valueField) {
					_country = valueField.value;

					// pan to country and zoom
					//alert(allwms.length);

					for(var i=0; i < countrydata.length; i++){
						if(countrydata[i].name == _country){
							
							map.setCenter(
                            	new OpenLayers.LonLat(countrydata[i].centerX, countrydata[i].centerY).transform(
                                	new OpenLayers.Projection("EPSG:4326"),
                                	map.getProjectionObject() ), countrydata[i].zoomLevel);

									
									// turn on selected country and turn off other countries
									//alert(countrydata[i].wmsLayers.length);
									
									for(var k=0; k < allwms.length; k++){
										var ghglayer = map.getLayersByName(allwms[k]);
										if(ghglayer.length != 0){
											//ghglayer[0].setVisibility(false);
											map.removeLayer(ghglayer[0]);
										}
										
									}

									//map.removeLayer(ghg_wms);
									
									for(var l=0; l < countrydata[i].wmsLayers.length; l++){

										//alert(countrydata[i].wmsLayers[l]);

										var wms_layer = new OpenLayers.Layer.WMS(countrydata[i].wmsLayers[l],
						                    "http://geoportal.rcmrd.org/geoserver/wms",
						                    {
						                        layers: 'servir:' + countrydata[i].wmsLayers[l],
						                        transparent: true,
						                        format: "image/png"
						                    }, {
						                           buffer: 0,
						                            visibility: true,
						                            displayOutsideMaxExtent: true,
						                            displayInLayerSwitcher: true,
						                            isBaseLayer: false,
						                            yx : {'EPSG:4326' : true}
						                    }
						                    
						                );
						                map.addLayer(wms_layer);
									}
									
									// load years combobox
									var _years = Ext.getCmp('year1');
									_years.clearValue();


									var _store = _years.getStore();
									_store.removeAll();

									var yrs = [];
									for(var n=0; n < countrydata[i].schemeIyears.length; n++){
										yrs.push([countrydata[i].schemeIyears[n]]);
									}

									_store.loadData(yrs);
									_years.enable();

									// load downloads grid
									var _downgrid = Ext.getCmp('downgrid').getStore();
									_downgrid.removeAll();

									var downloads_data = [];

									for(var m=0; m < countrydata[i].downLoadURLs.length; m++){
										//var _link = countrydata[i].downLoadURLs[m];
										var _link = "<a href='" + countrydata[i].downLoadURLs[m] + "'>" + countrydata[i].downLoadURLs[m] + "</a>";
										downloads_data.push({label1: _link});
									}

									_downgrid.loadData(downloads_data);

									// enable schemes
									Ext.getCmp('scheme').enable();




						
						}
					}
					
					
				}
			},

			'WebMappingViewport combobox[name=range_country_name]': {
				select:function() {
					
					
				}
			},   
			'WebMappingViewport combobox[name=custom_country_name]': {
				select:function() {
					
					
				}
			}, 
			'WebMappingViewport combobox[name=subscribe_country_name]': {
				select:function() {
					
					
				}
			},  			

			'WebMappingViewport button[action=rangeSearchAction]':
			{
				click: function() 
				{

					var loadingPanel = new OpenLayers.Control.LoadingPanel();
					map.addControl(loadingPanel);    
					//show the control
					loadingPanel.maximizeControl();
					// load your layers here
					// remove it as the above function returns

					range_search();

					loadingPanel.minimizeControl();

		 			resizeElementHeight('legend_items', 'legend_items-body');
				}
			},
			'WebMappingViewport button[action=customSearchAction]':
			{
				click: function() 
				{

					var loadingPanel = new OpenLayers.Control.LoadingPanel();
					map.addControl(loadingPanel);    
					//show the control
					loadingPanel.maximizeControl();
					// load your layers here
					// remove it as the above function returns
					
					//flag="no_flag";
					custom_search();

					loadingPanel.minimizeControl();
					
				}
			},
			'MapPanel button[action=map_zoom_in]':
			{
				click:function()
				{	
					zoomInCtrl.trigger();
				}
			},
			'MapPanel button[action=map_zoom_out]':
			{
				click:function()
				{	
					zoomOutCtrl.trigger();
				}
			},
			'MapPanel button[action=navigation_history_previous]':
			{
				click:function()
				{	
					navigationHistoryCtrl.previousTrigger();
				}
			},
			'MapPanel button[action=navigation_history_next]':
			{
				click:function()
				{	
					navigationHistoryCtrl.nextTrigger();
				}
			},
			'MapPanel button[action=about_us]':
			{
				click: function ()
				{
					var win = new Ext.Window
					({
						width:500,
						height:500,
						autoScroll:true,
						title: 'About the System',
						autoLoad:{
							url:'pages/about_us.html'
						}
					});
					win.show();
				}
			},
			'MapPanel button[action=useful_links]':
			{
				click: function ()
				{
					
					var win = new Ext.Window({
						width:270,
						height:130,
						autoScroll:true,
						title: 'Useful Links',
						autoLoad:{
							url:'pages/useful_links.html'
						}
					});
					win.show();
				}
			},
			'MapPanel button[action=help_action]':
			{
				click: function ()
				{
					var win = new Ext.Window
					({
						width:500,
						height:500,
						autoScroll:true,
						title: 'Help',
						autoLoad:{
							url:'pages/help.html'
						}
					});
					win.show();
				}
			},
			'MapPanel button[action=map_default_map_extent]':
			{
				click: function() 
				{
					map.setCenter(
						new OpenLayers.LonLat(29.577899,3.443310).transform(
							new OpenLayers.Projection("EPSG:4326"),
							map.getProjectionObject()
							), 
						5);
				}
			},

			'MapPanel button[action=zoom_to_countries]':
			{
				click: function() 
				{
					var selected_country=Ext.getCmp('Zoom_to_Countries_Id').getValue();
					if(selected_country==null)
					{
						Ext.Msg.alert("No selection","Please select a country you want to Zoom to");
					}
					else if(selected_country=="All Countries")
					{
						map.setCenter(
							new OpenLayers.LonLat(29.577899,3.443310).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							5);
					}	
					else if(selected_country=="Burundi")
					{
						map.setCenter(
							new OpenLayers.LonLat(29.90, -3.5).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							9);
					}
					else if(selected_country=="Djibouti")
					{
						map.setCenter(
							new OpenLayers.LonLat(42.61, 11.77).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							9);
					}
					else if(selected_country=="Eritrea")
					{
						map.setCenter(
							new OpenLayers.LonLat(39.59, 14.84).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							7);
					}
					else if(selected_country=="Ethiopia")
					{
						map.setCenter(
							new OpenLayers.LonLat(38.58, 8.98).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							6);
					}

					else if(selected_country=="Kenya")
					{
						map.setCenter(
							new OpenLayers.LonLat(38.224663, 0.009370).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							7);
					}
					else if(selected_country=="Rwanda")
					{
						map.setCenter(
							new OpenLayers.LonLat(29.99, -1.9370).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							9);
					}
					else if(selected_country=="Somalia")
					{
						map.setCenter(
							new OpenLayers.LonLat(46.76, 5.5).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							6);
					}

					else if(selected_country=="Sudan")
					{
						map.setCenter(
							new OpenLayers.LonLat(29.75,15.98).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							6);
					}
					else if(selected_country=="South Sudan")
					{
						map.setCenter(
							new OpenLayers.LonLat(29.44, 7.84).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							7);
					}
					else if(selected_country=="Tanzania")
					{
						map.setCenter(
							new OpenLayers.LonLat(34.77, -6.32).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							6);
					}
					else if(selected_country=="Uganda")
					{
						map.setCenter(
							new OpenLayers.LonLat(32.71, 1.23).transform(
								new OpenLayers.Projection("EPSG:4326"),
								map.getProjectionObject() ), 
							7);
					}

				}
				
			}

		});
	}

});