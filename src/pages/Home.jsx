
import { useEffect, useState } from 'react';
import { getPosts } from '../services/posts.service';

const Home = () => {

  useEffect(() => {   
    getPosts();    
  }, [])
  

  return (
    <div className='content_principal'>

    </div>
  )
}

export default Home;
