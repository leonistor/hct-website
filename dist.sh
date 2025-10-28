#!/bin/bash

PROJECT="hct-pb-data"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M")
NAME="$PROJECT-$TIMESTAMP"

mkdir -p build
tar --exclude=./pocket/pb_data/backups -czf "build/$NAME.tar.gz" pocket/.pocketbase-version pocket/pb_data

echo "Done archive at: build/$NAME.tar.gz"

# !!! .env
# bun run dev --allowed-hosts=pop-os.lan
# tar xzvf hct-pb-data-2025-10-28_13-56.tar.gz --directory hct-website
