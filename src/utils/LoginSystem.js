import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth"
import { auth } from '../config/firebaseAuth'
import { useNavigate } from "react-router-dom";

export const handleSignInWithGoogle = () => {

    const navigate = useNavigate();

    const providerGoogle = new GoogleAuthProvider();
    signInWithPopup(auth, providerGoogle)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential) {
                const userAvatar = result.user.photoURL
                const userName = result.user.displayName
                localStorage.setItem('user', JSON.stringify(userName));
                localStorage.setItem('userAvatar', JSON.stringify(userAvatar));
                navigate("/home");
            }
        }).catch((error) => {
            console.log(error);
        });
};

export const handleSignInWithFacebook = () => {
    const providerFacebook = new FacebookAuthProvider();
    signInWithPopup(auth, providerFacebook)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            if (credential) {
                const userAvatar = result.user.photoURL
                const userName = result.user.displayName
                localStorage.setItem('user', JSON.stringify(userName));
                localStorage.setItem('userAvatar', JSON.stringify(userAvatar));
                navigate("/home");
            }
        }).catch((error) => {
            console.log(error);
        });
};

export const handleSignInWithGitHub = () => {
    const providerGitHub = new GithubAuthProvider();
    signInWithPopup(auth, providerGitHub)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            if (credential) {
                //TODO: Determinar datos para usar
                console.log('credential');
                console.log(credential);
            }
        }).catch((error) => {
            console.log(error);
        });
};

export const handleSignInWithTwitter = () => {
    const providerTwitter = new TwitterAuthProvider();
    signInWithPopup(auth, providerTwitter)
        .then((result) => {
            const credential = TwitterAuthProvider.credentialFromResult(result);
            if (credential) {
               //TODO: Determinar datos para usar
                console.log('credential');
                console.log(credential);
            }
        }).catch((error) => {
            console.log(error);
        });
};