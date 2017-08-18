#!/usr/bin/env bash

# to execute: "./watcher.sh &" runs in the background now.

echo " "
echo "watching! sccc => css conversion"
echo "To kill background task: pkill -f watcher.sh"
echo " "

sass --watch public/SCSS:public/CSS
