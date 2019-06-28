from ._version import version_info, __version__

from .main import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'ipygoldenlayout',
        'require': 'ipygoldenlayout/extension'
    }]
