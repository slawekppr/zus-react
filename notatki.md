
# Visual studio code
1.93.1
Ctrl+`

# Node
https://nodejs.org/en/download/prebuilt-installer

node -v 
v20.17.0

npm -v 
10.8.2

# NVM - Node Version Mangaer
npm list
npm install
npm use


# GIT
git -v 
git version 2.40.1.windows.1
11`

git clone https://bitbucket.org/ev45ive/sages-zus-typescript.git

File -> New Window 
F1 -> Clone -> PASTE ^ -> Clone From URL -> Select Location

# DOMContentLoaded, onload, defer
https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

# TypeScript - TSC 
npm install --global typescript

npm i -g typescript@latest
npx tsc -v 

tsc -v
tsc --help

# NPM global problems - prefix PATH
npm config get prefix
<!-- C:\Program Files\nodejs -->

echo $PATH 
settings -> System -> Zmienne środowiskowe -> PATH 

# Package.json
npm init -y

# TSC
tsc plik.ts 

--watch
--target 
--lib 

# Tsc init / tsconfig.json
tsc --init 
tsc main.ts --init --target es2015 --lib es2023

tsc --init -target es2015 --lib es2023 --outdir ./dist

# Declaration from JS
tsc ./src/lib.js --allowJS true --declaration --emitDeclarationOnly true

# Semver
https://semver.org 
https://semver.npmjs.com/

# npm outdated
Package  Current  Wanted  Latest  Location  Depended by
jquery   MISSING   3.1.1   3.7.1  -         1_migracja_z_js
react    MISSING  18.3.1  18.3.1  -         1_migracja_z_js

npm i
npm install jquery@^3
npm install jquery@latest

# Package.json / package-lock.json

npm i  // Package.json + update
npm ci // package-lock.json = exact!

# Modules, module Resolution
moduleResolution: 'node...'

# Triple-Slash reference
/// <reference path="./types.d.ts" />

# CSS Dinner
https://flukeout.github.io/ 

# TS for WEB

// package.json:
npm init -y
echo node_modules >> .gitignore

// tsconfig.json:
tsc --init --target es2023 --outdir ./dist
echo dist >> .gitignore

// dependencies:
npm i jquery @types/jquery bootstrap

// devDependencies:
npm i -D serve typescript

# Backend w node - własny serwer express.js 

npm i -D @types/node @types/express @types/express-session typescript
npm i express cors express-session

git pull
npm install
tsc
node dist/index.js

# 12 FACTOR - cloud native 
https://12factor.net/

# Create React App + Webpack
https://create-react-app.dev/

# Vite
https://vite.dev/guide/

npm create vite@latest

> npx
> create-vite

√ Project name: ... vite-project
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in C:\Projects\sages-zus-typescript\vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev

# Vite dev
npm i
npm run dev

  VITE v6.0.2  ready in 196 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

L337c0d3
  S I t E
  5 1 7 3

## Functional effects - haskell / effect.ts

https://learnyouahaskell.com/chapters

https://effect.website/

# UI Toolkits
https://mui.com/

https://www.wearedevelopers.com/magazine/best-free-react-ui-libraries

https://www.chakra-ui.com/

https://ant.design/components/button

https://react-bootstrap.github.io/

https://primereact.org/card/#advanced

https://www.telerik.com/campaigns/kendo-ui-react/

https://js.devexpress.com/React/Documentation/Guide/UI_Components/Accordion/Getting_Started_with_Accordion/


# Headless
https://headlessui.com/react/dialog

https://getbootstrap.com/docs/3.4/css/#grid

https://tailwindcss.com/

# Generate not install - shadcn
https://ui.shadcn.com/docs/components/accordion

# Prime React
https://primereact.org/installation/
https://primereact.org/tailwind/

# Tailwind
https://tailwindcss.com/docs/guides/vite

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

primary color,
"tailwindCSS.emmetCompletions": true

# -- Onion / Hexagonal / Clean - Arch --

/   CORE , API, BIZ, Ingredients, Service \
-------------------------------------------
   FeatA | FeatB | FeatC | Recipe | Container
---------------------------------------------
\  Common,  Lib,  UI,  Cookware, Component  / 



# Playlists 'module'

mkdir -p src/common/components/

mkdir -p src/playlists/components/
mkdir -p src/playlists/containers/

touch src/playlists/containers/PlaylistView.tsx

touch src/playlists/components/PlaylistList.tsx
touch src/playlists/components/PlaylistDetails.tsx
touch src/playlists/components/PlaylistEditor.tsx

# Music module 

mkdir -p src/music/components/
mkdir -p src/music/containers/

touch src/music/containers/AlbumSearchView.tsx
touch src/music/containers/AlbumDetailView.tsx

touch src/music/components/SearchForm.tsx
touch src/music/components/ResultsGrid.tsx
touch src/music/components/AlbumCard.tsx

touch src/common/model/Album.ts
touch src/common/services/MusicAPI.ts

# Snippets

Extensions - ES7 React snippets - dsznajder
ts react arrow function component export:
tsrafce

# Emmet 
https://flukeout.github.io/ 
https://docs.emmet.io/cheat-sheet/

# Devtools
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

# Ankieta - cz.1 - TypeScript
https://sages.link/889487


# React Tech Stack

- Vite
- React 19
- React Router
- TanStack React Query
- ky (zamiast axios)
- Zod
- react hook form
- Prime React
- Tailwind

# Proxy / Repository
https://www.google.com/search?q=npm+local+repository

https://medium.com/@ogbemudiatimothy/using-npm-install-behind-a-corporate-proxy-server-db150c128899

https://jfrog.com/artifactory/

# TypeScript Utility Types
- 🌟 [ts-toolbelt](https://github.com/pirix-gh/ts-toolbelt) (
- [utility-types](https://github.com/piotrwitek/utility-types)
- [type-zoo](https://github.com/pelotom/type-zoo)
- [Reddit](https://www.reddit.com/r/typescript/comments/c2nq7k/higher_type_safety_for_typescript_with_tstoolbelt/))
- [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)
- [type-fest](https://github.com/sindresorhus/type-fest)
- [tsdef](https://github.com/joonhocho/tsdef)
- [rex-tils](https://github.com/Hotell/rex-tils)
- [tiny-types](https://github.com/jan-molak/tiny-types)
- [ts-essentials](https://github.com/krzkaczor/ts-essentials)

## FUnctional utils
https://ramdajs.com/
https://remedajs.com/

https://randycoulman.com/blog/categories/thinking-in-ramda/
https://effect.website/

# Generate  Mocks

// faker.js
// casual.js

# Spotify
xafejil469@kindomd.com

xa fe ji l4 69 @kindomd.com

# Use Hooks
https://use-http.com/#/

https://usehooks.com/usefetch

https://www.reactuse.com/element/useClickOutside

# Basic React Hooks
- useState (dane)
- useMemo ( fn => value ) [deps]
- useId()
- useRef <HTMLElement>(null)
- render      <div ref={ ^ }
- useEffect ( fn => destructor ) [deps]

# Web Vitals lighthouse
https://web.dev/articles/optimize-vitals-lighthouse

# React Router
https://reactrouter.com/start/library/routing

# Axios, $.getJSON, $.ajax, ky
npm i ky
https://www.restapitutorial.com/advanced/responses/retries

# NPM left-pad 
https://en.wikipedia.org/wiki/Npm_left-pad_incident

# Semver
https://semver.org/
https://semver.npmjs.com/

# CAP Theorem
// - Consistency
// - Availability
// - Partition Tolerant

// Event Sourcing
// Eventual Consistency
// Optimistic Updates
// Compensating Transaction (Revert)

# Infinite scroll
https://usehooks.com/usewindowscroll

# 3d
https://r3f.docs.pmnd.rs/getting-started/introduction
https://threejs.org/docs/index.html#manual/en/introduction/How-to-create-VR-content


# Web
https://whatwebcando.today/
https://caniuse.com/webnfc
https://web.dev/learn/pwa/progressive-web-apps

# DevExpress - local context
https://lr2gt6.csb.app/
https://js.devexpress.com/React/Demos/WidgetsGallery/Demo/DataGrid/Overview/MaterialBlueLight/

# Charts
https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=hero&utm_campaign=try-observable

https://js.devexpress.com/React/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/MaterialBlueLight/

https://js.devexpress.com/React/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/MaterialBlueLight/

https://www.chartjs.org/docs/latest/charts/bar.html


# ContentEditable
https://js.devexpress.com/React/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/MaterialBlueLight/

# Redux, Redux Toolkit
https://redux-toolkit.js.org/tutorials/typescript
npm install @reduxjs/toolkit react-redux

# Immer
https://immerjs.github.io/immer/

# Native Script
https://nativescript.org/

# Redux devtools + time travel
https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

# Redux Promise Action
https://github.com/pburtchaell/redux-promise-middleware/blob/HEAD/docs/introduction.md


## ,,Warsztaty: React in Depth”w dniach 18-20 grudnia 2024 r. 
 https://sages.link/316147 - a to w piatek n
 
 ## Build
 npm run build 

> vite-project@0.0.0 build
> tsc -b && vite build

vite v6.0.2 building for production...
✓ 182 modules transformed.
dist/index.html                                    0.50 kB │ gzip:   0.31 kB
dist/assets/primeicons-C6QP2o4f.woff2             35.15 kB
dist/assets/primeicons-MpK4pl85.ttf               84.98 kB
dist/assets/primeicons-WjwUDZjB.woff              85.06 kB
dist/assets/primeicons-DMOk5skT.eot               85.16 kB
dist/assets/primeicons-Dr5RGzOO.svg              342.53 kB │ gzip: 105.26 kB
dist/assets/InterVariable-CWi-zmRD.woff2         345.59 kB
dist/assets/InterVariable-Italic-d6KXgdvN.woff2  380.90 kB
dist/assets/index-CE9jPgp6.css                   383.14 kB │ gzip:  43.44 kB
dist/assets/useFocus-fcv5Sjft.js                   0.17 kB │ gzip:   0.16 kB
dist/assets/PlaylistList-DIyW4jiG.js               0.58 kB │ gzip:   0.40 kB
dist/assets/PlaylistView-8XJ-tl_3.js               2.69 kB │ gzip:   1.00 kB
dist/assets/MusicAPI-D7O-v7jG.js                  11.73 kB │ gzip:   4.58 kB
dist/assets/AlbumSearchView-Chhd2345.js           20.87 kB │ gzip:   7.44 kB
dist/assets/AlbumDetailView-C61tZmY0.js           41.94 kB │ gzip:  12.59 kB
dist/assets/index-BgLvvF5a.js                    625.53 kB │ gzip: 203.45 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 2.38s

# Rewrite URL 
https://v17.angular.io/guide/deployment#server-configuration

# Immutable Cache (files hash tree)
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

