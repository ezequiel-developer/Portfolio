import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (selector, animationProps) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
      gsap.fromTo(
        element,
        {
          x: animationProps.xFrom,
          opacity: animationProps.opacityFrom,
          scale: animationProps.scaleFrom,
        },
        {
          x: animationProps.xTo,
          opacity: animationProps.opacityTo,
          scale: animationProps.scaleTo,
          duration: animationProps.duration,
          ease: animationProps.ease,
          scrollTrigger: {
            trigger: element,
            start: animationProps.start,
            end: animationProps.end,
            once: true, // Animação ocorre apenas uma vez
          },
        }
      );
    });
  }, [selector, animationProps]);
};

export default useGsapAnimation;
