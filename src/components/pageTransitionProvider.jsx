'use client'

import {motion} from 'framer-motion'

function PageTransitionProvider({children}) {
    return (
        <motion.div initial={{y:'-200vh'}} className='h-full' animate={{y:'0vh'}} transition={{duration:1}}>
            {children}
        </motion.div>
    )
}

export default PageTransitionProvider;
