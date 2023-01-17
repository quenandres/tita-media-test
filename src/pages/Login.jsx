import React from 'react'
//import { Icon } from '../components/Icon';
import { handleSignInWithFacebook, handleSignInWithGitHub, handleSignInWithGoogle, handleSignInWithTwitter } from '../utils/LoginSystem';


const Login = () => {

    const methods = [
        {
            name: 'google',
            action: handleSignInWithGoogle
        },
        {
            name: 'twitter',
            action: handleSignInWithTwitter
        },
        {
            name: 'github',
            action: handleSignInWithGitHub
        },
        {
            name: 'facebook',
            action: handleSignInWithFacebook
        }
    ]


  return (
    <div className='loginContainer'>
        { methods.map((rs, index) => {
            // return <Icon className='card_login' icon={rs.name} >{rs.name}</Icon>
            return <div className='social_login' onClick={rs.action} key={index}>{rs.name}</div>
        }) }
    </div>
  )
}

export default Login;