ipygoldenlayout
===============================

IPyWidgets implementation of GoldenLayout JS package

Installation
------------

To install use pip:

    $ pip install ipygoldenlayout
    $ jupyter nbextension enable --py --sys-prefix ipygoldenlayout

To install for jupyterlab

    $ jupyter labextension install ipygoldenlayout

For a development installation (requires npm),

    $ git clone https://github.com/nmearl/ipygoldenlayout.git
    $ cd ipygoldenlayout
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix ipygoldenlayout
    $ jupyter nbextension enable --py --sys-prefix ipygoldenlayout
    $ jupyter labextension install js

When actively developing your extension, build Jupyter Lab with the command:

    $ jupyter lab --watch

This take a minute or so to get started, but then allows you to hot-reload your javascript extension.
To see a change, save your javascript, watch the terminal for an update.

Note on first `jupyter lab --watch`, you may need to touch a file to get Jupyter Lab to open.

