# Dependency Management for Frontend

### Installs

With `package.json` and dependencies
```shell
docker-compose run app yarn
```

Without dependencies
```shell
docker-compose run app yarn bootstrap animate.css
docker-compose run app yarn add webpack webpack-cli copy-webpack-plugin --dev
```

#### Generate `dist`

> run `docker-compose run app npx webpack --config webpack/webpack.config.js` or

> run `docker-compose run app yarn webpack --config webpack/webpack.config.js`

