import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Initialize Firebase Auth
const auth = getAuth();

// Sign up a user
const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in a user
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign out the current user
const signOutUser = () => {
  return signOut(auth);
};
