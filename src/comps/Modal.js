import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux'
import { setImageIndex } from '../features/images/imageReducer';
import ModalAlert from "./ModalAlert";

function Modal({selectedImg, setSelectedImg}) {
    const images = useSelector((state) => state.image);
    const dispatch = useDispatch();

    const handleKeyPress = (event) => {
        let imageIndex = images.index;
        let imageArrayLength = images.value.length;

        // Right arrow key press
        if (event.keyCode === 39) {
            let index = ++imageIndex > --imageArrayLength ? 0 : imageIndex;
            dispatch(setImageIndex(index));
            setSelectedImg({imageUrl: images.value[index]});
        }

        // Left arrow key press
        if (event.keyCode === 37) {
            let index = --imageIndex < 0 ? --imageArrayLength : imageIndex;
            dispatch(setImageIndex(index));
            setSelectedImg({imageUrl: images.value[index]});
        }

        //Escape key press
        if (event.keyCode === 27) {
            setSelectedImg(null);
        }
        
    }

    useEffect(() => {
        window.addEventListener('keydown',handleKeyPress);

        return () => window.removeEventListener("keydown", handleKeyPress);
      }, [images]);

    return(
        <motion.div className="backdrop" id="modal-image"
            initial={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            animate={{ opacity: 1 }}
            >
                <motion.img src={`${selectedImg.imageUrl}`} alt="enlarged pic" key={selectedImg.imageUrl}
                    initial={{ y:"-100vh"}}
                    transition={{ type: "spring", stiffness: 100 }}
                    animate={{ y:"0vh"}}/>
            <ModalAlert />
        </motion.div>
    );
}

export default Modal;