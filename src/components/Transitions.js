import React from 'react'
import { motion} from 'framer-motion'

const Transitions = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen z-30 bg-white' 
        initial={{x:'100%',width:'100%'}}
        animate = {{x:'0%',width:'0%'}}
        transition={{duration:0.8, ease:'easeInOut'}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen z-20 bg-pink-500' 
        initial={{x:'100%',width:'100%'}}
        animate = {{x:'0%',width:'0%'}}
        transition={{delay:0.2,duration:0.8,ease: 'easeInOut'}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen z-10 bg-black' 
        initial={{x:'100%',width:'100%'}}
        animate = {{x:'0%',width:'0%'}}
        transition={{delay:0.4,duration:0.8,ease: 'easeInOut'}}
        />
    </>
  )
}

export default Transitions