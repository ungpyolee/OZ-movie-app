import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
    });
}

export {signInUser};