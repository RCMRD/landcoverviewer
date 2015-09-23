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
				    "schemeIyears": [1990,2000,2010],
				    "wmsLayers":['rwanda_landcover_1990_scheme_i','rwanda_landcover_1990_scheme_ii','rwanda_landcover_2000_scheme_i','rwanda_landcover_2000_scheme_ii','rwanda_landcover_2010_scheme_i','rwanda_landcover_2010_scheme_ii'],
				    "classficationEpochs":"3",				   
				    "serviceUrl":"http://maps.rcmrd.org/arcgis/rest/services/Rwanda/RwandaEnvironmentGHGLandCoverMapService/MapServer",
				    "serviceUrl_vector":"http://servir.rcmrd.org/ArcGIS/rest/services/admin_boundaries/rwanda_admin/MapServer",	
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Rwanda_LandCover_1990_Scheme_I.zip","http://geoportal.rcmrd.org/data/Rwanda_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Rwanda_LandCover_2010_Scheme_I.zip","http://geoportal.rcmrd.org/data/Rwanda_LandCover_1990_Scheme_II.zip", "http://geoportal.rcmrd.org/data/Rwanda_LandCover_2000_Scheme_II.zip", "http://geoportal.rcmrd.org/data/Rwanda_LandCover_2010_Scheme_II.zip"],			    
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
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/malawi_landcover_1990_scheme_i.zip","http://geoportal.rcmrd.org/data/malawi_landcover_2000_scheme_i.zip","http://geoportal.rcmrd.org/data/malawi_landcover_2010_scheme_i.zip","http://geoportal.rcmrd.org/data/malawi_landcover_1990_scheme_ii.zip","http://geoportal.rcmrd.org/data/malawi_landcover_2000_scheme_ii.zip","http://geoportal.rcmrd.org/data/malawi_landcover_2010_scheme_ii.zip"],		    
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
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Botswana_LandCover_2000__Scheme_I.zip","http://geoportal.rcmrd.org/data/Botswana_LandCover_2010_Scheme_I.zip", "http://geoportal.rcmrd.org/data/botswana_landcover_2000_scheme_II.zip", "http://geoportal.rcmrd.org/data/botswana_landcover_2010_scheme_II.zip"],
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
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/zambia_landcover_2000_scheme_I.zip","http://geoportal.rcmrd.org/data/zambia_landcover_2010_scheme_I.zip","http://geoportal.rcmrd.org/data/zambia_landcover_2000_scheme_II.zip","http://geoportal.rcmrd.org/data/zambia_landcover_2010_scheme_II.zip"],			    
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
				    "downLoadURLs":["http://geoportal.rcmrd.org/data/Uganda_LandCover_2000_Scheme_I.zip","http://geoportal.rcmrd.org/data/Zambia_LandCover_2000_Scheme_II.zip","http://geoportal.rcmrd.org/data/Zambia_LandCover_2010_Scheme_I.zip","http://geoportal.rcmrd.org/data/Zambia_LandCover_2010_Scheme_II.zip"],		    
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
	},
	{
		"name": "ethiopia_landcover_2003_scheme_ii",
		"stats": [
			['No Data', 97103903.04],
			['Dense Forest', 1094939.64],
			['Moderate Forest', 2375683.11],
			['Sparse Forest', 7509673.08],
			['Woodland', 1462887.09],
			['Closed Grassland', 852973.02],
			['Open Grassland', 14607482.67],
			['Closed Shrubland', 10559189.61],
			['Open Shrubland', 39808235.52],
			['Perennial Cropland', 42933.78],
			['Annual Cropland', 19609571.52],
			['Wetland', 317228.49],
			['Water Body', 815571.27],
			['Settlement', 122303.88],
			['Bare Soil', 8297085.06],
			['Rock Outcrop', 5589470.43],
			['Lava Flow', 210924.54],
			['Salt Pan', 15410.07]

		]
	},
	{
		"name": "ethiopia_landcover_2008_scheme_i",
		"stats": [
			['No data', 103537731.51],
			['Forestland', 15413856.3],
			['Grassland', 65263571.1],
			['Cropland', 20961606.78],
			['Wetland', 1487019.24],
			['Settlement', 166268.34],
			['Otherland', 15273060.66]
		]
	},
	{
		"name": "ethiopia_landcover_2008_scheme_ii",
		"stats": [
			['No Data', 103537731.51],
			['Dense Forest', 1339953.66],
			['Moderate Forest', 2577116.61],
			['Sparse Forest', 9945305.46],
			['Woodland', 1551480.57],
			['Closed Grassland', 1276879.32],
			['Open Grassland', 11879335.17],
			['Closed Shrubland', 11359054.44],
			['Open Shrubland', 40748302.17],
			['Perennial Cropland', 80911.26],
			['Annual Cropland', 20880695.52],
			['Wetland', 674518.05],
			['Water Body', 812501.19],
			['Settlement', 166268.34],
			['Bare Soil', 9910807.92],
			['Rock Outcrop', 5018873.49],
			['Lava Flow', 287901.63],
			['Salt Pan', 55477.62]
		]
	},
	{
		"name": "lesotho_landcover_2000_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "lesotho_landcover_2000_scheme_ii",
		"stats": [
			['No Data', ],
			['Natural Forest', ],
			['Plantation Forest', ],
			['Grassland', ],
			['Shrubland', ],
			['Orchard', ],
			['Annual Cropland', ],
			['Vegetated Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Mine and Quarry', ],
			['Otherland', ]
		]
	},{
		"name": "lesotho_landcover_2014_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "lesotho_landcover_2014_scheme_ii",
		"stats": [
			['No Data', ],
			['Natural Forest', ],
			['Plantation Forest', ],
			['Grassland', ],
			['Shrubland', ],
			['Orchard', ],
			['Annual Cropland', ],
			['Vegetated Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Mine and Quarry', ],
			['Otherland', ]
		]
	},
	{
		"name": "malawi_landcover_1990_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "malawi_landcover_1990_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shrubland', ],
			['Open Shrubland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ],
			['Cloud', ],
			['Shadow', ]
		]
	},
	{
		"name": "malawi_landcover_2000_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "malawi_landcover_2000_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shrubland', ],
			['Open Shrubland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ],
			['Cloud', ],
			['Shadow', ]
		]
	},
	{
		"name": "malawi_landcover_2010_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "malawi_landcover_2010_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shrubland', ],
			['Open Shrubland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ],
			['Cloud', ],
			['Shadow', ]
		]
	},
	{
		"name": "namibia_landcover_2000_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "namibia_landcover_2000 scheme_ii",
		"stats": [
			['No Data', ],
			['Forestland', ],
			['Woodland', ],
			['Grassland', ],
			['Shrubland', ],
			['Savanna Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Rock Outcrop', ],
			['Bare Soil', ],
			['Desert Dune', ],
			['Desert Sand', ]
		]
	},{
		"name": "namibia_landcover_2010_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "namibia_landcover_2010_scheme_ii",
		"stats": [
			['No Data', ],
			['Forestland', ],
			['Woodland', ],
			['Grassland', ],
			['Shrubland', ],
			['Savanna Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Rock Outcrop', ],
			['Bare Soil', ],
			['Desert Dune', ],
			['Desert Sand', ]
		]
	},
	{
		"name": "rwanda_landcover_1990_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "rwanda_landcover_1990_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Woodland', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shubland', ],
			['Open Shrubland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "rwanda_landcover_2000_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "rwanda_landcover_2000_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Woodland', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shubland', ],
			['Open Shrubland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "rwanda_landcover_2010_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "rwanda_landcover_2010_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Woodland', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shubland', ],
			['Open Shrubland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ]
		]
	},{
		"name": "tanzania_landcover_2000_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "tanzania_landcover_2000_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Planted Forest', ],
			['Mangrove Forest', ],
			['Woodland', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Bushland', ],
			['Open Bushland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Bare Soil', ],
			['Rock Outcrop', ],
			['Ice Cap', ],
			['Salt Crust', ],
			['Cloud', ],
			['Shadow', ]

		]
	},
	{
		"name": "tanzania_landcover_2010_scheme_i",
		"stats": [
			['No data', 44625762.99],
			['Forestland', 25036755.84],
			['Grassland', 44948731.41],
			['Cropland', 17616618.9],
			['Wetland', 16048430.82],
			['Settlement', 227756.88],
			['Otherland', 1917017.46]
		]
	},
	{
		"name": "tanzania_landcover_2010_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Forest', ],
			['Moderate Forest', ],
			['Sparse Forest', ],
			['Planted Forest', ],
			['Mangrove Forest', ],
			['Woodland', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Bushland', ],
			['Open Bushland', ],
			['Perennial Cropland', ],
			['Annual Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Bare Soil', ],
			['Rock Outcrop', ],
			['Ice Cap', ],
			['Salt Crust', ],
			['Cloud', ],
			['Shadow', ]
		]
	},{
		"name": "uganda_landcover_2000_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "uganda_landcover_2000_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Natural Forest', ],
			['Moderate Natural Forest', ],
			['Sparse Natural Forest', ],
			['Plantation Forest', ],
			['Dense Woodland', ],
			['Moderate Woodland', ],
			['Sparse Woodland', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Bushland', ],
			['Open Bushland', ],
			['Perennial Commercial Cropland', ],
			['Annual Commercial Cropland', ],
			['Subsistence Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "uganda_landcover_2014_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "uganda_landcover_2014_scheme_ii",
		"stats": [
			['No Data', ],
			['Dense Natural Forest', ],
			['Moderate Natural Forest', ],
			['Sparse Natural Forest', ],
			['Plantation Forest', ],
			['Dense Woodland', ],
			['Moderate Woodland', ],
			['Sparse Woodland', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Bushland', ],
			['Open Bushland', ],
			['Perennial Commercial Cropland', ],
			['Annual Commercial Cropland', ],
			['Subsistence Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "zambia_landcover_2010_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "zambia_landcover_2010_scheme_ii",
		"stats": [
			['No Data', ],
			['Moderate Dense Forest', ],
			['Low Dense Forest', ],
			['Open Dense Forest', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shrubland', ],
			['Open Shrubland', ],
			['Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "zambia_landcover2_2000_scheme_i",
		"stats": [
			['No data', ],
			['Forestland', ],
			['Grassland', ],
			['Cropland', ],
			['Wetland', ],
			['Settlement', ],
			['Otherland', ]
		]
	},
	{
		"name": "zambia_landcover2_2000_scheme_ii",
		"stats": [
			['No Data', ],
			['Moderate Dense Forest', ],
			['Low Dense Forest', ],
			['Open Dense Forest', ],
			['Closed Grassland', ],
			['Open Grassland', ],
			['Closed Shrubland', ],
			['Open Shrubland', ],
			['Cropland', ],
			['Wetland', ],
			['Water Body', ],
			['Settlement', ],
			['Otherland', ]
		]
	}

];
		
Ext.define('LandCover.controller.WebMapping.countryConfigs', {
	extend: 'Ext.app.Controller',
	init: function(){

	}
});