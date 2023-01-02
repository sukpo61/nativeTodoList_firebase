import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyD6trVgVLj_UzoKmBmZ2pWX44j9ZLgFGqk",
  authDomain: "nativetodolist.firebaseapp.com",
  projectId: "nativetodolist",
  storageBucket: "nativetodolist.appspot.com",
  messagingSenderId: "11037294657",
  appId: "1:11037294657:web:5072139462213feb8306c0",
  measurementId: "G-CRYTSRWK2D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
