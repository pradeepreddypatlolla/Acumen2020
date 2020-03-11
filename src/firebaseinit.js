import  firebase from 'firebase/app';
import 'firebase/firestore';
import config from './firebaseconfig';


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
 