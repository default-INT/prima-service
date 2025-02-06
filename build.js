const fs = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');
const templatesDir = path.join(__dirname, 'templates');
const partialsDir = path.join(templatesDir, 'partials');

const isExist = fs.pathExistsSync(distDir);
if (isExist) fs.removeSync(distDir);

fs.ensureDirSync(distDir);

const data = fs.readJsonSync(path.join(__dirname, 'data', 'data.json'));

const mainTemplate = fs.readFileSync(path.join(templatesDir, 'index.hbs'), 'utf-8');

fs.readdirSync(partialsDir).forEach(file => {
  const partialName = path.parse(file).name;
  const partialContent = fs.readFileSync(path.join(partialsDir, file), 'utf-8');
  handlebars.registerPartial(partialName, partialContent);
});

const template = handlebars.compile(mainTemplate);
const result = template(data);

fs.writeFileSync(path.join(distDir, 'index.html'), result, 'utf-8');

fs.copySync(publicDir, distDir);

console.log('✅ File index.html is compiled!');
