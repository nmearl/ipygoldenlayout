import { DOMWidgetModel, DOMWidgetView, ISerializers } from '@jupyter-widgets/base';
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';
import './custom.css';
export declare class IPyGLModel extends DOMWidgetModel {
    defaults(): any;
    static serializers: ISerializers;
    static model_name: string;
    static model_module: any;
    static model_module_version: any;
    static view_name: string;
    static view_module: any;
    static view_module_version: any;
}
export declare class IPyGLView extends DOMWidgetView {
    private readonly mountPoint;
    private myLayout;
    constructor(...args: any[]);
    render(): void;
    value_changed(): void;
}
