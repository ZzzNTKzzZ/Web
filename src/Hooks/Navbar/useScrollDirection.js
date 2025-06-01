import { useState, useEffect } from "react";

function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollDirection("up");
        setLastScrollY(0);
        return;
      }
      if (
        Math.abs(currentScrollY - lastScrollY) > threshold ||
        currentScrollY < lastScrollY
      ) {
        const direction = currentScrollY > lastScrollY ? "down" : "up";

        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold, scrollDirection]);

  return scrollDirection;
}

export default useScrollDirection;
