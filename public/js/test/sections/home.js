Ext.define('Test.Tabs', {
  xtype: ['test-tabs'],
  extend: 'Ext.TabPanel',
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
    this.callParent(arguments);
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
          items:[
            {
            title: 'Вариант 1',
            layout: 'anchor',
            id:'firs-tab',
            items: [{
              html: '<h2>Первый вариант бесконечной прокрутки</h2> ',
              cls: 'panel-desc',
            }
              ,{
                xtype: 'test-grid-first',
                cls: 'main-wrapper',
                id: 'grid-infin-1',
              }
            ]
          },
            ,{
              title: 'Второй',
              layout: 'anchor',
              items: [{
                html: '<h2> Второй вариант бесконечной прокрутки.</h2> ',
                cls: 'panel-desc',
              }
                ,{
                  xtype: 'test-grid-second',
                  id: 'grid-infin-2',
                  cls: 'main-wrapper',
                  tbar: [{
                    text: 'console store',
                    store: this,
                    handler: function() {
                      var grid = this.findParentByType('test-grid-second');
                      console.log(grid.getStore().data);
                    }
                  },{
                    text: 'capture grid events',
                    handler: function() {

                      Ext.util.Observable.capture(
                        Ext.getCmp('gtid-infin').getStore(),
                        function(e) {
                          let ignor = ['beforeitemmouseenter', 'itemmouseenter', 'containermouseover', 'beforeitemmouseleave', 'itemmouseleave',
                              'containermouseout', 'beforecontainermouseout', 'beforecontainermouseover']
                              .indexOf(e) >= 0;
                          if(!ignor)
                            console.info('>>', e);
                        }
                      );

                    }
                  }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
    this.callParent(arguments);
  }
});


