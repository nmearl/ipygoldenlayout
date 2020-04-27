import ipywidgets as widgets
from traitlets import Unicode, Dict

__all__ = ['GoldenLayout']


@widgets.register
class GoldenLayout(widgets.DOMWidget):
    """An example widget."""
    _model_name = Unicode('GoldenLayoutModel').tag(sync=True)
    _model_module = Unicode('jupyter-golden-layout').tag(sync=True)
    _model_module_version = Unicode('^0.3.0').tag(sync=True)

    group = Dict().tag(sync=True)
    tag = Unicode().tag(sync=True)
    component_data = Dict().tag(sync=True)
