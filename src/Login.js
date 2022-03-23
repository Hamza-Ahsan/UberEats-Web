import React, { useRef, useState } from "react";
import { auth } from "./app/firebase";
import "./Login.css";

function Login() {
  const [started, setStarted] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const createUser = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    };


  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Uber_Eats_2018_logo.svg/2560px-Uber_Eats_2018_logo.svg.png"
          alt="Logo"
        />
      </div>
      <h1>Welcome back</h1>
      <p>Sign in with your email address or mobile number</p>
          <form>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email or mobile number"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <button onClick={signIn}>Next</button>
          </form>
          <div className="login__span">
            <span onClick={() => setStarted(true)}>New to Uber? </span>
            <span onClick={createUser} className="green">Create an account</span>
          </div>


      {/* {started ? (
        <>
          <p>Sign in with your Password</p>
          <form>
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button onClick={signIn}>Next</button>
          </form>
          <div className="login__span">
            <span className="green">Forget your password?</span>
          </div>
        </>
      ) : (
        <>
          <p>Sign in with your email address or mobile number</p>
          <form>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email or mobile number"
            />
            <button onClick={() => setStarted(true)}>Next</button>
          </form>
          <div className="login__span">
            <span onClick={() => setStarted(true)}>New to Uber? </span>
            <span className="green">Create an account</span>
          </div>
        </>
      )} */}
    </div>
  );
}

export default Login;
