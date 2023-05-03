#!/bin/bash

# Read URL from command line argument
url=$1

# Send HTTP request using curl and store response body in a variable
response_body=$(curl -sS $url)

# Get size of response body in bytes and display it
body_size=$(echo -n $response_body | wc -c)
echo "Body size: $body_size bytes"
