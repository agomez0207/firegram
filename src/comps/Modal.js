import React from "react";
import { useEffect } from "react";
import useFirestore from "../hooks/useFirestore" ;
import { motion } from "framer-motion";

function Modal({selectedImg, setSelectedImg}) {
    let { docs } = useFirestore("images");

    const handleKeyPress = (event) => {
        console.log(docs);
        docs.forEach((image, index) => {
            console.log("hola ", image);
            if(image.id === selectedImg.id) {
                if (docsLength === 1) {

                }
            }
        });
        console.log(selectedImg);
    }

    useEffect(() => {
        window.addEventListener('keydown',handleKeyPress);

        return () => window.removeEventListener("keydown", handleKeyPress);
      }, []);
    
    const handleClick = () => {
        setSelectedImg(null);
    }

    return(
        <motion.div className="backdrop" id="modal-image" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            >
                <motion.img src={`${selectedImg.imageUrl}`} alt="enlarged pic" 
                    initial={{ y:"-100vh"}}
                    animate={{ y:"0vh"}}/>
        </motion.div>
    );
}

export default Modal;