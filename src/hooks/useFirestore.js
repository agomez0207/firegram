import { query, onSnapshot, orderBy, collection as firestoreCollection } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import { useEffect, useState } from "react";


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(firestoreCollection(projectFirestore, collection), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.docs.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });
        return () => unsub();
    }, [collection]);

    return { docs }
}

export default useFirestore;