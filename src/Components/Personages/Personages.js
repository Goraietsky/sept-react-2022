import React from 'react';

export const Personages = (props) => {
    let {id,name,status,species,gender,image}=props
    return (
        <div className={"wrap"}>

            <div className={"card"}>
                <h2>id={id}</h2>
                <h2>Name={name}</h2>
                <h2>Status={status}</h2>
                <h2>Species={species}</h2>
                <h2>Gender={gender}</h2>
                <img src={image}/>
            </div>

        </div>
    );
};