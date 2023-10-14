const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const Planet = require('./planet.model');

class Planets {
  constructor() {
    //singleton
    if (Planets._instance) {
      return MyClass._instance
    }
    Planets._instance = this;

    this.planets = this.getHabitablePlanets();
  }

  getHabitablePlanets() {
    return new Promise((resolve, reject) => {
      const habitablePlanets = [];
      fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
          comment: '#',
          columns: true,
        }))
        .on('data', (data) => {
          const planet = new Planet({
            koiDisposition: data['koi_disposition'],
            koiInsol: data['koi_insol'],
            koiPrad: data['koi_prad']
          });

          if (planet.isHabitable()) {
            habitablePlanets.push(planet);
          }
        })
        .on('error', (err) => {
          console.log(err);
          reject(err);
        })
        .on('end', () => {
          console.log('Obteve todos os planetas');
          resolve(habitablePlanets);
        })
    })
  }
}

module.exports = Planets;