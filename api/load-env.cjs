const { existsSync, readFileSync } = require('fs');
const { resolve } = require('path');
const envPath = resolve(__dirname, '.env');

if (existsSync(envPath)) {
  const env = readFileSync(envPath, 'utf8');
  env.split('\n').forEach((line) => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}