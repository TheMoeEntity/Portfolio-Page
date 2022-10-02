import styles from '../../styles/Home.module.css'

export const Partners = () => {
  return (
    <section className={styles.partners}>
    <div className={styles.overlay}></div>
    <div>
      <span>
        <i className='fa-solid fa-list-check'></i>
        <h4>{`Projects: 4`}</h4> 
      </span>
      <span>
      <i className='fa-solid fa-kitchen-set'></i>
      <h4>{`Skills: 7`}</h4>
      </span>
      <span>
      <i className='fa-solid fa-handshake'></i>
      <h4>{`Partners: 2`}</h4>
      </span>
      <span>
      <i className='fa-solid fa-briefcase'></i>
      <h4>{`Portfolio: 11 `}</h4>
      </span>
    </div>
    </section>
  )
}
