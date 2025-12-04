import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Capabilities } from './pages/Capabilities';
import { Industries } from './pages/Industries';
import { Insights } from './pages/Insights';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { SustainabilityStrategy } from './pages/services/SustainabilityStrategy';
import { MarketingConsultancy } from './pages/services/MarketingConsultancy';
import { ChangeManagement } from './pages/services/ChangeManagement';
import { DigitalTransformation } from './pages/services/DigitalTransformation';
import { MarketResearch } from './pages/services/MarketResearch';
import { HRPeopleDevelopment } from './pages/services/HRPeopleDevelopment';
import { OperationsProcess } from './pages/services/OperationsProcess';
import { StrategyBusinessPlanning } from './pages/services/StrategyBusinessPlanning';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/services/sustainability-strategy" element={<SustainabilityStrategy />} />
        <Route path="/services/marketing-consultancy" element={<MarketingConsultancy />} />
        <Route path="/services/change-management" element={<ChangeManagement />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/services/market-research" element={<MarketResearch />} />
        <Route path="/services/hr-people-development" element={<HRPeopleDevelopment />} />
        <Route path="/services/operations-process" element={<OperationsProcess />} />
        <Route path="/services/strategy-business-planning" element={<StrategyBusinessPlanning />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Layout>
  );
}

export default App;

