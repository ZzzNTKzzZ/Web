import { useState, useEffect } from "react";

function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      const direction = scrollY > lastScrollY ? "down" : "up";

      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      setLastScrollY(scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollDirection, threshold]);

  return scrollDirection;
}

export default useScrollDirection;
