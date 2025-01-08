#!/bin/bash

echo "commits" 1>&2

for i in $1; do
    echo "$i" 1>&2
done

echo "releases" 1>&2

for i in $2; do
    echo "$i" 1>&2
done

echo "lastRelease" 1>&2

echo "$3" 1>&2

if [ -n "$1" ]; then
    echo "A release is happening" 1>&2
    echo "$1" 1>&2
    exit 1
else
    echo "No release, killing CI" 1>&2
    exit 1
fi