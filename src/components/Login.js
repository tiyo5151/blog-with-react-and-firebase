import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/Login.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login({ isAuth, setIsAuth }) {
  const navigate = useNavigate();
  const LogInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
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
