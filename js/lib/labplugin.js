var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'ipygoldenlayout',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ipygoldenlayout',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

