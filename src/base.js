// React firebase specific package
// Will allow us to mirror our state to our firebase changes
import Rebase from 're-base';
// Official firebase package
// Will use for anything that is not just mirroring to state
// When we set up re-base, we have to pass it our firebase
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCa71lUNard7F1wGGus8gVWwV8acvUzrIM",
    authDomain: "react-firebase-seafood-market.firebaseapp.com",
    databaseURL: "https://react-firebase-seafood-market.firebaseio.com"
});

// re-base bindings
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// This is a default export
export default base;