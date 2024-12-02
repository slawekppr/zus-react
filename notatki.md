
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
