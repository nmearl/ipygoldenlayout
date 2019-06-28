import ipywidgets as widgets
from traitlets import Unicode


@widgets.register
class IPyGoldenLayout(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('IPyGLView').tag(sync=True)
    _model_name = Unicode('IPyGLModel').tag(sync=True)
    _view_module = Unicode('ipygoldenlayout').tag(sync=True)
    _model_module = Unicode('ipygoldenlayout').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)
