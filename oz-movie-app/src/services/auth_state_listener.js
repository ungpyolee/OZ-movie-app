import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useLocation, useNavigate } from "react-router-dom";

const AuthStateListener = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === '/' || pathname ==='/signup') {
            navigate('/main');
          }
      } else if(!user){
        if (pathname !== '/' && pathname !=='/signup') {
            navigate('/');
          }
      }
    });

    return () => unsubscribe();
  }, [navigate, pathname]);

  return null;
};

export { AuthStateListener };