const Planets = require('../../models/planets.model');

async function getAllPlanets(req, res) {
  const planets = new Planets().habitablePlanets;
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets
}