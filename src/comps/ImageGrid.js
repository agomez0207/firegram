import * as React from 'react';
import { useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from 'framer-motion';

function ImageGrid({setSelectedImg  }) {
  const { docs } = useFirestore("images");

  const selectedImg = (image) => {
    setSelectedImg(image);
  }

  return (
    <div className="img-grid">
      {docs.map((item) => (
        <motion.div className="img-wrap" key={item.id}
          layout
          whileHover={{ opacity: 1 }}
          >
          <motion.img src={`${item.imageUrl}`} srcSet={`${item.imageUrl}`} loading="lazy" onClick={() => selectedImg(item)}
            initial = {{ opacity : 0 }}
            animate = {{ opacity : 1 }}
            transition={{ delay : 1 }}/>
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGrid;
