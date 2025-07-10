import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
// import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import './index.css';

const App = () => {
  const isLoggedIn = true; // Or get from auth context/provider
  const userImage = '/avatar.jpg';

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userImage={userImage} />
      <main className="p-4 diagonal-grid-pattern font-space">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
