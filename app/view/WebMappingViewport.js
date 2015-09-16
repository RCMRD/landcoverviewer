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
	title: "Layers",
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
            html:'<div class="logos"><a target="new" href="http://www.usaid.gov/"><img alt="USAID" width="134" height="40" src="assets/images/usaid.png"></a>'+
            '<a target="new" href="http://www.rcmrd.org/?page_id=5130"><img alt="SERVIR East and Southern Africa" width="240" height="35" src="assets/images/servir-easafricab.png"></a>'+
            '<a target="new" href="http://www.nasa.gov/"><img alt="NASA" width="49" height="40" src="assets/images/nasa.png"></a> </div>'
        }
    ]
}); 




SingleSearchForm = Ext.create('Ext.form.Panel', {
    bodyPadding: 10,
    id: 'single_search_id', 
    title: 'Search',
    collapsible: true,
    items: [

        {
            xtype: 'datefield',
            anchor: '100%',
            id: 'single_date_search_id',
            fieldLabel: 'Select a Date',
            name: 'one_date',
            //value: new Date(),
           // renderer: Ext.util.Format.dateRenderer('Y-m-d'),
            format:'Y-m-d',
            submitFormat: 'Y-m-d',
            submitValue : true,
            maxValue: new Date()  // limited to the current date or prior
        }
    ],
    buttons:
	[
		{
			text: 'Search',
            id:'singleSearchButtonId',
			width: 50,
			action: 'singleSearchAction'
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
    width: 300,
    minWidth: 200,
    collapsible: true,
    title: 'Layers and Search',
   // preventHeader: true,
    //  hideCollapseTool: true,
    split: true,
    items: [layer_legend_tree, SingleSearchForm, LogoPanel],
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
     width:200,
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
     layers: []
 });

 legend_popup = new Ext.Window({
     extend: 'Ext.window.Window',
     title:'Legend',
     width: 200,
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
             window.anchorTo("GeoExtMapPanelId", "bl", [0, -235]);
             Ext.select('#legend_popup_id .x-tool-restore').setStyle('display', 'none');
             Ext.select('#legend_popup_id .x-tool-minimize').setStyle('display', 'block');
         }
     }]
 });

 Ext.onReady(function(){


     legend_popup.show();
     legend_popup.anchorTo("GeoExtMapPanelId", "bl", [0, -235]);
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
                    '<div class="logobox"><a target="new" href="http://rcmrd.org/"><img alt="RCMRD" width="153"' +
                    ' height="53" class="rcmrd" src="assets/images/rcmrd.png"></a></div><h1 class="topheader">'+
					'Land Cover Viewer</h1></div></div></div></div>'
				},
				{
					xtype: 'MapPanel'
				},
                 WestPanel
			]
        });
        me.callParent(arguments);
    }
});