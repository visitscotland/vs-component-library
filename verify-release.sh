#!/bin/bash

if [ -n "$1" ] && [ "$1" == "nextRelease" ]; then
    echo "$1"
    exit 0
else
    exit 1
fi