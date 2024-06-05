import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../firebase'

const AuthGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    //   console.log("User signed in: ", user);
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error("Error during sign-in: ", errorCode, errorMessage, email, credential);
      throw error; // throw error to handle it properly in the calling function
    }
  };
  
  export { AuthGoogle };


// const AuthGoogle = () => {

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // const credential = GoogleAuthProvider.credentialFromResult(result);
//         // const token = credential.accessToken;
//         const user = result.user;
//         // console.log("User signed in: ", user);
//         // localStorage.setItem('userData', JSON.stringify(result.user));
//         console.log(user);
//         return user;
//       }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         console.error("Error during sign-in: ", errorCode, errorMessage, email, credential);
//       });
//   };

// export { AuthGoogle };
