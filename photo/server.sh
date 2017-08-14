#!/usr/bin/env bash

# to execute: "./server.sh &" runs in the background now.

echo " "
echo "Running http-server in background"
echo "To kill background task: pkill -f server.sh"
echo " "

http-server
