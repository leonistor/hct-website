#!/bin/bash

PROJECT="hct"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M")
NAME="$PROJECT-$TIMESTAMP"

mkdir -p build
tar --exclude=./pocket/pb_data/backups -czf "build/$NAME.tar.gz" pocket/.pocketbase-version pocket/pb_data dist

echo "Done archive at: build/$NAME.tar.gz"

# get https://github.com/pocketbase/pocketbase/releases/download/v0.31.0/pocketbase_0.31.0_linux_amd64.zip
# unzip pocketbase_0.31.0_linux_amd64.zip -x CHANGELOG.md LICENSE.md -d pocket/
