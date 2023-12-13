import {getApps, initializeApp, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAhKgRXQ1gbOfRbT4h0u8NFYiRFH68k3f0",
    authDomain: "ecommerce-11452.firebaseapp.com",
    projectId: "ecommerce-11452",
    storageBucket: "ecommerce-11452.appspot.com",
    messagingSenderId: "774044727546",
    appId: "1:774044727546:web:82b3e1c3dd4cf3b6ff7143"
  };

const firebaseApp =  initializeApp(firebaseConfig);



const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export const uploadImage = file => {
    return new Promise( (resolve, reject) => {
        const storageRef = ref(storage, `images/${file.name}-${file.lastModified}`);
        const uploadProccess = uploadBytesResumable(storageRef, file);
        
        uploadProccess.on(
            "state_change", 
            (snapshot) => console.log("La imagen se esta subiendo", snapshot), 
            reject, 
            () => {
                console.log("enter", file);
                getDownloadURL(uploadProccess.snapshot.ref).then(resolve);
            });
    });
}