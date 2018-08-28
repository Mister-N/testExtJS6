Ext.define('Test.Tabs', {
  xtype: ['test-tabs'],
  extend: 'Ext.TabPanel',
  // alias: 'test-panel-home',
  // config: {},
  constructor: function (config) {
    config = config || {};
    Ext.applyIf(config, {
      enableTabScroll: true
      ,layoutOnTabChange: true
      ,plain: true
      ,deferredRender: true
      ,hideMode: 'offsets'
      ,defaults: {
        autoHeight: true
        ,hideMode: 'offsets'
        ,border: true
        ,autoWidth: true
        ,bodyCssClass: 'tab-panel-wrapper'
      }
      ,activeTab: 0
      ,border: false
      ,autoScroll: true
      ,autoHeight: true
      ,cls: 'test-tabs'
    });
    Test.Tabs.superclass.constructor.call(this,config);
    this.config = config;
  }
});

Ext.define('Test.panel.Home', {
  xtype: 'test-panel-home',
  extend: 'Ext.Panel',
  config: {},
  constructor: function (config) {
    config = config || {};
    Ext.apply(config, {
      baseCls: 'test-formpanel',
      renderTo: 'test',
      layout: 'anchor',
      hideMode: 'offsets',
      items: [{
        html: '<h1> Большой заголовок!</h1>',
        cls: '',
        style: {margin: '15px 0;padding:10px'}
      },
        {
          xtype: 'test-tabs',
          defaults: {border: false, autoHeight: true},
          border: true,
          hideMode: 'offsets',
          items: [
            {
            title: 'Вариант 1',
            layout: 'anchor',
            items: [{
              html: '<h2>Первый вариант бесконечной прокрутки</h2> ',
              cls: 'panel-desc'
            }
              ,{
                xtype: 'test-grid-first',
                cls: 'main-wrapper'
              }
            ]
          }
          ]
        }
      ]
    });
    Test.panel.Home.superclass.constructor.call(this, config);
  }
});

// Ext.define('Test.Home', {
//   xtype: ['test-page-home'],
//   extend: 'Ext.Component',
//   // config: {},
//   constructor: function (config) {
//     console.log('start test test-page-home')
//     config = config || {};
//     Ext.applyIf(config, {
//       components: [{
//         xtypes: 'test-panel-home',
//         renderTo: 'test'
//       }]
//     });
//     Test.Home.superclass.constructor.call(this, config);
//   }
// });


