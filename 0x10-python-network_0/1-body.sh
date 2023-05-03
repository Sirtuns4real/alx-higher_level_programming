#!/bin/bash
# A bash Script that displays 
# only body of 200 Status
curl -sfL "$1" -X GET
