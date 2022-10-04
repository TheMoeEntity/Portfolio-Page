import styles from './work.module.css'
import devspace from '../../public/Images/devspace.jpeg'
import Image from 'next/image'
import { useState } from 'react'
import foodfun from '../../public/Images/foodfun.png'

export const Workcard = ({img,stacks,details}) => {
    const [didhover,setDidHover] = useState(false)
  return (
    <div className={styles.works}>
        <Image objectFit='cover' src={img} layout="fill" />
        <div className={styles.workdetails}>
            {details}
        </div>
        <div className={styles.details}>
            <p>{stacks}</p>
        </div>
    </div>
  )
}
