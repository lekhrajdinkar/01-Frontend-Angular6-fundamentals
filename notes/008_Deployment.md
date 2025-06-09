# Deployment
- https://angular.dev/tools/cli/deployment

## A. SPA
- ng build > client bundle (browser folder)
- deploy on **static web host** : firebase, heroku,etc
  - ng add @angular/fire
  - ng add angular-cli-ghpages
  - ng add @jefiozie/ngx-aws-deploy
- runs on client/visitor's browser
- dis adv:
  - initially missing content, empty html file.
  - browser can be slow.
  
---  
## B. SSR - server side rendering
- server sends hydrated page, SPA ( pre-loaded data)
- initial rendering by server
- sort of going back to traditional approach.
- **Turn angular into ssr app**
  - **ng add @angular/ssr**
  - **ng new --ssr**
- check :
  - angular.json for ssr. `{ "entry" : "server.ts" }`
  - server.mjs
  - ...
- run : npm run build or ng build
  - /dist
    - /browser
    - /server
- **npm run serve:ssr:routing**
  - localhost:4000 (nodejs express)

---
## C. SSG - static site generation
- combination of above 2.
- **pre-render at build time**
- create : app-routes.tx
  - CONTENT:
    - /path1/load/user/id/1
    - /path1/load/user/id/100
    - /path1/load/user/id/2
- angular.json > update ssr renderer property : `{routeFile : app-routes.tx}`
- ng build
  - pre render pages for above paths
