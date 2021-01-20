import React from 'react'

   function Badge(props){
        return (
            <div className="templateMain">
                <div id="templateForm">

                    <h3 id="badgeTitle">Badge:</h3>

                    <p>Name: {props.firstName} {props.lastName}</p>

                    <p>Email: {props.email}</p>
 
                    <p>Place of birth: {props.birthPlace}</p>

                    <p>Phone Number: {props.phone}</p>

                    <p>Favorite Food: {props.favFood}</p> 
                
                    <p>About Me: {props.about}</p>
                
                </div>   
            </div>
        )
    }

export default Badge