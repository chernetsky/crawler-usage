#!/usr/bin/sh

CRWLR_PROJECT='/home/graph/unique/crawler'

echo 'Build package...'
cd $CRWLR_PROJECT
npm run build

echo 'Succeed!'