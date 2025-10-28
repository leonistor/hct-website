#!/bin/bash

PROJECT="hct"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M")
NAME="$PROJECT-data-$TIMESTAMP"

mkdir -p build
tar -czf "build/$NAME.tar.gz"

echo "Done archive at: build/$NAME.tar.gz" pocket/pb_data dist
echo "Now copy it to server."
