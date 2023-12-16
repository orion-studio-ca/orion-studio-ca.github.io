import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (props) => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
    const { reset } = props
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0)
      reset()
    }, [pathname]);

    return null
}
  
export default ScrollToTop;