#!/bin/bash

if [ -n "$1" ] && [ "$1" == "releases" ]; then
    echo "$1"
    exit 0
else
    echo "$@"
    exit 1
fi