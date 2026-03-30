//Importamos las instancias.

import { auth } from "./firebaseConfig";

//Funciones 

import {
  createUserWithEmailAndPassword, //Crear el usuario.
  signInWithEmailAndPassword, //Iniciar sesión.
  signOut,   //Cerrar sesión.
} from "firebase/auth"; 

// Crear Usuario
export const registerUser = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password); // Devuelve el usuario creado o error.
};

// Iniciar Sesión
export const loginUser = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Cerrar sesión
export const logoutUser = async () => {
  return await signOut(auth);
};