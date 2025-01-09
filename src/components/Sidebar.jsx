import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import {Avatar} from './Avatar'

export function Sidebar(){
    return(
        <div className={styles.sidebar}>
            <img className={styles.cover}src='https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D60'/>
            <div className={styles.profile}>
            <Avatar  hasBorder src="https://github.com/thayannecarrilho.png"/>
                <strong>Thayanne</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>


        </div>
    )
}