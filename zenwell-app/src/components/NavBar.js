import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Simple navigation bar component. Highlights the active route.
 */
function NavBar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Journal', path: '/journal' },
    { name: 'Habits', path: '/habits' },
    { name: 'Chat', path: '/chat' },
    { name: 'Settings', path: '/settings' },
  ];
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold text-indigo-600">ZenWell</div>
        <div className="flex space-x-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={
                  'px-3 py-2 rounded-md text-sm font-medium' +
                  (isActive
                    ? ' text-white bg-indigo-600'
                    : ' text-gray-600 hover:bg-gray-100 hover:text-indigo-600')
                }
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;