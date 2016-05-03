### PreziPresentio

A simple enough implementation of an angular frontend backed up by a node server with a json used
as database.

#### How to run the frontend
- Install node (https://nodejs.org/en/download/)
- Install gulp globally- `npm install -g gulp`
- Install node dependencies- `cd prezi-presentio && npm install`
- Install bower dependencies from same directory- `bower install`
- `gulp serve`(with *browsersync*, so if you edit the code, it will be immediately visible) or `gulp serve:dist`

#### How to run the backend
- `node server/index.js`
- All the apis are exposed in `/api` route (e.g. `http://localhost:8080/api`)