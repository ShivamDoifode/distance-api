const express = require('express');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const rateLimit = require('express-rate-limit');
const cors = require('cors'); // ✅ CORS added

// Load env variables from 'myenv' file
dotenv.config({ path: './myenv' });

const app = express(); // ✅ Define `app` BEFORE using it

// Enable CORS
app.use(cors()); // ✅ Allows frontend access (from file:// or different port)

// Rate limiter
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests, please try again later.",
});
app.use(limiter);

app.use(express.json());
app.use('/api', require('./routes/distanceRoutes'));
app.use('/api', require('./routes/keyRoutes'));

// Swagger documentation
const swaggerDoc = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Server start
const PORT = process.env.PORT || 4000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
