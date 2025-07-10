import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

// Paste or import your Logo component here
const Logo = () => (
  <svg
    width="190"
    height="70"
    viewBox="0 0 140 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="MyFinance Logo"
  >
    <g transform="translate(0, 0)">
      <path
        d="M5 55 L20 40 L35 45 L50 25"
        stroke="#10b981"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 25 L50 25 L50 30"
        stroke="#10b981"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="55" r="3" fill="#10b981" />
      <circle cx="20" cy="40" r="3" fill="#10b981" />
      <circle cx="35" cy="45" r="3" fill="#10b981" />
      <circle cx="50" cy="25" r="3" fill="#10b981" />
      <text
        x="65"
        y="40"
        fontFamily="Arial"
        fontSize="20"
        fontWeight="600"
        fill="#1f2937"
      >
        MY Finance
      </text>
      <text
        x="65"
        y="55"
        fontSize="14"
        fill="#6b7280"
        fontFamily="Arial"
      >
        Growth Tracking
      </text>
    </g>
  </svg>
);

interface HeaderProps {
  isLoggedIn: boolean;
  userImage?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userImage }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <header className="w-full px-6 py-4 bg-gray-200 dark:bg-gray-800 shadow flex items-center justify-between">
      {/* Left: Logo and Title */}
      <div
        onClick={() => navigate('/')}
        className="flex items-center cursor-pointer"
      >
        <Logo />
      </div>

      {/* Right */}
      <div className="flex items-center gap-12">
        {isLoggedIn ? (
          <>
            {/* Language switcher */}
            <button
              onClick={toggleLanguage}
              className="text-sm text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 px-3 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {language.toUpperCase()}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Profile image (clickable) */}
            <img
              src={userImage || '/avatar.jpg'}
              alt="User"
              className="w-9 h-9 rounded-full border-2 border-blue-600 cursor-pointer"
              onClick={() => navigate('/profile')}
            />
          </>
        ) : (
          <>
            <a href="/login" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Login
            </a>
            <a
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700"
            >
              Register
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
