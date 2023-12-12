import React from 'react'
import ChildProp from './ChildProp'

const ParentProp = () => {
    const name1 = "Vaishnavi M"
    const mail1 = "vaish1194"
    const name2 = "Vaishhhhhhh"
    const mail2 = "vaishhh1194"

    return(
        <>
            <ChildProp name = {name1} email = {mail1}/>
        </>
    )
}

export default ParentProp;