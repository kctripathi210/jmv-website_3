import Header from './components/Header';
import CredentialsTicker from './components/CredentialsTicker';
import HeroSection from './components/HeroSection';
import FourDisciplines from './components/FourDisciplines';
import SectorConsole from './components/SectorConsole';
import LightningCalculator from './components/LightningCalculator';
import TrustBand from './components/TrustBand';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-white">
      <Header />
      <CredentialsTicker />
      <HeroSection />
      <FourDisciplines />
      <SectorConsole />
      <TrustBand />
      <LightningCalculator />
      <Footer />
    </div>
  );
}
