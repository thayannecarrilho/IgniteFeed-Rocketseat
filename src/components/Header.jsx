
import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={igniteLogo} alt='Logo do Ignite'/>
            <h1>Ignite Feed</h1>
        </div>
    
    
    )
}