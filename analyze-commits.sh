#!/bin/bash

if [ -n "$1" ] && [ "$1" == "releases" ]; then
    echo "$1"
    exit 0
else
    exit 1
fi