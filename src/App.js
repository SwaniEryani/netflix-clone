import React, { useEffect } from "react";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
          {!user ? (
            <LoginScreen />
          ): (
            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <Route path="/profile">
                    <ProfileScreen />
                </Route>
          </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
