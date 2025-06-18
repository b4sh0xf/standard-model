import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ParticleDetail from './ParticleDetail';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/particle/:id" element={<ParticleDetail />} />
      </Routes>
    </Router>
  );
}