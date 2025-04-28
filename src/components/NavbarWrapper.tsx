import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function NavbarWrapper({ children }: { children: React.ReactNode }) {

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {

    if (location.pathname === '/login' || location.pathname === '/cadastro') {
      setShowNavbar(false);
      return;
    }
    
    setShowNavbar(true);
  }, [location]);

  return <div>{showNavbar && children}</div>;
}

export default NavbarWrapper;
