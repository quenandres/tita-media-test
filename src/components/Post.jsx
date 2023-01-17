import React, { useEffect, useState } from 'react'
import { getComments, getUser } from '../services/posts.service';
import Modal from 'react-modal';
import { Comments } from './Comments';
import { User } from './User';

export const Post = ({ post }) => {

    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalUserIsOpen, setUserIsOpen] = useState(false);

    const watchComments = async (id) => {
        const { data } = await getComments(id);
        setComments(data);
        openModal();
    }

    const watchUser = async (id) => {
        const { data } = await getUser(id);
        console.log('data');
        console.log(data);
        setUser(data);
        openModalUser();
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }    

    function openModalUser() {
        setUserIsOpen(true);
    }

    function closeModalUser() {
        setUserIsOpen(false);
    }

    // Cada post debe mostrar: foto y nombre del usuario que hizo el post, imagen y texto del post, tags del post, cantidad de likes y comentarios.
    const { id, text, image, owner: { firstName, lastName }, tags, likes } = post;
    return (
        <div className='postCard'>
            <h5>{text.toUpperCase()}</h5>
            <img className='img_post' alt={firstName + lastName} src={image} />
            <p className='owner'>
                <button onClick={() => watchUser(post.owner.id)} className='comments_button'>{firstName} {lastName}</button>                
            </p>
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
                <div className='comments'>
                    <button className='comments_button' onClick={() => watchComments(id)}>Comentarios</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}                
                contentLabel="Comentarios"

                ariaHideApp={false}
            >               
                <Comments comments={comments}/>                                
            </Modal>

            
            <Modal
                isOpen={modalUserIsOpen}
                onRequestClose={closeModalUser}                
                contentLabel="User"

                ariaHideApp={false}
            >               
                <User user={user}/>
            </Modal>
        </div>
    )
}
