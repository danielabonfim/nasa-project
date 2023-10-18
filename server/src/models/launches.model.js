const { Launch } = require("./launch.model");

class Launches{
  constructor(){
    this._setLaunches();
    this.latestFlightNumber = 100;
  }

  getLaunches(){
    return Array.from(this.launches.values())
  }

  addNewLaunch(launch){
    this.latestFlightNumber++;
    this.launches = this.launches.set(this.latestFlightNumber, new Launch({
      ...launch,
      flightNumber: this.latestFlightNumber,
      customers: ['NASA', 'ZTM'],
      upcoming: true,
      success: true
    }));

    return this.getLaunches();
  }

  _setLaunches(){
    const launches = new Map();
    const launch = new Launch({
      flightNumber: 100,
      mission: 'Kepler Exploration',
      rocket: 'Explorer IS1',
      launchDate: new Date('December 27, 2030'),
      destination: 'Kepler-442 b',
      customers: ['NASA', 'ZTM'],
      upcoming: true,
      success: true
    })
    this.launches = launches.set(launch.flightNumber, launch);
  }
}

module.exports = {
  Launches
}