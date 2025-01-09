import {Header} from './components/Header'
import {Post} from './components/Post'
import styles from './App.module.css';
import './global.css'
import { Sidebar } from './components/Sidebar';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Dev Web'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa!!!',},
      {type: 'link', content: 'jane.design/doctorcare'},
    ], 
    published: new Date('2025-01-01 20:00:00')
  },
]


function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                published={post.published}
              />
            )
          })}
        </main>
      </div>
    </div>
   
  )
}

export default App
