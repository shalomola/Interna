import { motion } from "framer-motion"
import { MARQUEE } from "../constants/data"

const Marquee = () => {
    return (
      <div>
        <div className="w-full relative h-full overflow-hidden">
          <motion.div
            className="flex h-full"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
          >
            {/* First set of images */}
            {MARQUEE.map((image) => (
              <motion.img 
                key={image.id} 
                className='py-2 h-64 lg:h-56 ml-2'
                src={image.imgSrc}
              />
            ))}
            {/* Duplicate set of images */}
            {MARQUEE.map((image) => (
              <motion.img 
                key={`${image.id}-duplicate`} 
                className='py-2 lg:h-56 ml-2'
                src={image.imgSrc}
              />
            ))}
          </motion.div>
        </div>
      </div>
    )
  }
  

export default Marquee