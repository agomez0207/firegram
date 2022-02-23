import * as React from 'react';
import { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux'
import { addMultipleImages, setImageIndex } from '../features/images/imageReducer';

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  const dispatch = useDispatch();

  const selectedImg = ({item, index}) => {
    setSelectedImg(item);
    dispatch(setImageIndex(index));
  }

  useEffect(() => {
    const imagesUrl = docs.map(item => {
      return [item.imageUrl];
    });
    dispatch(addMultipleImages(imagesUrl));
  }, [docs]);

  return (
    <div className="img-grid">
      {docs.map((item, index) => (
        <motion.div className="img-wrap" key={item.id}
          layout
          whileHover={{ opacity: 1 }}
          >
          <motion.img src={`${item.imageUrl}`} srcSet={`${item.imageUrl}`} loading="lazy" onClick={() => selectedImg({item, index})}
            initial = {{ opacity : 0 }}
            animate = {{ opacity : 1 }}
            transition={{ delay : 1 }}/>
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGrid;
