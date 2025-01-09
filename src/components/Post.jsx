import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({author, published, content} ){
const [comments, setComments] = useState([
    'Post muito bom!'
])

const [newCommentText, setNewCommentText] = useState('')


const publishedDateFormat = format(published, "d 'de' LLLL 'às' HH:mmh",{
    locale: ptBR,
} )

const dateRelativeNow = formatDistanceToNow(published, {
    locale: ptBR,
    addSuffix: true
})

function handleCreateNewComment(){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
    
}
 function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
 }

 function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
    
 }

 function handleNewCommentInvalid(){
    event.target.setCustomValidity('Campo obrigatório')
 }

 const IsNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat}>{dateRelativeNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line=>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                name='comment'
                placeholder='Deixe seu comentário'
                onChange={handleNewCommentChange}
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required

                />
                
                <footer>
                <button disabled={IsNewCommentEmpty}type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )
               })}
            </div>
        </article>
    )
}