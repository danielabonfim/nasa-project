class Launches{
  constructor(){
    this._setLaunches();
  }

  getLaunches(){
    return Array.from(this.launches.values())
  }

  _setLaunches(){
    const launches = new Map();
    const launch = {
      flightNumber: 100,
      mission: 'Kepler Exploration',
      rocket: 'Explorer IS1',
      launchDate: new Date('December 27, 2030'),
      destination: 'Kepler-442 b',
      customer: ['NASA', 'ZTM'],
      upcoming: true,
      success: true
    }

    this.launches = launches.set(launch.flightNumber, launch);
  }
}


module.exports = {
  Launches
}