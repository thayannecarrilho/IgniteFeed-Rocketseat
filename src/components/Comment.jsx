import styles from './Comment.module.css'
import {Avatar} from './Avatar'
import { ThumbsUp, Trash} from 'phosphor-react'
import { useState } from 'react'



export function Comment({content,  onDeleteComment}){
const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment(){
    onDeleteComment(content)
}

function handleLikeComment(){
    setLikeCount(likeCount + 1)
}



    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/thayannecarrilho.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thayanne Carrilho</strong>
                            <time title='07 de janeiro às 17h' >Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                    <ThumbsUp size={20} />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}