class Planet {
  constructor({
    koiDisposition,
    koiInsol,
    koiPrad,
    keplerName
  }) {
    this.koiDisposition = koiDisposition;
    this.koiInsol = koiInsol;
    this.koiPrad = koiPrad;
    this.keplerName = keplerName;
  }

  isHabitable() {
    return this.koiDisposition === 'CONFIRMED'
      && this.koiInsol > 0.36 && this.koiInsol < 1.11
      && this.koiPrad < 1.6;
  }
}

module.exports = Planet;