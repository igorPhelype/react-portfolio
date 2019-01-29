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
 * Recebe a função push, que será a função chamada para redirecionar
 * whereToPush é um objeto que recebe:
    - 'success' => caminho para onde será redirecionado caso usuário esteja autenticado
    - 'fail' => caminho para onde será redirecionado caso usuário não esteja autenticado
 * @param {*} setUser 
 * @param {*} push 
 * @param {*} whereToPush 
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