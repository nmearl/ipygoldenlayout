#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Nicholas Earl.
# Distributed under the terms of the Modified BSD License.

import pytest

from ..example import IPyGLWidget


def test_example_creation_blank():
    w = IPyGLWidget()
    assert w.value == 'Hello World'
