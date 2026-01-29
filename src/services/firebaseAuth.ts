import auth from '@react-native-firebase/auth';

// cadastro
export async function registerFirebase(email: string, password: string) {
  return await auth().createUserWithEmailAndPassword(email, password);
}

// login
export async function loginFirebase(email: string, password: string) {
  return await auth().signInWithEmailAndPassword(email, password);
}

// logout
export async function logoutFirebase() {
  return await auth().signOut();
}
