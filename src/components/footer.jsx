import React from 'react';
import { useAdmin } from '../context/AdminContext';

export default function Footer() {
  const { isAdmin, login, logout } = useAdmin();

  const handleAdminClick = (e) => {
    e.preventDefault();
    if (isAdmin) {
      if (window.confirm('Logout from Admin mode?')) {
        logout();
      }
    } else {
      const code = window.prompt('Enter Admin Code:');
      if (code) {
        if (!login(code)) {
          alert('Incorrect code.');
        }
      }
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-left">
          © Hoorulain Asad — Built with React
          <span
            onClick={handleAdminClick}
            style={{
              marginLeft: '15px',
              fontSize: '0.75rem',
              opacity: 0.5,
              cursor: 'pointer'
            }}
          >
            {isAdmin ? 'Admin (Active)' : 'Admin'}
          </span>
        </div>

        <div className="footer-right">
          <a href="mailto:itshooroasad@gmail.com">
            itshooroasad@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
