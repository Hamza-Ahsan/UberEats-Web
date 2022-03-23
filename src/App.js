import React from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { useEffect } from "react";
import { auth } from "./app/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
        console.log(authUser);
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
            <Login />
        ) : (
            <Home />
        )}
      </Router>
    </div>
  );
}

export default App;
