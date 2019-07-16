// Copyright (c) Nicholas Earl
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel, DOMWidgetView, ISerializers
} from '@jupyter-widgets/base';

import {
  MODULE_NAME, MODULE_VERSION
} from './version';

// import * as GoldenLayout from 'golden-layout';
const GoldenLayout = require('golden-layout');

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';
import './custom.css';


export
class IPyGLModel extends DOMWidgetModel {
  defaults() {
    return {...super.defaults(),
      _model_name: IPyGLModel.model_name,
      _model_module: IPyGLModel.model_module,
      _model_module_version: IPyGLModel.model_module_version,
      _view_name: IPyGLModel.view_name,
      _view_module: IPyGLModel.view_module,
      _view_module_version: IPyGLModel.view_module_version,
      value : 'Hello World'
    };
  }

  static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
  };

  static model_name = 'IPyGLModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ExampleView';   // Set to null if no view
  static view_module = MODULE_NAME;   // Set to null if no view
  static view_module_version = MODULE_VERSION;
}


export
class IPyGLView extends DOMWidgetView {
  private readonly mountPoint: HTMLDivElement;
  private layout: any;

  constructor(...args: any[]) {
    super(...args);
    console.log("HERE");
    this.mountPoint = document.createElement('div');
    this.mountPoint.setAttribute('id', 'ipygl-area');

    let config = {
      dimensions: {
        borderWidth: 5,
        minItemHeight: 10,
        minItemWidth: 10,
        headerHeight: 20,
        dragProxyWidth: 300,
        dragProxyHeight: 200
      },
      content: [{
        type: 'row',
        content: [{
          type:'component',
          componentName: 'example',
          componentState: { text: 'Component 1' },
          isClosable: true
        },
        {
          type:'component',
          componentName: 'example',
          componentState: { text: 'Component 2' },
          isClosable: true
        }]
      }]
    };

    this.layout = new GoldenLayout( config, this.mountPoint );
  }

  render() {
    this.el.appendChild(this.mountPoint);
    // this.value_changed();
    // this.model.on('change:value', this.value_changed, this);

    this.layout.registerComponent( 'example', function( container: any, state: any ){
      container.getElement().html( '<h2>' + state.text + '</h2>');
    });

    this.layout.init();
  }

  value_changed() {
    this.el.textContent = this.model.get('value');
  }
}
