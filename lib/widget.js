"use strict";
// Copyright (c) Nicholas Earl
// Distributed under the terms of the Modified BSD License.
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("@jupyter-widgets/base");
const version_1 = require("./version");
// import * as GoldenLayout from 'golden-layout';
const GoldenLayout = require('golden-layout');
class IPyGLModel extends base_1.DOMWidgetModel {
    defaults() {
        return Object.assign({}, super.defaults(), { _model_name: IPyGLModel.model_name, _model_module: IPyGLModel.model_module, _model_module_version: IPyGLModel.model_module_version, _view_name: IPyGLModel.view_name, _view_module: IPyGLModel.view_module, _view_module_version: IPyGLModel.view_module_version, value: 'Hello World' });
    }
}
IPyGLModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
IPyGLModel.model_name = 'IPyGLModel';
IPyGLModel.model_module = version_1.MODULE_NAME;
IPyGLModel.model_module_version = version_1.MODULE_VERSION;
IPyGLModel.view_name = 'ExampleView'; // Set to null if no view
IPyGLModel.view_module = version_1.MODULE_NAME; // Set to null if no view
IPyGLModel.view_module_version = version_1.MODULE_VERSION;
exports.IPyGLModel = IPyGLModel;
class IPyGLView extends base_1.DOMWidgetView {
    constructor(...args) {
        super(...args);
        console.log("HERE");
        this.mountPoint = document.createElement('div');
        this.mountPoint.setAttribute('id', 'ipygl-area');
        let config = {
            content: [{
                    type: 'row',
                    content: [{
                            type: 'component',
                            componentName: 'example',
                            componentState: { text: 'Component 1' }
                        },
                        {
                            type: 'component',
                            componentName: 'example',
                            componentState: { text: 'Component 2' }
                        }]
                }]
        };
        this.myLayout = new GoldenLayout(config, this.mountPoint);
    }
    render() {
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
        this.el.appendChild(this.mountPoint);
        this.myLayout.registerComponent('example', function (container, state) {
            container.getElement().html('<h2>' + state.text + '</h2>');
        });
        this.myLayout.init();
    }
    value_changed() {
        this.el.textContent = this.model.get('value');
    }
}
exports.IPyGLView = IPyGLView;
//# sourceMappingURL=widget.js.map