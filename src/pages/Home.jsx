
import { useEffect, useState } from 'react';
import { Post } from '../components/Post';
import { getPosts, getPostTag } from '../services/posts.service';
import '../App.css';
import { Tagslist } from '../components/Tagslist';
import { addTags } from '../utils/StorageSystem';


const Home = () => {

  const [posts, setPosts] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(false);
  const [filter, setFilter] = useState('')

  useEffect(() => {    
    async function fetchData() {
      const posts = await getPosts();
      const { data } = posts;
      setPosts( data );      
      setTagsLoading(true);
    }
    fetchData();
  }, []);

  useEffect(() => {
    posts.map(({tags}) => {
      if( tags.length > 0 ) {
        addTags(tags);
      }
    })
  }, [tagsLoading]);

  useEffect(() => {
    console.log('cambia filter');
    console.log(filter);
    if( filter != '' ) {
      async function fetchData() {
        const posts = await getPostTag(filter);
        const { data } = posts;
        setPosts( data );      
        setTagsLoading(true);
      }
      fetchData();
    }
  }, [filter]);

  return (
    <div className='content_principal'>
      { tagsLoading && <Tagslist setFilter={setFilter} />  }
      {
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      }
    </div>
  )
}

export default Home;
