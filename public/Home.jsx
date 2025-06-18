import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Home.css';

export default function Home() {
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/particles')
      .then(res => setParticles(res.data))
      .catch(err => console.error("Error fetching particles:", err));
  }, []);

  const getParticle = (name) => 
    particles.find(p => p.name.toLowerCase().includes(name.toLowerCase()));

  const gridItems = [
    // Primeira linha (Geração I)
    getParticle('Up Quark'),
    getParticle('Charm Quark'),
    getParticle('Top Quark'),
    getParticle('Gluon'),
    getParticle('Higgs'),

    // Segunda linha (Quarks down)
    getParticle('Down Quark'),
    getParticle('Strange Quark'),
    getParticle('Bottom Quark'),
    getParticle('Photon'),
    getParticle('Z⁰ Boson'),

    // Terceira linha (Léptons carregados)
    getParticle('Electron'),
    getParticle('Muon'),
    getParticle('Tau'),
    getParticle('W⁻ Boson'),
    getParticle('W⁺ Boson'),

    // Quarta linha (Neutrinos)
    getParticle('Electron Neutrino'),
    getParticle('Muon Neutrino'),
    getParticle('Tau Neutrino'),
    null,
    null
  ];

  return (
    <div>
      <header className="header">
        <h1>Standard Model</h1>
        <p className="subtitle">The most complete description of the universe (by today)</p>
      </header>

      <div className="grid">
        {gridItems.map((p, index) => (
          p ? (
            <motion.div
              key={p._id}
              className={`card ${p.type.toLowerCase().replace(' ', '-')}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate(`/particle/${p._id}`)}
            >
              <h2>{p.symbol}</h2>
              <p>{p.name}</p>
            </motion.div>
          ) : (
            <div key={index} className="empty"></div>
          )
        ))}
      </div>
    </div>
  );
}
