#!/bin/bash

if [ ! -d "../$1" ]; then
rsync -av --progress . ../$1 \
  --exclude node_modules \
  --exclude platforms \
  --exclude plugins \
  --exclude .git
else
  echo "That directory already exists!"
fi
