import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, getDocs, deleteDoc, doc, Firestore } from "firebase/firestore";

export async function GET() {
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const auth = getAuth();
    const db = getFirestore(app);

    try {
        await signInWithEmailAndPassword(auth, process.env.FIREBASE_EMAIL_ADDRESS!, process.env.FIREBASE_PASSWORD!)
        const querySnapshot = await getDocs(collection(db, "blogs"));

        const blogs: Blog[] = []
        for (const doc of querySnapshot.docs) {
            const blog: Blog = {
                title: doc.data().title,
                hidden: doc.data().hidden,
                date: doc.data().date,
                body: doc.data().body,
                id: doc.id
            }
            blogs.push(blog)
        }

        await signOut(auth)
        return new Response(JSON.stringify(blogs), {headers: {"Content-Type": "application/json"}})
    }
    catch (e: any) {
        return new Response(`Failed to fetch blogs. ${e}`, {status: 500})
    }
}