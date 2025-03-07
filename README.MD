# Prima Service

![Node.js](https://img.shields.io/badge/node-v20.10.0-green) ![NPM](https://img.shields.io/badge/npm-10.2.3-blue) ![Express](https://img.shields.io/badge/express-4.21.2-yellow)

[![Prima Service](https://default-int.github.io/prima-service/favicon46x46.svg)](https://default-int.github.io/prima-service/)

## Overview
Prima Service is a Node.js-based static site generator that compiles Handlebars templates and manages project assets. This project helps streamline the development process by organizing templates, partials, and assets efficiently.

## Features
- Uses **Handlebars** for templating
- Copies dependencies from `node_modules` to `dist/libs`
- Supports live reloading with **Livereload** and **Nodemon**
- Builds and serves static files efficiently

## Installation
To set up the project, clone the repository and install dependencies:

```sh
npm install
```

## Scripts
- `npm run build` - Builds the project by compiling templates and copying assets
- `npm run dev` - Runs the project in development mode with automatic reload
- `npm run serve` - Starts a simple Express server to serve the compiled files

## Build Process
1. Deletes and recreates the `dist` directory.
2. Compiles **Handlebars** templates from `templates/pages`.
3. Copies public assets from `public` to `dist`.
4. Copies dependencies from `node_modules` to `dist/libs`.

## Project Structure
```
./
├── data/           # JSON data for templates
├── dist/           # Compiled output (generated)
├── node_modules/   # Installed dependencies
├── public/         # Static assets (CSS, JS, images)
├── templates/      # Handlebars templates
│   ├── pages/      # Page templates
│   └── partials/   # Reusable components
├── build.js        # Build script
├── serve.js        # Server script
├── package.json    # Project metadata
└── README.md       # Documentation
```

## Dependencies
**Production:**
- `@iconfu/svg-inject`
- `@yandex/ymaps3-default-ui-theme`
- `swiper`

**Development:**
- `express`
- `fs-extra`
- `handlebars`
- `nodemon`
- `livereload`
- `connect-livereload`

## Live Demo
Check out the deployed version: [Prima Service](https://default-int.github.io/prima-service/)

## License
This project is licensed under the ISC License.

