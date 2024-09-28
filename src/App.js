import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const [userName, setUserName] = useState('');
  return (
    <Router>
      <Navbar isAuth={isAuth} userName={userName} />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/login"
          element={
            <Login
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUserName={setUserName}
            />
          }
        ></Route>

        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route
          path="/logout"
          element={
            <Logout
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUserName={setUserName}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
