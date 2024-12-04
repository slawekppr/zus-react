
# Visual studio code
1.93.1
Ctrl+`

# Node
https://nodejs.org/en/download/prebuilt-installer

node -v 
v20.17.0

npm -v 
10.8.2

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