import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './components/layout/AppLayout';
import Communication from './pages/features/Communication';
import BroughtToLife from './pages/features/BroughtToLife';
import BrandingGuidelines from './pages/features/BrandingGuidelines';
import UserControl from './pages/features/UserControl';
import SalesAcceleration from './pages/solutions/SalesAcceleration';
import Marketing from './pages/solutions/Marketing';
import InternalCommunication from './pages/solutions/InternalCommunication';
import KnowledgeManagement from './pages/solutions/KnowledgeManagement';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public routes */}
        
        {/* Home - accessible to all authenticated users */}
        <Route path="/" element={<Home />} />
        
        {/* Feature Pages */}
        <Route path="/feature/communication" element={<AppLayout><Communication /></AppLayout>} />
        <Route path="/feature/brought-to-life" element={<AppLayout><BroughtToLife /></AppLayout>} />
        <Route path="/feature/branding-guidelines" element={<AppLayout><BrandingGuidelines /></AppLayout>} />
        <Route path="/feature/user-control" element={<AppLayout><UserControl /></AppLayout>} />

        {/* Solution Pages */}
        <Route path="/solution/sales" element={<AppLayout><SalesAcceleration /></AppLayout>} />
        <Route path="/solution/marketing" element={<AppLayout><Marketing /></AppLayout>} />
        <Route path="/solution/internal" element={<AppLayout><InternalCommunication /></AppLayout>} />
        <Route path="/solution/knowledge" element={<AppLayout><KnowledgeManagement /></AppLayout>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;