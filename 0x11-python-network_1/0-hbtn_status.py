#!/usr/bin/env python3
"""This script fetches the status of https://alx-intranet.hbtn.io using urllib"""

import urllib.request


def fetch_status():
    """Fetches the status of https://alx-intranet.hbtn.io and displays the response body"""
    url = 'https://alx-intranet.hbtn.io/status'

    with urllib.request.urlopen(url) as response:
        body = response.read()

    print("- type: {}".format(type(body)))
    print("- content: {}".format(body))
    print("- utf8 content: {}".format(body.decode('utf-8')))


if __name__ == '__main__':
    fetch_status()

