const fs = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');
const templatesDir = path.join(__dirname, 'templates');
const partialsDir = path.join(templatesDir, 'partials');
const pagesDir = path.join(templatesDir, 'pages')

const isExist = fs.pathExistsSync(distDir);
if (isExist) fs.removeSync(distDir);

fs.ensureDirSync(distDir);

const data = fs.readJsonSync(path.join(__dirname, 'data', 'data.json'));

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
