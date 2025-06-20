🌍 Distance Calculator API
A Node.js-based RESTful API to calculate the distance between two geographical coordinates using the Haversine formula. Built for the DevifyX Technical Assignment.

🚀 Features
RESTful endpoint to calculate distances

Supports kilometers and miles

API key authentication

Batch distance calculation

Modular, maintainable structure

Proper error handling and validations

Swagger (OpenAPI) documentation

Jest-based testing

Rate-limiting to prevent abuse

📁 Project Structure
├── controllers/
├── middlewares/
├── routes/
├── services/
├── tests/
├── data/apiKeys.json
├── swagger.yaml
├── .env / myenv
├── server.js

📦 Requirements
Node.js v14+

npm

🛠️ Setup Instructions
Clone the repository:
git clone https://github.com/ShivamDoifode/distance-api.git
cd distance-api
npm install

Create a .env or myenv file with the following content:
PORT=4000
NODE_ENV=development

To run tests:
npm test

To start the server:
node server.js

📘 API Usage
🔑 Generate API Key
POST /api/generate-key

Response:
{
"apiKey": "your-unique-key"
}

📏 Calculate Distance
POST /api/distance

Headers:
x-api-key: your-unique-key

Body (single pair):
{
"point1": { "lat": 12.97, "lng": 77.59 },
"point2": { "lat": 28.61, "lng": 77.20 },
"unit": "km"
}

Body (batch pairs):
{
"unit": "mi",
"pairs": [
{
"point1": { "lat": 12.97, "lng": 77.59 },
"point2": { "lat": 28.61, "lng": 77.20 }
}
]
}

Response:
{
"distance": 1234.56,
"unit": "km"
}

📄 API Docs
Swagger UI is available at:
http://localhost:4000/api-docs

🧱 Rate Limiting
Limit: 100 requests per hour per IP

