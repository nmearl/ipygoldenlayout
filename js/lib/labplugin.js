var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-golden-layout',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-golden-layout',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

