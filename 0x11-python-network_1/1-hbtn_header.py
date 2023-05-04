#!/usr/bin/python3
"""
This script sends a request to a given URL and displays the value of the X-Request-Id variable
found in the header of the response.
"""

import urllib.request
import sys


def display_header_value(url):
    """
    Sends a request to the given URL and displays the value of the X-Request-Id variable
    found in the header of the response.
    """
    with urllib.request.urlopen(url) as response:
        header = response.info()
        if 'X-Request-Id' in header:
            print(header.get('X-Request-Id'))


if __name__ == '__main__':
    display_header_value(sys.argv[1])
