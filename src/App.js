import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from './router';
import db from './firebase/config';
import { uploadProfileAction } from './redux/actions';
import 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  db.auth().onAuthStateChanged(user => {
    setUser(user);
    if (user) {
      const profile = {
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
      };
      dispatch(uploadProfileAction(profile));
    }
  });

  const routing = useRouter(user);
  return <>{routing}</>;
}

export default App;
