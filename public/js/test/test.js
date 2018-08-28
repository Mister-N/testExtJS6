Ext.define('Test', {
  extend: 'Ext.Component',
  xtype: ['test'],
  config: {},
  constructor: function (config) {
    config = config || {};
    Test.superclass.constructor.call(this, config);
  }
});

Test = new Test();