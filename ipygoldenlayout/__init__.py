from ._version import version_info, __version__

from .widget import *


def _jupyter_labextension_paths():
    return [{
        'src': 'labextension',
        'dest': 'jupyter-golden-layout',
    }]


def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'nbextension',
        'dest': 'jupyter-golden-layout',
        'require': 'jupyter-golden-layout/extension'
    }]
