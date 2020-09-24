import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4CPyqfYnCJEHBkxUiqhCVt4SdB4RcPjg',
  authDomain: 'goit-react-hw-phonebook.firebaseapp.com',
  databaseURL: 'https://goit-react-hw-phonebook.firebaseio.com',
  projectId: 'goit-react-hw-phonebook',
  storageBucket: 'goit-react-hw-phonebook.appspot.com',
  messagingSenderId: '238582005891',
  appId: '1:238582005891:web:f681652ce1c563b9225bb6',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
