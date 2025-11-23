import React from 'react';
import Hero from './components/Hero';
import Deliverables from './components/Deliverables';
import Bonuses from './components/Bonuses';
import CentralJuridica from './components/CentralJuridica';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Closing from './components/Closing';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-dark-900 text-gray-200 font-sans selection:bg-gold selection:text-black">
      <Hero />
      <Deliverables />
      <Bonuses />
      <CentralJuridica />
      <Offer />
      <Guarantee />
      <Closing />
      
      {/* Simple Footer */}
      <footer className="py-8 bg-black text-center text-gray-600 text-sm border-t border-gray-900">
        <p>&copy; {new Date().getFullYear()} Sociedade do Direito. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
};

export default App;