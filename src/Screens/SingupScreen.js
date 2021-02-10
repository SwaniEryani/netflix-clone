import React, { useRef } from "react";
import "./SingupScreen.css";
import {auth} from '../firebase';

export default function SingupScreen() {

  const emailRef = useRef(null);
  const passRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    ).then ((authUser)=>{
      console.log(authUser)
    }).catch((error)=>{
      alert(error.message);
    })
  };

  const singIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    ).then ((authUser)=>{
      console.log(authUser)
    }).catch((error)=>{
      alert(error.message);
    })
  };

  return (
    <div className="singupScreen">
      <form>
        <h1> Sing Up</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input  ref={passRef} placeholder="Password" type="password" />
        <button type="submit" onClick={singIn}>
          Sing In
        </button>
        <h4>
          <span className="singupScreen__gray">New to Netflix? </span>{" "}
          <span className="singupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
