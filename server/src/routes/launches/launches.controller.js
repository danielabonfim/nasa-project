const { launches, Launches } = require('../../models/launches.model');

function getAllLaunches(req, res){
  const teste = new Launches().getLaunches();
  console.log(teste)
  return res.status(200).json(new Launches().getLaunches());
}

module.exports = {
  getAllLaunches
}