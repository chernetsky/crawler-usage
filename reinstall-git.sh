#!/usr/bin/sh

CRWLR_MODULE_DIR='node_modules/crawler'

echo 'Cleanup...'
rm -rf ${CRWLR_MODULE_DIR}
rm package-lock.json

echo 'Update dependencies...'
npm i

echo 'Succeed!'