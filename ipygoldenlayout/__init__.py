from ._version import version_info, __version__

from .widget import *


def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter-golden-layout',
        'require': 'jupyter-golden-layout/extension'
    }]
