cd simple-mind-map
npm i
npm link
cd ..
cd web
npm i
npm link simple-mind-map
npm run build
cd ..
mkdir -p gh-pages/dist
cp -r dist/* gh-pages/dist/
cp index.html gh-pages/index.html
