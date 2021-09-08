import "firebase/analytics";

var firebase = require('firebase');

/* REPLACE YOUR FIREBASE CONFIG HERE */
const firebaseConfig = {};

export var app = firebase.default.initializeApp(firebaseConfig);
export const analytics = firebase.default.analytics();
