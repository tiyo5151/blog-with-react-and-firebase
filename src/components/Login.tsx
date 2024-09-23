import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/Login.css';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const LogInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button className="googleLogin" onClick={logInWithGoogle}>
        <FontAwesomeIcon icon={faGoogle} />
        Googleでログイン
      </button>
    </div>
  );
}

export default Login;
function dignInWithPopup(auth: any, provider: any) {
  throw new Error('Function not implemented.');
}
