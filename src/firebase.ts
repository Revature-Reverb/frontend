import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth"

const app = firebase.initializeApp( {
	apiKey: "AIzaSyCo_yP9t0895CcCwX-uU4KOP69ioWrwCn8",
	authDomain: "auth-redux-bb19a.firebaseapp.com",
	projectId: "auth-redux-bb19a",
	storageBucket: "auth-redux-bb19a.appspot.com",
	messagingSenderId: "45081832379",
	appId: "1:45081832379:web:84c013efc60f96a5b4f29e"
} )

export const auth = getAuth( app );

export default app;