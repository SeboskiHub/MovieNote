import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

/* Guardar nota */
export const saveNote = async (
  uid: string,
  movie: any,
  emotion: string,
  note: string
) => {
  await addDoc(collection(db, "notes"), {
    uid,
    movieId: movie.id,
    title: movie.title || movie.name,
    poster_path: movie.poster_path,
    emotion,
    note,
    createdAt: serverTimestamp()
  });
};

/* Leer notas del usuario */
export const getUserNotes = async (uid: string) => {
  const q = query(
    collection(db, "notes"),
    where("uid", "==", uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};