import firebase from 'firebase';
const firebaseApp = require('./firebaseApp.js');
// firebase auth object
const AUTH = firebaseApp.app.auth();

//google authentication method
export function googleSignin() {
	var provider = new firebase.auth.GoogleAuthProvider();
	AUTH.signInWithPopup(provider).then(function(result) {
		window.location.pathname = "/";
	}).catch(function(error) {
		console.log(error);
	});
}

// standard email + password register
export function standardRegister(email, password, callback) {
	AUTH.createUserWithEmailAndPassword(email, password)
		.then((user) => {
			callback(user);
		}).catch((error) => {
			alert(error.message);
		});
}

export function standardLogin(email, password, callback) {
	AUTH.signInWithEmailAndPassword(email, password)
		.then((user) => {
			callback(user);
		}).catch((error) => {
			alert(error.message);
		});
}

//signs the user out
export function signout() {
	AUTH.signOut().then(function(result) {
		window.location.pathname = "/";
	}).catch(function(error) {
		alert(error.message);
	});
}

//takes in a callback to capture value from the async callback method passed to onAuthStateChanged
export function isUserSignedin(callback) {
	AUTH.onAuthStateChanged(function(user) {
		callback(user);
	});
}
