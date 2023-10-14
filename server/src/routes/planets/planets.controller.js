const Planets = require('../../models/planets.model');

async function getAllPlanets(req, res) {
  const planets = await new Planets().getHabitablePlanets();
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets
}