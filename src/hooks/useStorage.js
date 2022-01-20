import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp as createdAt } from "../firebase/config";
import { getDownloadURL, uploadBytesResumable, ref as storageRef } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const projectStorageRef = storageRef(projectStorage, `images/${file.name}`);

        uploadBytesResumable(projectStorageRef, file).on("state_changed", (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, error => {
            setError(error);
            setProgress(null);
        }, async () => {
            const url = await getDownloadURL(projectStorageRef);
            try {
                await persistUrl(url, file);
            } catch (error) {
                alert("Error trying to persist the image");
            }
            setUrl(url);
        });

    }, [file]);
    
    return { progress, url, error }
}

const persistUrl = async (imageUrl, file) => {
    let [fileName, fileExtension] = file.name.split(".");

    try {
        const docRef = await addDoc(collection(projectFirestore, "images"), {
            imageUrl,
            fileName,
            fileExtension,
            createdAt
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
}

export default useStorage;