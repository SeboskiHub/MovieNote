import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

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