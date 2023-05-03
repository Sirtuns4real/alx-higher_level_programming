#!/bin/bash
# Bash script that shows all HTTP methods the server
curl -sI "$1" | grep "Allow" | cut -d " " -f 2-
