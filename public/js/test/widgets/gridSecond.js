Ext.onReady(function() {
    let store = Ext.create('Ext.data.Store', {
        id: 'store2',
        fields: [
            'id', 'polnNaimUr', 'innUr', 'subRf'
        ],
        autoLoad: true,
        pageSize: 500,
        proxy: {
            type: 'rest',
            url: '/application/api',
            reader: {
                rootProperty: 'results',
                totalProperty: 'total',
            },
            simpleSortMode: true
        },
        sorters: [{
            property: 'polnNaimUr',
            direction: 'ASC'
        }],
    });

    Ext.define('Test.grid.Second', {
        xtype: 'test-grid-second',
        extend: 'Test.grid.InfiniteScroll',
        bottomScroll: 0,
        height: 500,
        collapsible: true,
        title: 'первый',
        store: store,
        loadMask: true,
        selModel: {
            pruneRemoved: false
        },
        columns:[{
            xtype: 'rownumberer',
            width: 60,
            sortable: false,
            locked: true,
            lockable: false
        },{
            tdCls: 'x-grid-cell-topic',
            text: "ID",
            dataIndex: 'id',
        },{
            text: "polnNaimUr",
            width: 200,
            dataIndex: 'polnNaimUr',
        },{
            width: 200,
            text: "subRf",
            dataIndex: 'subRf',
        },{
            text: "innUr",
            dataIndex: 'innUr',
            sortable: false
        }]
    });
});
