import React from 'react';
import { motion } from "framer-motion";

const cardVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
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