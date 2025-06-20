const request = require('supertest');
const app = require('../server');

describe("POST /api/distance", () => {
  it("should return the correct distance", async () => {
    const res = await request(app)
      .post("/api/distance")
      .set("x-api-key", "12345secret") // 🔐 Use your actual API key here
      .send({
        point1: { lat: 28.7041, lng: 77.1025 },
        point2: { lat: 19.076, lng: 72.8777 },
        unit: "km"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("distance");
  });
});
