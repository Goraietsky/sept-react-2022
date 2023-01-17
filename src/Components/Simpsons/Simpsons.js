import React from 'react';

export const Simpsons = (props) => {
    let {itemName,info,pic}=props
    return (
        <div className={"wrap"}>

            <div className={"card"}>
                <h2>{itemName}</h2>
                <h3>{info}</h3>
                <img src={pic}/>
            </div>

        </div>
    );
};
