#!/bin/bash

# pass ANYTHING to run.sh for index.js to exit with 0 instead of 1.
./index.js $1

[ $? -eq 0 ] && echo "PASSED"
[ $? -eq 1 ] && echo "FAILED"
