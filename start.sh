#!/bin/sh
sed -i "s%/SERVICE_PATH%$SERVICE_PATH%g" /usr/src/app/.next/routes-manifest.json
sed -i "s%/SERVICE_PATH%$SERVICE_PATH%g" /usr/src/app/.next/required-server-files.json
sed -i "s%/SERVICE_PATH%$SERVICE_PATH%g" /usr/src/app/next.config.js

start_directory="/usr/src/app/.next/static"
find "$start_directory" -type f -exec sed -i "s%/SERVICE_PATH%$SERVICE_PATH%g" {} +

sed -i "s%/SERVICE_API%$SERVICE_API%g" /usr/src/app/.next/routes-manifest.json
sed -i "s%/SERVICE_API%$SERVICE_API%g" /usr/src/app/.next/required-server-files.json
sed -i "s%/SERVICE_API%$SERVICE_API%g" /usr/src/app/next.config.js

start_directory="/usr/src/app/.next/static"
find "$start_directory" -type f -exec sed -i "s%/SERVICE_API%$SERVICE_API%g" {} +


cd /usr/src/app

npm run start
