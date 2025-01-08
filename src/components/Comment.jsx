import styles from './Comment.module.css'
import { ThumbsUp, Trash} from 'phosphor-react'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/thayannecarrilho.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thayanne Carrilho</strong>
                            <time title='07 de janeiro às 17h' datetime="2025-01-07">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!!</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp size={20} />
                        Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}