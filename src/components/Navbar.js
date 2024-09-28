import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faShip,
  faRightToBracket,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

function Navbar({ isAuth, userName }) {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>

      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faShip} />
            投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            ログアウト
          </Link>
        </>
      )}
      {userName !== '' && <div className="username">user:{userName}</div>}
    </nav>
  );
}
export default Navbar;
