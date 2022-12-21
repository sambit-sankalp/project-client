import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Playground from './pages/Playground';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
