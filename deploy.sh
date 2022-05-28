#!/usr/bin/env sh

# https://vitejs.dev/guide/static-deploy.html#testing-the-app-locally

# abort on errors
set -e

# build
# npm run build
pnpm build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main-2
touch .nojekyll
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:leelai/my-vue-vben-admin.git main:gh-pages

cd -
