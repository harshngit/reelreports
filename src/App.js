import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {


  return (
    <div className="App">
      <Routes>
        {/* Public routes */}
       
        
        {/* Home - accessible to all authenticated users */}
        <Route path="/" element={<Home />} />
        
    

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
