import React from 'react';

function Hearder(props){
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    )
}

export default Hearder