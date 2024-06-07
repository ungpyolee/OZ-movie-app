import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useLocation, useNavigate } from "react-router-dom";
import useUserStore from '../userStore';

const AuthStateListener = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setUserData, clearUserData } = useUserStore();
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        if (pathname === '/' || pathname ==='/signup') {
            navigate('/main');
          }
      } else if(!user){
        clearUserData()
        if (pathname !== '/' && pathname !=='/signup') {
            navigate('/');
          }
      }
    });

    return () => unsubscribe();
  }, [navigate, pathname,setUserData, clearUserData]);

  return null;
};

export { AuthStateListener };