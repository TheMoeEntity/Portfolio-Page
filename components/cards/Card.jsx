import styles from './cards.module.css'
export const Card = ({name,classname,border,progress,width}) => {
 
    return (
    
    <div style={{borderLeft:`3px solid ${border}`}} className={styles.card}>
        <span><i className={classname}></i></span>
        <span>{name}</span>
        {
          progress && 
          <div className={styles.progress}>
            <div style={{width:width}} className={styles.bar}></div>
          </div>
        }
    </div>
  )
}
