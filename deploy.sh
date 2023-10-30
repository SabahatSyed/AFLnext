#!/bin/bash
source ~/.nvm/nvm.sh
nvm install --lts

npm install
npm run build
pm2 start npm --  start