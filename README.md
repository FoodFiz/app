# FoodFiz

# How to start

**Note** This project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

**FoodFiz Repo (https://github.com/foodfiz/app)**.

In order to start use:

```bash
$ git clone --depth 1 https://github.com/mgechev/angular-seed.git
$ cd angular-seed

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start

# generate api documentation
$ npm run compodoc
$ npm run serve.compodoc


# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod

# dev build of multiple applications (by default the value of --app is "app")
$ npm start -- --app baz
$ npm start -- --app foo
$ npm start -- --app bar
```
_Does not rely on any global dependencies._

# How to start with AoT compilation

**Note** that AoT compilation requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

In order to start the seed with AoT use:

```bash
# prod build with AoT compilation, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.aot
```

# Tree-shaking with Rollup

This application provides full support for tree-shaking your production builds with Rollup, which can drastically reduce the size of your application. This is the highest level of optimization currently available.

To run this optimized production build, use:

```bash
# prod build with AoT compilation and Rollup tree-shaking, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.rollup.aot
```

Your project will be compiled ahead of time (AOT), and then the resulting bundle will be tree-shaken and minified. During the tree-shaking process Rollup statically analyses your code, and your dependencies, and includes the bare minimum in your bundle.

**Notes**
- Beware of non-static/side-effectful imports. These cannot be properly optimized. For this reason, even though tree-shaking is taking place the developer still needs to be careful not to include non-static imports that are unnecessary, as those referenced imports will always end up in final bundle. Special attention should be given to RxJs, which makes heavy use of non-static/side-effectful imports: make sure you only add the operators you use, as any added operators will be included in your final production bundle.
- UMD modules result in code that cannot be properly optimized. For best results, prefer ES6 modules whenever possible. This includes third-party dependencies: if one is published in both UMD and ES6 modules, go with the ES6 modules version.
- During a production build, CommonJs modules will be automatically converted to ES6 modules. This means you can use them and/or require dependencies that use them without any issues.

# Internationalization

Put `i18n` attribute to your html tag to mark it for translation, more information here: https://angular.io/docs/ts/latest/cookbook/i18n.html

## Create a translation source file

```bash
# Your translation file will be generated here `dist/locale`
$ npm run i18n
```

## Production build with your language

```bash
# Build prod app with the language file `dist/locale/messages.en.xlf`
$ npm run build.prod.rollup.aot -- --lang en
```

# Dockerization

The application provides full Docker support. You can use it for both development and production builds and deployments.

Please note that prod and dev are built into their own separate image, which can lead to unexpected differences in the
npm dependencies and the state of the sources in the container, if you are not familiar with Docker. See below.

## Development build and deployment

The dev image only contains the npm libraries installed, but not the sources. The sources are mounted at runtime,
via a docker shared volume, which allows for the live-reload feature to work.
 
To start the container, use:

```bash
$ docker-compose -f docker-compose.dev.yml up -d   # optional: --build, see below
```

Now open your browser at http://localhost:5555

## Production build and deployment

The prod image serves the minified app (sources compiles with a minimal set of dependencies), via an Nginx server.
It is self-contained, and can therefore be pushed to a Docker registry to be deployed somewhere else easily.

To start the container, use:

```bash
$ docker-compose -f docker-compose.prod.yml up -d   # optional: --build, see below
```

Now open your browser at http://localhost:5555

## Updating dependencies and sources
If you are not already familiar with Docker, please note that for both Dev and Prod docker environments, updates to
npm dependencies will be visible only after re-building the image and restarting a new container from it.

In Dev environment, this only applies to npm dependencies, since the sources are mounted as a shared directory.
In Prod environment, this applies to any change in the project.

To force docker-compose to rebuild the image before starting the container, use the --build flag:

```bash
$ docker-compose -f docker-compose.dev.yml up -d --build
```


# Analyzing the space usage of the app
You can analyze the bundle with [source-map-explorer](https://github.com/danvk/source-map-explorer).
It creates a html chart with a file by default, but output can also be json or tsv.

Run the following:
```bash
$ npm run sme.prod # or respectively sme.prod.aot / sme.prod.rollup.aot
# You can specify the output format by passing the `sme-out-format` parameter
$ npm run sme.prod.aot -- --sme-out-format json # or html / tsv
```
