const { Launches } = require('../../models/launches.model');

const launches = new Launches();

function getAllLaunches(req, res){
  return res.status(200).json(launches.getLaunches());
}

function createLaunch(req, res){
  const newLaunch = req.body;
  newLaunch.launchDate = new Date(newLaunch.launchDate);
  return res.status(201).json(launches.addNewLaunch(newLaunch));
}

module.exports = {
  getAllLaunches,
  createLaunch
}