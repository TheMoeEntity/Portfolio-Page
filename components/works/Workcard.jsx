import styles from './work.module.css'
import devspace from '../../public/Images/devspace.jpeg'
import Image from 'next/image'
import { useState } from 'react'
import foodfun from '../../public/Images/foodfun.png'

export const Workcard = ({img,stacks,details,page}) => {
    
  return (
    <div className={styles.works}>
        <Image objectFit='cover' src={img} layout="fill" />
        <div className={styles.workdetails}>
            {details}
          <div className={styles.links}>
              <i className='fa-solid fa-link'></i>
              <a target={`_blank`} rel="noopener noreferrer" href={`${page}`}>{page}</a>
          </div>
        </div>
        <div style={{fontSize:'12px'}} className={styles.details}>
            <p>{stacks}</p>
        </div>
    </div>
  )
}
