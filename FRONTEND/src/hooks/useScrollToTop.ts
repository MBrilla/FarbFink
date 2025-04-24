import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    };

    scrollToTop();
    // Zusätzlicher Timeout um sicherzustellen, dass der Scroll auch nach dem Rendering ausgeführt wird
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
};