import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Logout({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  const LogInWithGoogle = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <p>ログアウト</p>
      <button className="googleLogOut" onClick={LogInWithGoogle}>
        ログアウト
      </button>
    </div>
  );
}

export default Logout;
