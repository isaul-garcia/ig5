import React from 'react'
import { motion } from "framer-motion"

const FadeIn = (props) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, display: 'none' }}
            >
                {props.children}
            </motion.div>
        </>
    )
}

export default FadeIn;