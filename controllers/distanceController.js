const { calculateDistance } = require('../services/distanceService');

exports.getDistance = (req, res) => {
  try {
    const { point1, point2, unit, pairs } = req.body;
    const validatePoint = p =>
      p && typeof p.lat === 'number' && typeof p.lng === 'number';

    if (pairs) {
      if (!Array.isArray(pairs)) {
        return res.status(400).json({ error: 'pairs should be array' });
      }
      const distances = pairs.map(pair => {
        if (!validatePoint(pair.point1) || !validatePoint(pair.point2)) {
          throw new Error('Invalid coordinate in pairs');
        }
        return calculateDistance(
          pair.point1.lat, pair.point1.lng,
          pair.point2.lat, pair.point2.lng, unit
        );
      });
      return res.json({ distances, unit: unit || 'km' });
    }

    if (!validatePoint(point1) || !validatePoint(point2)) {
      return res.status(400).json({ error: 'Invalid input coordinates' });
    }

    const distance = calculateDistance(
      point1.lat, point1.lng, point2.lat, point2.lng, unit
    );
    res.json({ distance, unit: unit || 'km' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};