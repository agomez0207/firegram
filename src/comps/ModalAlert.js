import * as React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { setShowInstructions } from '../features/images/imageReducer';
import Alert from 'react-bootstrap/Alert';

function ModalAlert() {
    const images = useSelector((state) => state.image);
    const dispatch = useDispatch();
  
    if (images.showInstructions) {
      return (
        <motion.div className="modal-alert">
            <Alert variant="info" onClose={() => dispatch(setShowInstructions(false))} dismissible>
                <Alert.Heading>Instructions</Alert.Heading>
                <p>
                    To switch images press right key to go to the next image or press left right key to go to the previous
                    image. If you want to exit from image gallery press esc
                </p>
            </Alert>
        </motion.div>
      );
    }
    return null;
  }
  
  export default ModalAlert;