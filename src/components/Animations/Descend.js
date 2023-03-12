import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
    visible: { opacity: 1, scaleX: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scaleX: 1, y: -12 }
};

const Card = (props) => {
    return (
      <motion.div
        animate="visible"
        initial="hidden"
        variants={cardVariants}
      >
        {props.children}
      </motion.div>
    )
  }
  
  export default Card;