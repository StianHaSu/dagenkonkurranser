import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDPWhhJn6mVER7kCgMN-7FpOPAuOAg_fSU",
  authDomain: "dagenatifikonkurranse.firebaseapp.com",
  projectId: "dagenatifikonkurranse",
  storageBucket: "dagenatifikonkurranse.appspot.com",
  messagingSenderId: "967464366353",
  appId: "1:967464366353:web:9be7c8bb596263783e1cb0"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

const comp1 = collection(db, "konkurranse1")
const comp2 = collection(db, "konkurranse2")

export const submitAnswer = (comp: any, answer: any) => {
  if (comp == 1){
    return addDoc(comp1, answer);
  }

  else if (comp == 2){
    return addDoc(comp2, answer);
  }
}



