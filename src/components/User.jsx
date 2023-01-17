import { useState } from "react"
import { getUser } from "../services/posts.service";


export const User = ({user}) => {

    const {dateOfBirth,email,firstName,gender,id,lastName,location,phone,picture,registerDate,title,updatedDate} = user;
/*    
dateOfBirth: "1958-08-20T08:43:07.057Z"
email: "kayla.bredesen@example.com"
firstName: "Kayla"
gender: "female"
id: "60d0fe4f5311236168a109ed"
lastName: "Bredesen"
location: {street: '5225, Hansemyrveien', city: 'Vingrom', state: 'Finnmark - FinnmÃ¡rku', country: 'Norway', timezone: '+11:00'}
phone: "80844280"
picture: "https://randomuser.me/api/portraits/med/women/13.jpg"
registerDate: "2021-06-21T21:02:13.446Z"
title: "miss"
updatedDate: "2021-06-21T21:02:13.446Z"
*/

    return (        
        <div className="cardUser">
            <h1>{firstName} {lastName}</h1>
            <img src={picture} />
            <div>Email: {email}</div>
            <div>Genero: {gender}</div>
            <div>Telefono: {phone}</div>
        </div>        
    )
}
