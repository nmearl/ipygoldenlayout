/* eslint camelcase: off */
import { VueModel } from 'jupyter-vue';

export class GoldenLayoutModel extends VueModel {
    defaults() {
        return {
            ...super.defaults(),
            ...{
                _model_name: 'GoldenLayoutModel',
                _model_module: 'jupyter-golden-layout',
                _view_module_version: '0.2.0',
                _model_module_version: '0.2.0',
                group: null,
                tag: null,
                component_data: null,
            },
        };
    }

    getVueTag() {
        return 'golden-layout';
    }
}

VueModel.serializers = {
    ...VueModel.serializers,
};
