class Planet {
  constructor({
    koiDisposition,
    koiInsol,
    koiPrad
  }) {
    this.koiDisposition = koiDisposition;
    this.koiInsol = koiInsol;
    this.koiPrad = koiPrad;
  }

  isHabitable() {
    return this.koiDisposition === 'CONFIRMED'
      && this.koiInsol > 0.36 && this.koiInsol < 1.11
      && this.koiPrad < 1.6;
  }
}

module.exports = Planet;