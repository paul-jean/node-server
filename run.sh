#!/bin/sh

echo "Starting web server on localhost 8888 ..."
# node index.js 2>&1 &

request () {
  path="$1"
  response=$(echo -e "GET $path HTTP/1.0\n\r\n\r" | nc localhost 8888)
  echo "$response"
}

echo "Request for / ..."
request "/"

echo "Request for /start ..."
request "/start"

echo "Request for /upload ..."
request "/upload"
