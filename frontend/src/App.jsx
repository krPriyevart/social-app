import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Profile from './components/profile.jsx';
import Note from './components/Note.jsx';
import Url from './components/utils/url.jsx';
import Imgprev from './components/utils/imgPrev.jsx';

import Layout from './components/Layout.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/note" element={<Note />} />
        <Route path="/url" element={<Url />} />
        <Route path="/imgprev" element={<Imgprev />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;