const fs = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');
const packageJson = require('./package.json');

const distDir = path.join(__dirname, 'dist');
const distLibsDir = path.join(__dirname, 'dist', 'libs');
const nodeModulesDir = path.join(__dirname, 'node_modules');
const publicDir = path.join(__dirname, 'public');
const templatesDir = path.join(__dirname, 'templates');
const partialsDir = path.join(templatesDir, 'partials');
const pagesDir = path.join(templatesDir, 'pages')

const modulesReplaceNameMap = {
  ['@yandex/ymaps3-default-ui-theme']: '@yandex/ymaps3-default-ui-theme@latest'
}

const isExist = fs.pathExistsSync(distDir);
if (isExist) fs.removeSync(distDir);

fs.ensureDirSync(distDir);
fs.ensureDirSync(distLibsDir);

const dependencies = Object.keys(packageJson?.dependencies || {})

const data = fs.readJsonSync(path.join(__dirname, 'data', 'data.json'));

dependencies.forEach(dep => {
  const moduleResolveName = modulesReplaceNameMap[dep] || dep;

  const srcPath = path.join(nodeModulesDir, dep);
  const destPath = path.join(distLibsDir, moduleResolveName);

  if (fs.existsSync(srcPath)) {
    fs.copySync(srcPath, destPath);
    console.log(`✅ ${moduleResolveName} copied to dist/libs`);
  } else {
    console.warn(`⚠️ Dependency ${moduleResolveName} not found in node_modules`);
  }
});

fs.readdirSync(partialsDir).forEach(file => {
  const partialName = path.parse(file).name;
  const partialContent = fs.readFileSync(path.join(partialsDir, file), 'utf-8');
  handlebars.registerPartial(partialName, partialContent);
});

fs.readdirSync(pagesDir).forEach(file => {
  const extname = path.extname(file);

  if (extname === '.hbs') {
    const templateName = path.parse(file).name;
    const templateContent = fs.readFileSync(path.join(pagesDir, file), 'utf-8');

    const template = handlebars.compile(templateContent);
    const result = template(data);

    fs.writeFileSync(path.join(distDir, `${templateName}.html`), result, 'utf-8');
    console.log(`✅ File ${templateName}.html is compiled!`);
  }
});

fs.copySync(publicDir, distDir);
