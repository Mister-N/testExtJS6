Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*'
]);

Ext.onReady(function(){
    Ext.define('ForumThread', {
        extend: 'Ext.data.Model',
        fields: [
            'id', 'polnNaimUr', 'innUr', 'subRf'
        ],
        idProperty: 'threadid'
    });

    // create the Data Store
    var store = Ext.create('Ext.data.BufferedStore', {
        id: 'store',
        model: 'ForumThread',
        remoteSort: true,
        pageSize: 100,
        proxy: {
            // load using script tags for cross domain, if the data in on the same domain as
            // this page, an HttpProxy would be better
            type: 'jsonp',
            url: 'http://0.0.0.0:8080/application/api',
            reader: {
                rootProperty: 'results',
                totalProperty: 'total'
            },
            // sends single sort as multi parameter
            simpleSortMode: true
        },
        sorters: [{
            property: 'lastpost',
            direction: 'DESC'
        }],
        autoLoad: true
    });

    function renderTopic(value, p, record) {
        return Ext.String.format(
          '<a href="http://sencha.com/forum/showthread.php?t={2}" target="_blank">{0}</a>',
          value,
          record.data.forumtitle,
          record.getId(),
          record.data.forumid
        );
    }

    var grid = Ext.create('Ext.grid.Panel', {
        width: 700,
        height: 500,
        collapsible: true,
        title: 'ExtJS.com - Browse Forums',
        store: store,
        loadMask: true,
        selModel: {
            pruneRemoved: false
        },
        multiSelect: true,
        viewConfig: {
            trackOver: false
        },
        // grid columns
        columns:[{
            xtype: 'rownumberer',
            width: 50,
            sortable: false,
            locked: true,
            lockable: false
        },{
            tdCls: 'x-grid-cell-topic',
            text: "ID",
            dataIndex: 'id',
            flex: 1,
            sortable: false
        },{
            text: "polnNaimUr",
            dataIndex: 'polnNaimUr',
            width: 100,
            hidden: true,
            sortable: true
        },{
            text: "innUr",
            dataIndex: 'innUr',
            width: 70,
            sortable: false
        },{
            id: 'subRf',
            text: "subRf",
            dataIndex: 'subRf',
            width: 130
        }],
        renderTo: Ext.getBody()
    });
});