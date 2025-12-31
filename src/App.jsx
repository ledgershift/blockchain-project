import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <div className="min-h-screen bg-[#0a0e17] text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
