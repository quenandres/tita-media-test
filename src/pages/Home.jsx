
import { useEffect, useState } from 'react';
import { Post } from '../components/Post';
import { getPosts, getComments, getPostTag } from '../services/posts.service';
import '../App.css';

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {  
    
    async function fetchData() {
      const posts = await get_posts();
      const { data } = posts;
      setPosts( data );
    }
    fetchData();
  }, []);  


  const get_posts = async () => {
    const res = await getPosts();
    return res;
  }

  return (
    <div className='content_principal'>
      {
        posts.map((post) => {
          return <Post 
            key={post.id} 
            post={post} 
          />
        })
      }
    </div>
  )
}

export default Home;
