import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';

function AnimatedCounter({ from, to }) {
  const nodeRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to]);

  return <span ref={nodeRef} />;
}

export default AnimatedCounter;