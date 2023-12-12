import React from 'react'

function ChildProp(props)
{
    return (

        <>
            <h1> Iam {props.name}</h1>
            <p> My mail {props.mail}</p>
        </>

    )
}

export default ChildProp;