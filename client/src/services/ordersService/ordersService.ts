import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import type { CartItem } from "../../context/CartContext";

export const savePurchase = async (userId: string, items: CartItem[], total: number) => {
  try {
    const docRef = await addDoc(collection(db, "purchases"), {
      userId,
      items: items.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price
      })),
      totalPrice: total,
      status: "completed",
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving purchase to Firebase:", error);
    throw error;
  }
};

export const getUserPurchases = async (userId: string) => {
  try {
    const q = query(
      collection(db, "purchases"),
      where("userId", "==", userId)
    );
    
    const querySnapshot = await getDocs(q);
    const purchases = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // Convert Firestore Timestamp to Date object if it exists
        createdAt: data.createdAt?.toDate() || new Date()
      };
    });
    // Sort locally to avoid needing a Firestore Composite Index
    purchases.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    return purchases;
  } catch (error) {
    console.error("Error fetching purchases from Firebase:", error);
    throw error;
  }
};
