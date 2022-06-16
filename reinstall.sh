#!/usr/bin/sh

CURRENT_PWD=$PWD
CRWLR_PROJECT='/home/graph/unique/crawler'
CRWLR_MODULE_DIR='node_modules/crawler'

echo 'Cleanup...'
rm -rf ${CRWLR_MODULE_DIR}
mkdir ${CRWLR_MODULE_DIR}

echo 'Build package...'
cd $CRWLR_PROJECT
npm run build
npm pack

echo 'Copy package...'
ls -1 crawler-*.tgz | xargs -L1 -I{} cp {} $CURRENT_PWD/$CRWLR_MODULE_DIR/crawler.tgz

echo 'Unpack...'
cd $CURRENT_PWD/$CRWLR_MODULE_DIR
tar -xzvf ./crawler.tgz
mv ./package/* .

echo 'Succeed!'