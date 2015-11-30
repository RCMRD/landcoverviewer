 Ext.define('Download', {
     extend: 'Ext.data.Model',
     fields: [
         {name: 'label1', type: 'string'},
         {name: 'url1',  type: 'string'}
        
     ]
 });

 //var conservation_area_store_url;
layers_tree_store = Ext.create('Ext.data.TreeStore', {
	model: 'GeoExt.data.LayerTreeModel',
	root: {
		expanded: true,
		children: 
		[
			{
				text: "Base Maps",
				plugins: ['gx_baselayercontainer'],
				collapsed: true
			}, 
			{
				text: "Overlays",
				plugins: ['gx_overlaylayercontainer'],
				expanded: true
			}
		]
	}
});

layer_legend_tree = Ext.create('GeoExt.tree.Panel', {
	title: "",
	autoScroll: true,
    collapsible: true,
    //preventHeader: true,
 	viewConfig:
	{
		plugins: [{
			ptype: 'treeviewdragdrop',
			appendOnly: false
		}]
	},
	store: layers_tree_store,
    listeners:{
        'checkchange': function(node, checked){
           
            var legend_container = document.getElementById('legend_items-innerCt'); 
            
            if(checked &&  (range_search_heatmap.visibility===true)){
                //console.log('Checked'); 
                Ext.get('heatmap_legend').show(); 
                legend_container.getElementsByTagName('div')[4].style.display='none'; //range_search_heatmap legend
            } else if (!checked && (range_search_heatmap.visibility===false)){
                //console.log('Unchecked'); 
                if ( Ext.get('heatmap_legend')) { 
                    Ext.get('heatmap_legend').hide();  
                }           
            }
            if (checked &&  (range_search_fire_layer.visibility===true)) {
              //  console.log('Checked'); 
                //legend_container.getElementsByTagName('div')[1].style.display='block'; 
            }else {
               // console.log('UnChecked'); 
            }
        }
    },
	rootVisible: false,
	lines: false
});



LogoPanel = new Ext.Panel({  
    region: 'south',      
    xtype: 'panel',
    id: 'logopanelID',
    height: 90,
    width: 330,
    minWidth: 260,
    collapsible: true,
    collapseMode: 'mini',
    preventHeader: true,
    split: true,
    items:[
        {
            xtype: 'panel',
            html:'<div class="logos"><a target="new" href="http://www.rcmrd.org/?page_id=5130"><img alt="SERVIR East and Southern Africa" width="240" height="35" src="assets/images/servir-easafricab.png"></a>'+
            '<a target="new" href="http://www.usaid.gov/"><img alt="USAID" width="134" height="40" src="assets/images/usaid.png"></a>'+
            '<a target="new" href="http://www.nasa.gov/"><img alt="NASA" width="49" height="40" src="assets/images/nasa.png"></a> </div>'
        }
    ]
}); 




SingleSearchForm = Ext.create('Ext.form.Panel', {
    bodyPadding: 10,
    id: 'single_search_id', 
    title: 'Select',
    height: 200,
    collapsible: true,
    items: [

                {
                    xtype: 'combobox',
                    fieldLabel: 'Country',
                    name: 'country',
                    id: 'country',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.ghg.countries 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select country...',
                    listeners:{
                        'select': function(valueField){
                            
                        }
                    }
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Classification Scheme',
                    disabled: true,
                    name: 'scheme',
                    id: 'scheme',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value', '_label'],
                        data : Ext.ghg.schemes 
                    }),
                    valueField: '_value',
                    displayField: '_label',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select scheme...'
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Year',
                    disabled: true,
                    name: 'year1',
                    id: 'year1',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['_value'],
                        data : Ext.ghg.years 
                    }),
                    valueField: '_value',
                    displayField: '_value',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select year...'
                }

    ],
    buttons:
	[
		{
			text: 'Statistics',
            id:'stats_button',
			width: 50,
			action: 'loadStats'
		}
	]
});

    var down_urls = [];
    for(var b=0; b < countrydata[0].downLoadURLs.length; b++){
        //var _link = countrydata[0].downLoadURLs[b];
        var _link = "<a href='" + countrydata[0].downLoadURLs[b] + "'>" + countrydata[0].downLoadURLs[b] + "</a>";
        down_urls.push({label1: _link});
    }
    // create the Downloads Store
   var downstore = Ext.create('Ext.data.Store', {
    model: 'Download',
    data: down_urls

   });

    // create the grid
    var downloads = Ext.create('Ext.grid.Panel', {
        store: downstore,
        id: 'downgrid',
        columns: [
            {text: "Downloads", width: 320, dataIndex: 'label1'}
            
            
        ],
        //renderTo:'example-grid',
        width: 320,
        height: 250
    });

    GeoExtPanel = new Ext.Panel ({
        region: 'west',
        xtype: 'panel',
        width: 300,
        minWidth: 200,
        height: 600, 
        autoScroll: true,
        active:true,
       // maxWidth: 500,
        listeners: {
            resize: Ext.Function.bind(function(comp, width, height,
                    oldWidth, oldHeight, eOpts) {
                comp.doLayout();
            }, this)
        },
        title: 'Layers',
        collapsible: true,
        split: true,
        items: [layer_legend_tree, SingleSearchForm]

    }); 

var GeneralTabs = Ext.create('Ext.tab.Panel', {
    id: "generaltabsID",
    layout: 'card',
    region: 'west',
    width:330,
    minWidth:200,
    //height: 600, 
    autoScroll: true,
    animate: true,
    preventHeader: true,
     hideCollapseTool: true,
    collapsible: true,
    activeTab: 0,
    split: true,
    tabPosition: 'top',
    items: [
            GeoExtPanel, 
        {
            title: 'Downloads',
            items:[downloads]
        }
    ]
});

 function fix_to_bottom(){

     if (legend_popup.collapsed){
         legend_popup.anchorTo("GeoExtMapPanelId", "bl", [0, -30]);
     }else {
         legend_popup.anchorTo("GeoExtMapPanelId", "bl", [0, -235]);
     }
 }

WestPanel = new Ext.Panel({  
    region: 'west',
    xtype: 'panel',
    width: 330,
    minWidth: 200,
    collapsible: true,
    title: 'Map',
   // preventHeader: true,
    //  hideCollapseTool: true,
    split: true,
    //items: [layer_legend_tree, SingleSearchForm, downloads, LogoPanel],
    items: [GeneralTabs, LogoPanel],
    listeners: {
        collapse: function() {
            fix_to_bottom();
        },
        expand: function() {
            fix_to_bottom();
        }
    }

});


 legendPanel = Ext.create ('GeoExt.LegendPanel', {
     bodyStyle: 'padding:5px',
     autoScroll: true,
     header:false,
     id:"legend_id",
     width:240,
     height:205,
     collapsible: true,
     defaults: {
         style: 'padding:5px',
         baseParams: {
             FORMAT: 'image/png',
             LEGEND_OPTIONS: 'forceLabels:on;fontName=Verdana;fontSize:12',
             WIDTH:'16',
             HEIGHT:'12'
         }
     },
     lines: false,
     layers: ["ethiopia_landcover_2003_scheme_i", "ethiopia_landcover_2003_scheme_ii",
                "ethiopia_landcover_2008_scheme_i", "ethiopia_landcover_2008_scheme_ii"]
     
 });

 legend_popup = new Ext.Window({
     extend: 'Ext.window.Window',
     title:'Legend',
     width: 240,
     id:'legend_popup_id',
     minimizable: true,
     closable:false,
     collapseDirection: Ext.Component.DIRECTION_BOTTOM,
     items:[legendPanel],
     listeners: {
         show: function() {
             Ext.select('#legend_popup_id .x-tool-restore').setStyle('display', 'none');
             Ext.select('#legend_popup_id .x-tool-minimize').setStyle('display', 'block');
         },
         "minimize": function (window, opts) {
             window.collapse();
             window.setWidth(150);
             window.anchorTo("GeoExtMapPanelId", "bl", [0, -30]);
             Ext.select('#legend_popup_id .x-tool-restore').setStyle('display', 'block');
             Ext.select('#legend_popup_restore_id').setStyle('left', '122px');
             Ext.select('#legend_popup_restore_id').setStyle('z-index', '100');
             Ext.select('#legend_popup_id .x-tool-minimize').setStyle('display', 'none');
         }
     },
     tools: [{
         type: 'restore',
         id: 'legend_popup_restore_id',
         handler: function (evt, toolEl, owner, tool) {
             var window = owner.up('window');
             window.setWidth(200);
             window.expand('', false);
             window.anchorTo("GeoExtMapPanelId", "bl", [0, -350]);
             Ext.select('#legend_popup_id .x-tool-restore').setStyle('display', 'none');
             Ext.select('#legend_popup_id .x-tool-minimize').setStyle('display', 'block');
         }
     }]
 });

 var chart_1 = new Ext.Panel({
        //region: 'west',
        xtype: 'panel',
        width: 300,
        //minWidth: 200,
        height: 400, 
        autoScroll: true,
        active:true,
       // maxWidth: 500,
        // title: 'Layers',
        collapsible: true,
        split: true,
        contentEl: 'chart1_div',

    }); 

 var chart_2 = new Ext.Panel({
        //region: 'west',
        xtype: 'panel',
        width: 300,
        //minWidth: 200,
        height: 400, 
        autoScroll: true,
        active:true,
       // maxWidth: 500,
        // title: 'Layers',
        collapsible: true,
        split: true,
        contentEl: 'chart2_div',

    }); 

 Ext.onReady(function(){


     legend_popup.show();
     legend_popup.anchorTo("GeoExtMapPanelId", "bl", [0, -350]);
     window.onresize = function() {
         fix_to_bottom();
     };

 });

 Ext.define('LandCover.view.WebMappingViewport',
{
    extend: 'Ext.container.Viewport',
    alias: 'widget.WebMappingViewport',
	id: 'viewportId',
	renderTo: Ext.getBody(),
    layout: {
        type: 'border'
    },
    initComponent: function() 
	{
        var me = this;
        Ext.applyIf(me, {
		items: 
			[
				{
					xtype: 'panel',
					region: 'north',
					height: 60, //orignal 60
					html: '<div class="fire"><div class="satimage"><div class="fireimage"><div class="topcont">' +
                    '<div class="logobox"><a href=""><img alt="RCMRD" width="153"' +
                    ' height="53" class="rcmrd" src="assets/images/rcmrd.png"></a></div><h1 class="topheader">'+
					'Land Cover Viewer</h1></div></div></div></div>'
				},
				{
					xtype: 'MapPanel'
				},
                 WestPanel,
                 {
                    // statistics panel
                    xtype: 'panel',
                    region: 'east',
                    id: 'chart',
                    //contentEl: 'chart_div',
                    autoScroll: true,
                    split: true,
                    //height: 200,
                    width: 300,
                    minWidth: 200,
                    //minSize: 100,
                    //maxSize: 200,
                    collapsible: true,
                    collapsed: true,
                    title: 'Statistics',
                    margins: '0 0 0 0',
                    items: [chart_1, chart_2]
                }
			]
        });
        me.callParent(arguments);
    }
});