const fs = require('fs');
const path = require('path');

const validateApiKey = (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (!key) return res.status(400).json({ error: 'API key missing' });

  const filePath = path.join(__dirname, '../data/apiKeys.json');
  const keys = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath))
    : [];

  if (!keys.includes(key)) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  next();
};

module.exports = validateApiKey;
