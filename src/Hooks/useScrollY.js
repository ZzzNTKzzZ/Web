// Home
// Home


import { useState, useEffect } from 'react';

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shrink = scrollY >= 300;

  return { scrollY, shrink };
}

export default useScrollY;
