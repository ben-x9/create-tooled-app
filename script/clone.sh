#!/bin/bash

if [ ! -d "../$1" ]; then
rsync -av --progress . ../$1 \
  --exclude node_modules \
  --exclude platforms \
  --exclude plugins \
  --exclude .git \
  --exclude script/clone.sh
else
  echo "That directory already exists!"
fi
