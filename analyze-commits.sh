#!/bin/bash

for i in $@;do
    echo $i 1>&2
done;

if [ -n "$1" ] && [ "$1" == "releases" ]; then
    echo "$1" 1>&2
    exit 0
else
    echo "$@" 1>&2
    exit 1
fi