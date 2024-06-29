const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const modelPath = path.resolve(__dirname, 'src/models');
const controllerPath = path.resolve(__dirname, 'src/controllers');
const templatePath = path.resolve(__dirname, 'controller-template.js'); // ajuste o caminho do template conforme necessário

// List all models
const models = fs.readdirSync(modelPath);

// Generate controller for each model
models.forEach(model => {
  const modelName = model.replace('.ts', '');
  const controllerFile = path.resolve(controllerPath, `${modelName}Controller.ts`);
  if (!fs.existsSync(controllerFile)) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const controllerContent = template.replace(/(\${name})/g, modelName);
    fs.writeFileSync(controllerFile, controllerContent);
    console.log(`Generated controller for ${modelName}`);
  }
});

// Run sequelize CLI to generate models and migrations
execSync('sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string', { stdio: 'inherit' });
