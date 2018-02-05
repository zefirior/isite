#!/usr/bin/python3.4
# -*- coding: utf-8 -*-

import os
import sys


# путь до проекта
sys.path.insert(0, './src')

# подключаем окружение
sys.path.insert(0, './venv/lib/site-packages/')

# создаем экземпляр application для wsgi

from flaskapp import app as application