# reactjs-dev
a minimalist expressjs+bootstrap+reactjs
for multi-pages site \
(both front/backend-sides)


- source code are stored in `src` folder
- webpack builds `packages.js` to `build` folder\
  with static files in `public`
- `src\server\server.js` serves http-services\
  with `\api` for dynamic content
- live-server auto-refreshes page for dev


steps

- `dev install` iterates each folders and runs npm install
- `dev build` runs webpack for initial build of files
- `dev start` spawns:

    - `webpack --watch` auto-rebuilds src
    - `live-server` auto-refresh browser at :8080, proxies /api to :8081
    - `node proxy.js` proxies :8081 to :3000/api
    - `nodemon build\server.js` serves :3000

- `dev build --mode production` for minimized build
- `dev clean` removes build directory

notes

- access localhost:8080 (live-server)
- update packages.js for new pages
- changing src\servers restarts server
- changing src\\(others) refreshes page


refs

- https://reactjs.org/docs/add-react-to-a-website.html
- https://medium.com/javascript-in-plain-english/three-ways-to-use-babel-with-react-9faf3c0e846b

