var ghg_wms1, ghg_wms2, ghg_wms3, ghg_wms4;

Ext.define('LandCover.view.WebMapping.GeoExtMapPanel',
{
	extend: 'GeoExt.panel.Map',
	alias: 'widget.GeoExtMapPanel',
	id: 'GeoExtMapPanelId',
	border: 'false',
	layout: 'fit',
	region: 'center',
	width: '100%',
	height:'100%',
	center: '29.577899,3.443310',
	zoom: 11,
	initComponent: function() 
	{
		var me = this,
		items = [],
		ctrl;

		map = new OpenLayers.Map('map', options);
		map.addControl(new OpenLayers.Control.LayerSwitcher());
		map.addControl(new OpenLayers.Control.Navigation({dragPanOptions: {enableKinetic: true}})); 
		map.addControl(new OpenLayers.Control.Scale());
		map.addControl(new OpenLayers.Control.LoadingPanel()); 

        africa_outline = new OpenLayers.Layer.Vector( "Africa", {
            isBaseLayer: true, displayInLayerSwitcher: true, visibility: true,
            projection:  new OpenLayers.Projection('EPSG:4326'),
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP
            ({
                    url:  "data/webmapping/africa.json",
                    format: new OpenLayers.Format.GeoJSON
                    ({
                        extractStyles: true,
                        extractAttributes: true
                    })
                })
        });
        ///Baselayers
        var gphy = new OpenLayers.Layer.Google(
            "Google Physical Terrain",
            {isBaseLayer: true, type: google.maps.MapTypeId.TERRAIN, visibility:false, transitionEffect: 'resize'}
            );

        var gmap = new OpenLayers.Layer.Google(
                    "Google Streets", // the default
                    {isBaseLayer: true,numZoomLevels: 20,visibility:false, transitionEffect: 'resize'}
                    );

        var ghyb = new OpenLayers.Layer.Google(
            "Google Hybrid",
            {isBaseLayer: true,type: google.maps.MapTypeId.HYBRID, numZoomLevels: 22,visibility:false, transitionEffect: 'resize'}
            );

        var gsat = new OpenLayers.Layer.Google(
            "Google Satellite",
            {isBaseLayer: true,type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 20,visibility:false, transitionEffect: 'resize'}
            );

        var mapbox_street = new OpenLayers.Layer.XYZ("Mapbox Street",
            ["http://a.tiles.mapbox.com/v4/mapbox.streets/${z}/${x}/${y}.png?access_token=pk.eyJ1Ijoid29uZGllIiwiYSI6InlKcXpXT1UifQ.BQ3hMXdyffGusTRN8JnWOg"], {
                sphericalMercator: true,
                wrapDateLine: true,
                numZoomLevels: 20,
                transitionEffect: 'resize'
            });

        var mapquest = new OpenLayers.Layer.XYZ(
            "Imagery",
            [
                "http://otile1.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.png",
                "http://otile2.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.png",
                "http://otile3.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.png",
                "http://otile4.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.png"
            ],
            {
                sphericalMercator: true,
                wrapDateLine: true,
                numZoomLevels: 20,
                //attribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a>. Portions Courtesy NASA/JPL-Caltech '>",
                transitionEffect: "resize"
            }
        );

        

        ghg_wms1 = new OpenLayers.Layer.WMS("tanzania_landcover_2000_scheme_i",
                    "http://geoportal.rcmrd.org/geoserver/wms",
                    {
                        layers: 'servir:tanzania_landcover_2000_scheme_i',
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

        ghg_wms2 = new OpenLayers.Layer.WMS("tanzania_landcover_2000_scheme_ii",
                    "http://geoportal.rcmrd.org/geoserver/wms",
                    {
                        layers: 'servir:tanzania_landcover_2000_scheme_ii',
                        transparent: true,
                        format: "image/png"
                    }, {
                           buffer: 0,
                            visibility: false,
                            displayOutsideMaxExtent: true,
                            displayInLayerSwitcher: true,
                            isBaseLayer: false,
                            yx : {'EPSG:4326' : true}
                    }
                    
                );

        ghg_wms3 = new OpenLayers.Layer.WMS("tanzania_landcover_2010_scheme_i",
                    "http://geoportal.rcmrd.org/geoserver/wms",
                    {
                        layers: 'servir:tanzania_landcover_2010_scheme_i',
                        transparent: true,
                        format: "image/png"
                    }, {
                           buffer: 0,
                            visibility: false,
                            displayOutsideMaxExtent: true,
                            displayInLayerSwitcher: true,
                            isBaseLayer: false,
                            yx : {'EPSG:4326' : true}
                    }
                    
                );

        ghg_wms4 = new OpenLayers.Layer.WMS("tanzania_landcover_2010_scheme_ii",
                    "http://geoportal.rcmrd.org/geoserver/wms",
                    {
                        layers: 'servir:tanzania_landcover_2010_scheme_ii',
                        transparent: true,
                        format: "image/png"
                    }, {
                           buffer: 0,
                            visibility: false,
                            displayOutsideMaxExtent: true,
                            displayInLayerSwitcher: true,
                            isBaseLayer: false,
                            yx : {'EPSG:4326' : true}
                    }
                    
                );


       

        var maxExtent = new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508),
        restrictedExtent = maxExtent.clone();
        maxResolution = 156543.0339;

        var options = {
            projection: new OpenLayers.Projection("EPSG:900913"),
            displayProjection: new OpenLayers.Projection("EPSG:4326"),
            units: "m",
            numZoomLevels: 20,
            maxResolution: maxResolution,
			//maxExtent: maxExtent,
			sphericalMercator: true,
			restrictedExtent: restrictedExtent
		};

		map.addControl(new OpenLayers.Control.MousePosition
			(	{
				id:'MousePosition_id',
			
				numDigits: 6,
				prefix: '(Lon/Lat)',
				emptyString: '',
				displayProjection: "EPSG:4326"
			}
			));
		
		zoomInCtrl = new OpenLayers.Control.ZoomIn();
		map.addControl(zoomInCtrl);

		zoomOutCtrl = new OpenLayers.Control.ZoomOut();
		map.addControl(zoomOutCtrl);
		
		navigationHistoryCtrl = new OpenLayers.Control.NavigationHistory();
		map.addControl(navigationHistoryCtrl);



        //When there is internet use this
        map.addLayers([ghg_wms1, ghg_wms2, ghg_wms3, ghg_wms4, mapquest, mapbox_street]);

        //No Internet
        //map.addLayers([africa_outline]);

		map.setCenter(new OpenLayers.LonLat(34.224046,-5.613931).transform(
			new OpenLayers.Projection("EPSG:4326"),
			map.getProjectionObject()
			), 6 );


    Ext.apply(me, 
    {
    	map: map

    });


    me.callParent(arguments);
}
});
