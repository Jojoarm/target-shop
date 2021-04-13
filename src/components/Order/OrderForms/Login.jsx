// Import FirebaseAuth and firebase.
import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import firebaseConfig from '../../../firebase'

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    
    // Options to use for signin
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
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
    console.log(firebase.auth().currentUser)

    // if (!!isSignedIn) {
    //     nextStep()
    //   } 
    //   return (
    //     <div>
    //         <h1>My App</h1>
    //         <p>Please sign-in:</p>
    //         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    //     </div>
    //   );
  
    if (!isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    } 
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        <button onClick={nextStep}>Proceed with order</button>
      </div>
    );
  }

export default Login


// import firebaseConfig from '../../../firebase'
// import * as firebaseui from "firebaseui";
// import firebase from "firebase";

// export class Login extends Component {
//     componentDidMount() {
//         const fbase = firebase.initializeApp(firebaseConfig);
//         const uiConfig = {
//           signInSuccessUrl: "https://netflix-clone-ankur.herokuapp.com/", //This URL is used to return to that page when we got success response for phone authentication.
//           signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
//           tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
//         };
//         var ui = new firebaseui.auth.AuthUI(firebase.auth());
//         ui.start("#firebaseui-auth-container", uiConfig);
//       }

//     render() {
//         return (
//             <div>
//                 <h1>REACT PHONE AUTHENTICATION</h1>
//                 <div id="firebaseui-auth-container"></div>
//             </div>
//         )
//     }
// }