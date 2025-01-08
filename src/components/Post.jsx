import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/thayannecarrilho.png"/>
                    <div className={styles.authorinfo}>
                        <strong>Thayanne Carrilho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='7 de janeiro às 16h' datetime="2024-01-07">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW </p>
                <p>👉 {' '} <a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder='Deixe seu comentário'/>
                <footer>
                <button type='submit'>Comentar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}