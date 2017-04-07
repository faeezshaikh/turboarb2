#!/bin/bash
cd /home/ec2-user/Ionic2App
rm -rf node_modules
/usr/local/bin/npm install @ionic/app-scripts@latest --save-dev
/usr/local/bin/npm install
