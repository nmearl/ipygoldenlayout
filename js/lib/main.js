const widgets = require('@jupyter-widgets/base');
const _ = require('lodash');
const GoldenLayout = require('golden-layout');

// import 'golden-layout/src/css/goldenlayout-base.css';

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var IPyGLModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'IPyGLModel',
        _view_name : 'IPyGLView',
        _model_module : 'ipygoldenlayout',
        _view_module : 'ipygoldenlayout',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World!'
    })
});


// Custom View. Renders the widget model.
var IPyGLView = widgets.DOMWidgetView.extend({
    render: function() {
        let config = {
            content: [{
                type: 'row',
                content: [{
                    type:'component',
                    componentName: 'example',
                    componentState: { text: 'Component 1' }
                },
                {
                    type:'component',
                    componentName: 'example',
                    componentState: { text: 'Component 2' }
                }]
            }]
        };

        this.mountPoint = document.createElement('div');
        this.mountPoint.setAttribute('id', 'ipygl-area');
        // this.mountPoint.textContent = 'HEREHEHREHERHE';

        this.el.appendChild(this.mountPoint);

        this.myLayout = new GoldenLayout( config, this.mountPoint );

        this.myLayout.registerComponent( 'example', function( container, state ){
            container.getElement().html( '<h2>' + state.text + '</h2>');
        });

        this.myLayout.init();

        // this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
    }
});


module.exports = {
    IPyGLModel : IPyGLModel,
    IPyGLView : IPyGLView
};
