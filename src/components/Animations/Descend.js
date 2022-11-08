import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
    visible: { opacity: 1, scaleX: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scaleX: 1, y: -12 }
};

const FromUnder = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={cardVariants}
            >
                {props.children}
            </motion.div>
        </>
    )
}

export default FromUnder;