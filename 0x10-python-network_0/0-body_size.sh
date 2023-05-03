#!/bin/bash
# A bash Script that displays the Content-Length from a HTTP request
curl -sI "$1" | grep "Content-Length:" | cut -d " " -f 2
