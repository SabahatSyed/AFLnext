#!/bin/bash
source /.nvm/nvm.sh
npm install
npm run build
pm2 stop 0
pm2 start npm --  start