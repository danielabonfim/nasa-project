class Launch{
  constructor({
    flightNumber,
    mission,
    rocket,
    launchDate,
    destination,
    customers,
    upcoming,
    success
  }){
    this.flightNumber = flightNumber
    this.mission = mission
    this.rocket = rocket
    //todo check se é no futuro
    this.launchDate = launchDate
    this.destination = destination
    this.customers = customers
    this.upcoming = upcoming
    this.success = success
  }
}

module.exports= {
  Launch
}