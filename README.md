# Dependency Management for Frontend

### Installs

With `package.json` and dependencies
```shell
docker-compose run app yarn
```

Without dependencies
```shell
docker-compose run app yarn bootstrap animate.css jquery
docker-compose run app yarn add webpack webpack-cli copy-webpack-plugin html-webpack-plugin webpack-dev-server --dev
```

### Project Structure

> run `tree -I "node_modules"`
```shell
.
├── Dockerfile
├── README.md
├── assets.js
├── docker-compose.yml
├── package.json
├── src
│   ├── app.js
│   └── public
│       └── index.html
├── webpack
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
└── yarn.lock

3 directories, 10 files
```

#### Generate `dist`

> run `docker-compose run app npx webpack --config webpack/webpack.config.prod.js` or

> run `docker-compose run app yarn webpack --config webpack/webpack.config.prod.js`

With script
> run `docker-compose run app yarn build`

### Generate `build`

> run `docker-compose run app npx webpack --config webpack/webpack.config.dev.js` or

> run `docker-compose run app yarn webpack --config webpack/webpack.config.dev.js`

With script
> run `docker-compose run app yarn build:dev`

### Run Server

`localhost:8080`
> run `docker-compose up`

