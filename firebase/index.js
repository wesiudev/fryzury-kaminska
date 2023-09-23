import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

async function getImages(websiteName) {
  const docRef = doc(db, websiteName, "images");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

async function addImage(websiteName, imageData) {
  const docRef = doc(db, websiteName, "images");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "images"), { images: [imageData] });
  } else {
    await updateDoc(doc(db, websiteName, "images"), {
      images: arrayUnion(imageData),
    });
  }
}
async function deleteImage(websiteName, imageData) {
  const docRef = doc(db, websiteName, "images");
  await updateDoc(docRef, {
    images: arrayRemove(imageData),
  });
}

export { getImages, addImage, deleteImage, storage, auth };
