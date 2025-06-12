// RevealOnScroll.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Tự động apply hiệu ứng reveal (slide-up + fade-in) cho các phần tử có class .revealUp.
 * 
 * @param {Object} props - Không cần props nếu dùng mặc định
 * @param {string} [props.selector='.revealUp'] - CSS selector để chọn các phần tử cần hiệu ứng
 * @param {boolean} [props.markers=false] - Hiển thị marker để debug ScrollTrigger
 */
const RevealOnScroll = ({ selector = '.revealUp', markers = false }) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((elem) => {
      gsap.set(elem, { y: 200, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        markers: markers,
        onEnter: () => {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto',
            }
          );
        },
      });
    });

    // Cleanup ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, markers]);

  return null; // Component không render gì vì chỉ điều khiển hiệu ứng
};

export default RevealOnScroll;
