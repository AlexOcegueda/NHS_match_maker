import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = () => {
  return signOut(auth);
};
