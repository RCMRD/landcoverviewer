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


Ext.define('LandCover.controller.WebMapping.ButonOnclickActions', {
	extend: 'Ext.app.Controller',
	init: function(){
		
		this.control(
		{		
			'WebMappingViewport button[action=singleSearchAction]':
			{
				click:function() {

					var loadingPanel = new OpenLayers.Control.LoadingPanel();
					map.addControl(loadingPanel);    
							//show the control
							loadingPanel.maximizeControl();
					// load your layers here
					// remove it as the above function returns
					//flag="no_flag";
					single_search();
					
					loadingPanel.minimizeControl();
					
				}
			},

			'WebMappingViewport combobox[name=single_country_name]': {
				select:function() {
					single_country_value=Ext.getCmp('single_country_id').getValue(); 

					conservation_area_store.load({params: {country: single_country_value}});
					towns_store.load({params: {country: single_country_value}});

					conservation_area_combo=Ext.getCmp('single_conservation_area_id');
					nearby_conservation_area_combo=Ext.getCmp('single_nearby_conservation_area_id');						
					single_town_combo=Ext.getCmp('single_town_id');

					if (single_country_value!=='')  {
						conservation_area_combo.enable(); 
						nearby_conservation_area_combo.enable();                             
						single_town_combo.enable();      

					}
					
				}
			},

			'WebMappingViewport combobox[name=range_country_name]': {
				select:function() {
					range_country_value=Ext.getCmp('range_country_id').getValue(); 

					conservation_area_store.load({params: {country: range_country_value}});
					towns_store.load({params: {country: range_country_value}});

					conservation_area_combo=Ext.getCmp('range_conservation_area_id');
					nearby_conservation_area_combo=Ext.getCmp('range_nearby_conservation_area_id');                        
					range_town_combo=Ext.getCmp('range_town_id');

					if (range_country_value!=='')  {
						conservation_area_combo.enable(); 
						nearby_conservation_area_combo.enable();                             
						range_town_combo.enable();      

					}
					
				}
			},   
			'WebMappingViewport combobox[name=custom_country_name]': {
				select:function() {
					custom_country_value=Ext.getCmp('custom_country_id').getValue(); 

					conservation_area_store.load({params: {country: custom_country_value}});
					towns_store.load({params: {country: custom_country_value}});

					conservation_area_combo=Ext.getCmp('custom_conservation_area_id');
					nearby_conservation_area_combo=Ext.getCmp('custom_nearby_conservation_area_id');                        
					custom_town_combo=Ext.getCmp('custom_town_id');

					if (custom_country_value!=='')  {
						conservation_area_combo.enable(); 
						nearby_conservation_area_combo.enable();                             
						custom_town_combo.enable();      

					}
					
				}
			}, 
			'WebMappingViewport combobox[name=subscribe_country_name]': {
				select:function() {
					subscribe_country_value=Ext.getCmp('subscribe_country_id').getValue(); 

					conservation_area_store.load({params: {country: subscribe_country_value}});
					towns_store.load({params: {country: subscribe_country_value}});

					subscribe_conservation_area_combo=Ext.getCmp('subscribe_conservation_area_id');                       
					subscribe_country_check=Ext.getCmp('subscribe_country_check_id');

					if (subscribe_country_value!=='')  {
						subscribe_conservation_area_combo.enable();                           
						subscribe_country_check.enable();      

					}
					
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