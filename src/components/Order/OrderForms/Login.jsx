// Import FirebaseAuth and firebase.
import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import firebaseConfig from '../../../firebase'
import headerLogo from '../../../assets/logobrand.png'
import { Button, Divider } from '@material-ui/core';
import './Login.css'

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    
    // Options to use for signin
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
      },
  };

  function Login({ nextStep }) {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setIsSignedIn(!!user);
      });
      return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
    // console.log(firebase.auth().currentUser)

  
    if (!isSignedIn) {
      return (
        <div className="login__container">
            <img className="header_img" src={headerLogo} alt="header_logo" />
            <p style={{textAlign:"center"}}>Please sign-in to continue:</p>
            <Divider />
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    } 
    return (
      <div className="login__container">
        <p>Welcome! You are now signed-in!</p>
        <Divider />
        <div className="login_buttons">
            <Button variant="outlined" onClick={() => firebase.auth().signOut()}>Sign-out</Button>
            <Button onClick={nextStep} variant="contained" color="primary">Proceed with order</Button>
        </div>
      </div>
    );
  }

export default Login
