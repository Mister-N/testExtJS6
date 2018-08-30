Ext.onReady(function() {
  let store = Ext.create('Ext.data.BufferedStore', {
    id: 'store',
     fields: [
       'id', 'polnNaimUr', 'innUr', 'subRf'
     ],
    autoLoad: true,
    pageSize: 50,
    proxy: {
      type: 'rest',
      // type: 'jsonp',
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

  Ext.define('Test.grid.First', {
    xtype: 'test-grid-first',
    extend: 'Ext.grid.Panel',
    height: 500,
    collapsible: true,
    title: 'первый',
    store: store, // хотелось бы конечно функцией getStore
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
      id: 'subRf',
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
