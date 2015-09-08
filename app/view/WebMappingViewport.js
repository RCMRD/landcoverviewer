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

layer_legend_tree = Ext.create('GeoExt.tree.Panel', 
{
	title: "Layers",
	autoScroll: true,
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

legendPanel = Ext.create ('GeoExt.LegendPanel',{
	defaults: 
	{
		labelCls: '',
		style: 'padding:0px 0px 10px 0px'
	},
	bodyStyle: 'padding:5px',

	title: "Legend",
	height: 300, 
    autoScroll: true,
	collapsible: true,
	lines: false,
	id:"legend_items",
	layers: []
});

LogoPanel = new Ext.Panel({  
    region: 'south',      
    xtype: 'panel',
    id: 'logopanelID',
    height: 90,
    width: 330,
    minWidth: 260,
   // collapsed:true,
   //animCollapse: true,
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
	
GeoExtPanel = new Ext.Panel ({
	region: 'west',
	xtype: 'panel',
	width: 300,
	minWidth: 200,
    height: 400, 
	active:true,
   // maxWidth: 500,
    listeners: {
        resize: Ext.Function.bind(function(comp, width, height,
                oldWidth, oldHeight, eOpts) {
            comp.doLayout();
        }, this)
    },
	title: 'Map Elements',
	collapsible: true,
	split: true,
	items: [layer_legend_tree, legendPanel]

});	







SingleSearchForm = Ext.create('Ext.form.Panel', {
   // width: 300,
    bodyPadding: 10,
    id: 'single_search_id', 
    title: 'Single Search',
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



var GeneralTabs = Ext.create('Ext.tab.Panel', {
	id: "generaltabsID",
	layout: 'card',
	region: 'west',
	width:330,
	minWidth:200,
    height: 400, 
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
            title: 'Search',
            items:[SingleSearchForm]
        }
    ]
});

WestPanel = new Ext.Panel({  
    region: 'west',
    xtype: 'panel',
    layout:'border',
    width: 330,
    minWidth: 200,
    //height: 400, 
    active:true,
    collapsible: true,
    preventHeader: true,
    hideCollapseTool: true,
    split: true,
    items: [GeneralTabs, LogoPanel]

}); 



 	statusbar = new Ext.Panel({
        region: 'south',
        id: 'statusbar', 
		xtype: 'panel',
        width: 350,
        height: 35,
        bbar: Ext.create('Ext.ux.StatusBar', {
            defaultText: '',
             height: 35,
             bodyStyle: 'padding-top:25px;',
            // bodyStyle: 'padding:15px;',
            id: 'statusbar_content_id',
            cls: 'statusbar_content'

        })
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
					'Flood Simulator</h1></div></div></div></div>'
				},
				{
					xtype: 'MapPanel'
				},
                //Navigation,
                 WestPanel,
				statusbar
			]
        });
        me.callParent(arguments);
    }
});