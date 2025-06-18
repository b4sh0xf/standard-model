import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ParticleDetail.css';

export default function ParticleDetail() {
  const { id } = useParams();
  const [particle, setParticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/particles/${id}`).then(res => setParticle(res.data));
  }, [id]);

  if (!particle) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h1>{particle.name} ({particle.symbol})</h1>
      <p><strong>Type:</strong> {particle.type}</p>
      <p><strong>Mass:</strong> {particle.mass}</p>
      <p><strong>Charge:</strong> {particle.charge}</p>
      <p><strong>Spin:</strong> {particle.spin}</p>
      <p><strong>Interactions:</strong> {particle.interactions.join(', ')}</p>
    </div>
  );
}