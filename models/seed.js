const Particle = require('./Particle');

const defaultParticles = [
  // Léptons - 1ª geração
  {
    _id: 'electron',
    name: 'Electron',
    symbol: 'e⁻',
    type: 'Lepton',
    mass: '0.511 MeV/c²',
    charge: '-1',
    spin: '1/2',
    interactions: ['Electromagnetic', 'Weak']
  },
  {
    _id: 'electron-neutrino',
    name: 'Electron Neutrino',
    symbol: 'νₑ',
    type: 'Lepton',
    mass: '< 2.2 eV/c²',
    charge: '0',
    spin: '1/2',
    interactions: ['Weak']
  },

  // Léptons - 2ª geração
  {
    _id: 'muon',
    name: 'Muon',
    symbol: 'μ⁻',
    type: 'Lepton',
    mass: '105.7 MeV/c²',
    charge: '-1',
    spin: '1/2',
    interactions: ['Electromagnetic', 'Weak']
  },
  {
    _id: 'muon-neutrino',
    name: 'Muon Neutrino',
    symbol: 'ν_μ',
    type: 'Lepton',
    mass: '< 0.17 MeV/c²',
    charge: '0',
    spin: '1/2',
    interactions: ['Weak']
  },

  // Léptons - 3ª geração
  {
    _id: 'tau',
    name: 'Tau',
    symbol: 'τ⁻',
    type: 'Lepton',
    mass: '1.777 GeV/c²',
    charge: '-1',
    spin: '1/2',
    interactions: ['Electromagnetic', 'Weak']
  },
  {
    _id: 'tau-neutrino',
    name: 'Tau Neutrino',
    symbol: 'ν_τ',
    type: 'Lepton',
    mass: '< 18.2 MeV/c²',
    charge: '0',
    spin: '1/2',
    interactions: ['Weak']
  },

  // Quarks - 1ª geração
  {
    _id: 'up',
    name: 'Up Quark',
    symbol: 'u',
    type: 'Quark',
    mass: '2.3 MeV/c²',
    charge: '+2/3',
    spin: '1/2',
    interactions: ['Strong', 'Electromagnetic', 'Weak']
  },
  {
    _id: 'down',
    name: 'Down Quark',
    symbol: 'd',
    type: 'Quark',
    mass: '4.8 MeV/c²',
    charge: '-1/3',
    spin: '1/2',
    interactions: ['Strong', 'Electromagnetic', 'Weak']
  },

  // Quarks - 2ª geração
  {
    _id: 'charm',
    name: 'Charm Quark',
    symbol: 'c',
    type: 'Quark',
    mass: '1.275 GeV/c²',
    charge: '+2/3',
    spin: '1/2',
    interactions: ['Strong', 'Electromagnetic', 'Weak']
  },
  {
    _id: 'strange',
    name: 'Strange Quark',
    symbol: 's',
    type: 'Quark',
    mass: '95 MeV/c²',
    charge: '-1/3',
    spin: '1/2',
    interactions: ['Strong', 'Electromagnetic', 'Weak']
  },

  // Quarks - 3ª geração
  {
    _id: 'top',
    name: 'Top Quark',
    symbol: 't',
    type: 'Quark',
    mass: '173.1 GeV/c²',
    charge: '+2/3',
    spin: '1/2',
    interactions: ['Strong', 'Electromagnetic', 'Weak']
  },
  {
    _id: 'bottom',
    name: 'Bottom Quark',
    symbol: 'b',
    type: 'Quark',
    mass: '4.18 GeV/c²',
    charge: '-1/3',
    spin: '1/2',
    interactions: ['Strong', 'Electromagnetic', 'Weak']
  },

  // Bósons gauge
  {
    _id: 'photon',
    name: 'Photon',
    symbol: 'γ',
    type: 'Gauge Boson',
    mass: '0',
    charge: '0',
    spin: '1',
    interactions: ['Electromagnetic']
  },
  {
    _id: 'gluon',
    name: 'Gluon',
    symbol: 'g',
    type: 'Gauge Boson',
    mass: '0',
    charge: '0',
    spin: '1',
    interactions: ['Strong']
  },
  {
    _id: 'w-plus',
    name: 'W⁺ Boson',
    symbol: 'W⁺',
    type: 'Gauge Boson',
    mass: '80.379 GeV/c²',
    charge: '+1',
    spin: '1',
    interactions: ['Weak']
  },
  {
    _id: 'w-minus',
    name: 'W⁻ Boson',
    symbol: 'W⁻',
    type: 'Gauge Boson',
    mass: '80.379 GeV/c²',
    charge: '-1',
    spin: '1',
    interactions: ['Weak']
  },
  {
    _id: 'z-zero',
    name: 'Z⁰ Boson',
    symbol: 'Z⁰',
    type: 'Gauge Boson',
    mass: '91.1876 GeV/c²',
    charge: '0',
    spin: '1',
    interactions: ['Weak']
  },

  // Bóson escalar
  {
    _id: 'higgs',
    name: 'Higgs Boson',
    symbol: 'H⁰',
    type: 'Scalar Boson',
    mass: '125.1 GeV/c²',
    charge: '0',
    spin: '0',
    interactions: ['Weak']
  }
];

module.exports = async function seedParticles() {
  for (const particle of defaultParticles) {
    await Particle.findByIdAndUpdate(particle._id, particle, { upsert: true });
  }
};
