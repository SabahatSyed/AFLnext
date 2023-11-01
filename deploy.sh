#!/bin/bash
source /.nvm/nvm.sh

cd /opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive/

npm install
npm run build
pm2 stop 0
pm2 start npm --  start