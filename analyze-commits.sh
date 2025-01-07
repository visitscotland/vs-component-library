#!/bin/bash

echo $1 1>&2

if [ -n "$1" ] && [ "$1" == "releases" ]; then
    echo "$1" 1>&2
    exit 0
else
    echo "$@" 1>&2
    exit 1
fi