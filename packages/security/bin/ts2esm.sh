#!/usr/bin/env bash

for js in `\find ./dist -name '*.js'`; do
  echo $js
  sed -i '' '/.js/! s/\(^import.*"\.\/.*\)"/\1.js"/g' $js
  sed -i "" "/.js/! s/\(^import.*'\.\/.*\)'/\1.js'/g" $js
done
