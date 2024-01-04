import React, { useEffect, useState } from 'react'

const WithLoading = (WrappedComponent) => {
  return function WithLoading (props){
     const [isLoading, setIsLoading] =useState(true)

    useEffect (()=>{

        setTimeout(()=>{
            setIsLoading(false)
        },2000)

    },[])    
    return isLoading ? (
    <>
    Loading
    </>) :(
        <WrappedComponent {...props}/>
    )
  }
}

export default WithLoading