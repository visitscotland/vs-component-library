#!/bin/bash

if [ -n "$1" ]; then
    echo "$1" 1>&2
    exit 0
else
    exit 1
fi