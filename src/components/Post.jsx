import React, { useState } from 'react'
import { getComments } from '../services/posts.service';



export const Post = ({post}) => {

    const [comments, setComments] = useState([]);

    const watchComments = async (id) => {        
        const comments = await getComments(id);
        setComments(comments);
    }
    // Cada post debe mostrar: foto y nombre del usuario que hizo el post, imagen y texto del post, tags del post, cantidad de likes y comentarios.
    const { id, text, image, owner: { firstName, lastName }, tags, likes } = post;
    return (
    <div className='postCard'>
        <h5>{text.toUpperCase()}</h5>
        <img className='img_post' alt={firstName + lastName} src={image} />
        <p className='owner'>{firstName} {lastName}</p>
        <ul>
            {
                tags.map((tag, index) => {
                    return <li key={index}>{tag}</li>
                })
            }
        </ul>
        <div className='likes_comments'>
            <div className='likes'>                
                <p className='like_item'>likes:{likes}</p>
            </div>
            <div className='comments' onClick={() => watchComments(id)}>
                <p className='like_item'>comments</p>
            </div>
        </div>
    </div>
  )
}
