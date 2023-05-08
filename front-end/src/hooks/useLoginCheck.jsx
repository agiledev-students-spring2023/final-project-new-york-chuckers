import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useLoginCheck = () => {
  const { pathname } = useLocation();

  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (id !== null) {
      setIsLogined(true);
    }
  }, [pathname]);

  return [isLogined, setIsLogined];
};
