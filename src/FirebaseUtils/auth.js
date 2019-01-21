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
 */
export const authListener = (setUser, push, whereToPush = {success: '', fail: ''}) => {
    FirebaseAuth.onAuthStateChanged((user) => {
        console.log(user);
        if(user){
            setUser(user);
            if(whereToPush.success) {
                push(whereToPush.success);
            }
        }else{
            setUser(null);
            if(whereToPush.fail) {
                push(whereToPush.fail);
            }
        }
    });
}