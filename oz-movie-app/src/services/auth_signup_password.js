// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// const signUpUser = (email, password) => {

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });
// }

// export {signUpUser}

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const signUpUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        throw error;
    }
};

export { signUpUser };