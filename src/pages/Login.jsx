import React from 'react'
//import { Icon } from '../components/Icon';
import { handleSignInWithFacebook, handleSignInWithGitHub, handleSignInWithGoogle, handleSignInWithTwitter } from '../utils/LoginSystem';


export const Login = () => {

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
    <div>
        <h1>Login</h1>
        { methods.map((rs, index) => {
            // return <Icon className='card_login' icon={rs.name} >{rs.name}</Icon>
            return <div onClick={rs.action} key={index}>{rs.name}</div>
        }) }
    </div>
  )
}
