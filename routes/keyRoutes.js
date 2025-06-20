const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.post('/generate-key', (req, res) => {
  const newKey = uuidv4();

  // Save it in a local file or DB — here we use a text file
  const filePath = path.join(__dirname, '../data/apiKeys.json');

  let keys = [];
  if (fs.existsSync(filePath)) {
    keys = JSON.parse(fs.readFileSync(filePath));
  }
  keys.push(newKey);
  fs.writeFileSync(filePath, JSON.stringify(keys, null, 2));

  res.json({ apiKey: newKey });
});

module.exports = router;
