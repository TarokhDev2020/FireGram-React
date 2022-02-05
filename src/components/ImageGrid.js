import React from 'react'
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImage }) => {

    const {docs} = useFirestore('images');
    console.log(`The images are: ${docs}`);

    return (
        <div className = "img-grid">
            {docs && docs.map(doc => (
                <motion.div layout whileHover = {{opacity: 1}} className = "img-wrap" key = {doc.id} onClick = {() => setSelectedImage(doc.url)}>
                    <motion.img src = {doc.url} alt = "Uploaded Pic" initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{delay: 1}}/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
