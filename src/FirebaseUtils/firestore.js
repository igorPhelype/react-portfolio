/**
 *  index.js:1446 [2019-01-29T01:24:12.136Z]  @firebase/firestore: Firestore (5.7.3): 
    The behavior for Date objects stored in Firestore is going to change
    AND YOUR APP MAY BREAK.
    To hide this warning and ensure your app does not break, you need to add the
    following code to your app before calling any other Cloud Firestore methods:

    const firestore = firebase.firestore();
    const settings = { your settings... timestampsInSnapshots: true};
    firestore.settings(settings);

    With this change, timestamps stored in Cloud Firestore will be read back as
    Firebase Timestamp objects instead of as system Date objects. So you will also
    need to update code expecting a Date to instead expect a Timestamp. For example:
    
        // Old:
        const date = snapshot.get('created_at');
        // New:
        const timestamp = snapshot.get('created_at');
        const date = timestamp.toDate();
    
    Please audit all existing usages of Date when you enable the new behavior. In a
    future release, the behavior will change to the new behavior, so if you do not
    follow these steps, YOUR APP MAY BREAK.
 */

import FirebaseApp from "../config/firebase";

const Firestore = FirebaseApp.firestore();

Firestore.settings({timestampsInSnapshots: true});

/**
 * Pega os dados específicos de uma collection
 * Retorna uma Promise com o array dos items
 * @param {*} collectionName 
 */
const FirestoreGet = (collectionName) => {
    return new Promise((resolve, reject) => {
        Firestore.collection(collectionName).get().then(response => {
            const items = response.docs.map(item => item.data());
            resolve(items);
        }).catch(e => {
            reject(e)
        });
    });
}

export default Firestore;

export {
    FirestoreGet
}