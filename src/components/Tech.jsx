import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  
  return (
    <motion.div variants={textVariant()}>
      <div className='mb-6'>
        <p className={styles.sectionSubText}>Languages, frameworks, libraries</p>
        <h1 className={styles.sectionHeadText}>Tech Skills.</h1>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology)=>(
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
            <h3 className='text-secondary text-center'>{technology.name}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Tech, "skills")