#!/bin/bash

echo "$1" 1>&2

echo "$2" 1>&2

echo "$3" 1>&2

if [ -n "$1" ]; then
    echo "$1" 1>&2
    exit 0
else
    exit 1
fi