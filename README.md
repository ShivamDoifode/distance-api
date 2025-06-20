# 🌍 Distance Calculator API

A **Node.js-based RESTful API** to calculate the distance between two geographical coordinates using the Haversine formula.  

---

## 🚀 Features

- 🛰️ RESTful endpoint to calculate distances  
- 📏 Supports kilometers and miles  
- 🔐 API key authentication  
- 🧮 Batch distance calculation  
- 🧰 Modular, maintainable structure  
- ⚠️ Proper error handling and validations  
- 📄 Swagger (OpenAPI) documentation  
- 🧪 Jest-based testing  
- 🚫 Rate-limiting to prevent abuse  

---

## 📁 Project Structure

```
├── controllers/
├── middlewares/
├── routes/
├── services/
├── tests/
├── data/apiKeys.json
├── swagger.yaml
├── .env / myenv
└── server.js
```

---

## 📦 Requirements

- Node.js v14+  
- npm

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/ShivamDoifode/distance-api.git
cd distance-api
npm install
```

Create a `.env` or `myenv` file with the following content:

```
PORT=4000
NODE_ENV=development
```

To run tests:

```bash
npm test
```

To start the server:

```bash
node server.js
```

---

## 📘 API Usage

### 🔑 Generate API Key  
**POST** `/api/generate-key`  

**Response:**
```json
{
  "apiKey": "your-unique-key"
}
```

✅ **Trial API Key**  
Use the key below to try the API directly without generating one:
```bash
ed30f6fb-d93c-4b03-9532-229ccf2284b9
```

---

### 📏 Calculate Distance  
**POST** `/api/distance`  

**Headers:**
```
x-api-key: your-unique-key
```

**Request Body (Single Pair):**
```json
{
  "point1": { "lat": 12.97, "lng": 77.59 },
  "point2": { "lat": 28.61, "lng": 77.20 },
  "unit": "km"
}
```

**Request Body (Batch Pairs):**
```json
{
  "unit": "mi",
  "pairs": [
    {
      "point1": { "lat": 12.97, "lng": 77.59 },
      "point2": { "lat": 28.61, "lng": 77.20 }
    }
  ]
}
```

**Response:**
```json
{
  "distance": 1234.56,
  "unit": "km"
}
```

---

## 📄 API Documentation

📘 Swagger UI (hosted):  
**[https://distance-api-fpb5.onrender.com/api-docs](https://distance-api-fpb5.onrender.com/api-docs)**

---

## 🧱 Rate Limiting

- Limit: **100 requests per hour per IP**

---

## 🌐 Live Deployment

- 🔗 **Frontend**: [https://distance-api-frontend.vercel.app](https://distance-api-frontend.vercel.app)  
  → Try the distance calculator with a clean UI.

- 🔗 **Swagger UI**: [https://distance-api-fpb5.onrender.com/api-docs](https://distance-api-fpb5.onrender.com/api-docs)  
  → Explore and test the API using interactive documentation.

---

### 🎯 Made with 💻 by Shivam Doifode
