import FirebaseApp from "../config/firebase";

const FirebaseAuth = FirebaseApp.auth();

export const signInEmailPass = ({email, password}) => {
    return FirebaseAuth.signInWithEmailAndPassword(email, password);
}

export const authStateChanged = (callback) => {
    FirebaseAuth.onAuthStateChanged(callback);
}

/**
 * 
 */
export const signOut = () => {
    return FirebaseAuth.signOut();
}

/**
 * Recebe a função 'setUser', que será a função chamada para alterar o reducer
 * @param {*} setUser 
 */
export const authListener = (setUser) => {
    FirebaseAuth.onAuthStateChanged((user) => {
        console.log(user);
        if(user){
            setUser(user);
        }else{
            setUser(null);
        }
    });
}