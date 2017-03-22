var countrydata = [
				  {
				  	"name": "Tanzania",
				    "id": "0",
				    "centerX" : 34.224046,
				    "centerY":-5.613931,				    
				    "zoomLevel": 6,
				    "schemeIyears": [2000,2010],
				    "wmsLayers":['tanzania_landcover_2000_scheme_i', 'tanzania_landcover_2000_scheme_ii', 'tanzania_landcover_2010_scheme_i', 'tanzania_landcover_2010_scheme_ii'],
				    "classficationEpochs":"2",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Tanzania/TanzaniaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/tanzania_admin/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Tanzania_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Tanzania_LandCover_2010_Scheme_I.zip","http://geoportal.rcmrd.org/data/Tanzania_LandCover_2000_Scheme_II.zip","http://geoportal.rcmrd.org/data/Tanzania_LandCover_2010_Scheme_II.zip"],		    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Tanzania/TanzaniaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Tanzania/TanzaniaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",
				    "boundaryType":"District,Region,Country",
					"statsFields":"NAME_2,NAME_1,NAME_ENGLI",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  },
				  {
				  	"name": "Rwanda",
				    "id": "1",
				    "centerX" : 29.893494,
				    "centerY":-1.971387,				    
				    "zoomLevel": 8,
				    "schemeIyears": [1990,2000,2010,2015],
				    "wmsLayers":['rwanda_landcover_1990_scheme_i','rwanda_landcover_1990_scheme_ii','rwanda_landcover_2000_scheme_i','rwanda_landcover_2000_scheme_ii','rwanda_landcover_2010_scheme_i','rwanda_landcover_2010_scheme_ii','rwanda_landcover_2015_scheme_i','rwanda_landcover_2015_scheme_ii'],
				    "classficationEpochs":"3",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Rwanda/RwandaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/rwanda_admin/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Rwanda_LandCover_1990_Scheme_I.zip","http://geoportal.rcmrd.org/data/Rwanda_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Rwanda_LandCover_2010_Scheme_I.zip","http://geoportal.rcmrd.org/data/Rwanda_LandCover_1990_Scheme_II.zip", "http://geoportal.rcmrd.org/data/Rwanda_LandCover_2000_Scheme_II.zip", "http://geoportal.rcmrd.org/data/Rwanda_LandCover_2010_Scheme_II.zip","http://geoportal.rcmrd.org/data/rwanda_landcover_2015_scheme_ii.zip","http://geoportal.rcmrd.org/data/rwanda_landcover_2015_scheme_i.zip"],			    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Rwanda/RwandaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Rwanda/RwandaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",
				    "boundaryType":"District,Province,Country",
					"statsFields":"DISTR_NAME,PROVINCE,Name",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				},
				  {
				  	"name": "Malawi",
				    "id": "2",
				   "centerX" : 33.781073,
				    "centerY":-13.542889,			    
				    "zoomLevel": 6,
				    "schemeIyears": [1990,2000,2010],
				    "wmsLayers":['malawi_landcover_1990_scheme_i','malawi_landcover_1990_scheme_ii','malawi_landcover_2000_scheme_i','malawi_landcover_2000_scheme_ii','malawi_landcover_2010_scheme_i','malawi_landcover_2010_scheme_ii'],
				    "classficationEpochs":"3",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Malawi/MalawiEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/malawi/MapServer/",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Malawi_LandCover_1990_Scheme_i.zip","http://geoportal.rcmrd.org/data/Malawi_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Malawi_LandCover_2010_Scheme_I.zip","http://geoportal.rcmrd.org/data/Malawi_LandCover_1990_Scheme_II.zip","http://geoportal.rcmrd.org/data/Malawi_LandCover_2000_Scheme_II.zip","http://geoportal.rcmrd.org/data/Malawi_LandCover_2010_Scheme_II.zip"],		    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Malawi/MalawiEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Malawi/MalawiEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",
				    "boundaryType":"District,Region,Country",
					"statsFields":"DISTRICT,REGION,Country",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  },
				  {
				  	"name": "Botswana",
				    "id": "3",				    
				    "centerX" : 24.315801,
				    "centerY":-22.237578,				    
				    "zoomLevel": 6,
				    "schemeIyears": [2000,2010],
				    "wmsLayers":['botswana_landcover_2000_scheme_i','botswana_landcover_2000_scheme_ii','botswana_landcover_2010_scheme_i','botswana_landcover_2010_scheme_ii'],
				    "classficationEpochs":"2",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Botswana/BotswanaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/botswana_admin/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Botswana_LandCover_2000__Scheme_I.zip","http://geoportal.rcmrd.org/data/Botswana_LandCover_2010_Scheme_I.zip", "http://geoportal.rcmrd.org/data/Botswana_LandCover_2000_Scheme_II.zip", "http://geoportal.rcmrd.org/data/Botswana_LandCover_2010_Scheme_II.zip"],
				    "schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Botswana/BotswanaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Botswana/BotswanaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",			    
					"boundaryType":"Sub District, District,Country ",
					"statsFields":"NAME_2,NAME_1,NAME_ENGLI",
					"admin_1_schm_1_json_stats":"botswana_admin1_sch_1_pixel_count_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"botswana_admin2_sch_1_pixel_count_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  },
				  {
				  	"name": "Zambia",
				    "id": "4",
				    "centerX" : 25.486607,
				    "centerY":-14.632782,				    
				    "zoomLevel": 6,
				    "schemeIyears": [2000,2010],
				    "wmsLayers":['zambia_landcover_2000_scheme_i','zambia_landcover_2000_scheme_ii','zambia_landcover_2010_scheme_i','zambia_landcover_2010_scheme_ii'],
				    "classficationEpochs":"2",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Zambia/ZambiaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/zambia_admin/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Zambia_LandCover_2000_scheme_I.zip","http://geoportal.rcmrd.org/data/Zambia_Landcover_2010_Scheme_I.zip","http://geoportal.rcmrd.org/data/Zambia_Landcover_2000_Scheme_II.zip","http://geoportal.rcmrd.org/data/Zambia_Landcover_2010_Scheme_II.zip"],			    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Zambia/ZambiaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Zambia/ZambiaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",
				     "boundaryType":"District,province,Country",
					"statsFields":"NAME_2,NAME_1,NAME_ENGLI",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  },
				  {
				  	"name": "Namibia",
				    "id": "5",
				    "centerX" : 17.091367,
				    "centerY":-22.600099,			    
				    "zoomLevel": 6,
				    "schemeIyears": [2000,2010],
				    "wmsLayers":['namibia_landcover_2000_scheme_i','namibia_landcover_2000_scheme_ii','namibia_landcover_2010_scheme_i','namibia_landcover_2010_scheme_ii'],
				    "classficationEpochs":"2",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Namibia/NamibiaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/namibia_admin/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Namibia_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Namibia_LandCover_2010_Scheme_I.zip","http://geoportal.rcmrd.org/data/Namibia_LandCover_2000_Scheme_II.zip","http://geoportal.rcmrd.org/data/Namibia_LandCover_2010_Scheme_II.zip"],		    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Namibia/NamibiaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Namibia/NamibiaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",				    
					 "boundaryType":"District,Region,Country",
					"statsFields":"NAME_2,NAME_1,NAME_ENGLI",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  },
				  {
				  	"name": "Ethiopia",
				    "id": "6",
				    "centerX" : 40.499395,
				    "centerY":9.1491755,			    
				    "zoomLevel": 6,
				    "schemeIyears": [2003,2008],
				    "wmsLayers":['ethiopia_landcover_2003_scheme_i','ethiopia_landcover_2003_scheme_ii','ethiopia_landcover_2008_scheme_i','ethiopia_landcover_2008_scheme_ii'],
				    "classficationEpochs":"2",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Ethiopia/EthiopiaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/namibia_admin/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/ethiopia_landcover_2003_scheme_i.zip","http://geoportal.rcmrd.org/data/ethiopia_landcover_2003_scheme_ii.zip","http://geoportal.rcmrd.org/data/ethiopia_landcover_2008_scheme_i.zip","http://geoportal.rcmrd.org/data/ethiopia_landcover_2008_scheme_ii.zip"],		    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Ethiopia/EthiopiaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Ethiopia/EthiopiaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",				    
					 "boundaryType":"District,Region,Country",
					"statsFields":"NAME_2,NAME_1,NAME_ENGLI",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  },
				  {
				  	"name": "Uganda",
				    "id": "7",
				    "centerX" : 32.30465,
				    "centerY":1.36515,			    
				    "zoomLevel": 6,
				    "schemeIyears": [2000,2014],
				    "wmsLayers":['uganda_landcover_2000_scheme_i','uganda_landcover_2000_scheme_ii','uganda_landcover_2014_scheme_i','uganda_landcover_2014_scheme_ii'],
				    "classficationEpochs":"2",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://maps.rcmrd.org/arcgis/rest/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Uganda_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Uganda_LandCover_2000_Scheme_II.zip","http://geoportal.rcmrd.org/data/Uganda_LandCover_2014_Scheme_I.zip","http://geoportal.rcmrd.org/data/Uganda_LandCover_2014_Scheme_II.zip"],		    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",				    
					 "boundaryType":"District,Region,Country",
					"statsFields":"NAME_2,NAME_1,NAME_ENGLI",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  },
				  {
				  	"name": "Lesotho",
				    "id": "8",
				    "centerX" : 27.7587412,
				    "centerY":-29.62319,			    
				    "zoomLevel": 8,
				    "schemeIyears": [2000,2014],
				    "wmsLayers":['lesotho_landcover_2000_scheme_i','lesotho_landcover_2000_scheme_ii','lesotho_landcover_2014_scheme_i','lesotho_landcover_2014_scheme_ii'],
				    "classficationEpochs":"2",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://maps.rcmrd.org/arcgis/rest/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Lesotho_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Lesotho_LandCover_2000_Scheme_II.zip","http://geoportal.rcmrd.org/data/Lesotho_LandCover_2014_Scheme_I.zip","http://geoportal.rcmrd.org/data/Lesotho_LandCover_2014_Scheme_II.zip"],		    
				  	"schm_I_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
				  	"schm_II_Legend_URLs":"http://maps.rcmrd.org/arcgis/services/Uganda/UgandaEnvironmentGHGLandCoverMapService/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0",				    
					 "boundaryType":"District,Region,Country",
					"statsFields":"NAME_2,NAME_1,NAME_ENGLI",
					"admin_1_schm_1_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_1_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_1_json_stats":"malawi_country_1990_sch_I_stats.JSON,malawi_country_2000_sch_I_stats.JSON,malawi_country_2010_sch_I_stats.JSON",
					"admin_1_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"admin_2_schm_2_json_stats":"malawi_regions_1990_sch_I_stats.JSON,malawi_regions_2000_sch_I_stats.JSON,malawi_regions_2010_sch_I_stats.JSON",
					"admin_3_schm_2_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_I_json_stats":"malawi_districts_1990_sch_I_stats.JSON,malawi_districts_2000_sch_I_stats.JSON,malawi_districts_2010_sch_I_stats.JSON",
					"schm_II_json_stats":""
				  }
			];
	
var allwms = [];
var wmsnames = [];

function legName(fullname){
	var subname = fullname.split("_");
	var strname = subname.toString(); 

}

for(var i=0; i < countrydata.length; i++){
	for(var j=0; j < countrydata[i].wmsLayers.length; j++){
		var _name = countrydata[i].wmsLayers[j];
		allwms.push(_name);


	}
}


var ghgstats = [
	{
		"name": "botswana_landcover_2000_scheme_i",
		"stats": [
			['No data', 43440356.79],
			['Forestland', 3239361.27],
			['Grassland', 54634928.22],
			['Cropland', 491546.7],
			['Wetland', 1677079.98],
			['Settlement', 82023.12],
			['Otherland', 948621.87]
		]
	},
	{
		"name": "botswana_landcover_2000_scheme_ii",
		"stats": [
			['No data', 43440356.79],
			['Moderate Forest', 192634.83],
			['Sparse Forest', 2103226.92],
			['Woodland', 943499.52],
			['Closed Grassland', 31784.76],
			['Open Grassland', 8698181.58],
			['Closed Shrubland', 16398982.89],
			['Open Shrubland', 29505978.99],
			['Cropland', 491546.7],
			['Wetland', 745325.28],
			['Water Body', 135010.17],
			['Setlement', 82023.12],
			['Otherland', 948621.87],
			['Pan', 796744.53]
		]
	},
	{
		"name": "botswana_landcover_2010_scheme_i",
		"stats": [
			['No data', 43440399.18],
			['Forestland', 4325177.52],
			['Grassland', 52390488.24],
			['Cropland', 516951.81],
			['Wetland', 1907158.77],
			['Settlement', 120795.66],
			['Otherland', 1812946.77]
		]
	},
	{
		"name": "botswana_landcover_2010_scheme_ii",
		"stats": [
			['No data', 43440399.18],
			['Moderate Forest', 798239.25],
			['Sparse Forest', 2020136.31],
			['Woodland', 1506801.96],
			['Closed Grassland', 8484.3],
			['Open Grassland', 7446249.27],
			['Closed Shrubland', 19228626.81],
			['Open Shrubland', 25707127.86],
			['Cropland', 516951.81],
			['Wetland', 596077.47],
			['Water Body', 318561.84],
			['Setlement', 120795.66],
			['Otherland', 1812946.77],
			['Pan', 992519.46]
		]
	},
	{
		"name": "ethiopia_landcover_2003_scheme_i",
		"stats": [
			['Land Cover', 'Area(Ha)'],
			//['No data', 99450682.38],
			['Forestland', 12577328.01],
			['Grassland', 69524444.97],
			['Cropland', 19803096.99],
			['Wetland', 1207980.18],
			['Settlement', 126179.73],
			['Otherland', 15314821.74]
		]
	}
	

];
		
Ext.define('LandCover.controller.WebMapping.countryConfigs', {
	extend: 'Ext.app.Controller',
	init: function(){

	}
});