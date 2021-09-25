#!/bin/bash

./index.js

[ $? -eq 0 ] && echo "PASSED"
[ $? -eq 1 ] && echo "FAILED"
