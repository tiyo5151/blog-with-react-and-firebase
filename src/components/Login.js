import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/Login.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth, setUserName }) {
  const navigate = useNavigate();
  const LogInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      setUserName(auth.currentUser.displayName);
      navigate('/');
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button className="googleLogin" onClick={LogInWithGoogle}>
        <FontAwesomeIcon icon={faGoogle} />
        Googleでログイン
      </button>
    </div>
  );
}

export default Login;
