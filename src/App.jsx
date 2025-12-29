import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import ConsultationForm from './components/ConsultationForm';
import FAQ from './components/FAQ';

import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <UseCases />
        <WhyChooseUs />
        <Pricing />
        <ConsultationForm />
        <FAQ />

      </main>
      <Footer />
    </div>
  );
}

export default App;
