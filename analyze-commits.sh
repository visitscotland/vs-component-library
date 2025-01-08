#!/bin/bash

echo "commits" 1>&2
echo "$1" | jq -c '.[]' | while read -r commit; do
    echo "$commit" 1>&2
done

echo "releases" 1>&2
echo "$2" | jq -c '.[]' | while read -r release; do
    echo "$release" 1>&2
done

echo "lastRelease" 1>&2
echo "$3" | jq -c '.'

if [ -n "$1" ]; then
    echo "A release is happening" 1>&2
    exit 1
else
    echo "No release, killing CI" 1>&2
    exit 1
fi