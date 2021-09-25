#!/bin/bash

if [ -z $1  ]
then
  echo "usage: run {true|false}"
else
  ./index.js $1
  [ $? -eq 0 ] && echo "passed tests"
  [ $? -eq 1 ] && echo "failed tests"
fi
