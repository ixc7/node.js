#!/bin/bash

if [ -z $1  ]
then
  echo -e "usage: run { true | false }\n"
else
  $(dirname "$0")/index.js $1
  [ $? -eq 0 ] && echo -e  "passed tests\n"
  [ $? -eq 1 ] && echo -e "failed tests\n"
fi
