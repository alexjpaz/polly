#!/bin/bash

pushd ../public/

convert bird.png -trim +repage -background transparent -gravity center -resize 192x192 -extent 192x192 logo192.png
convert bird.png -trim +repage -background transparent -gravity center -resize 512x512 -extent 512x512 logo512.png
convert bird.png -trim +repage -background transparent -gravity center -resize 32x32 -extent 32x32 favicon.ico
