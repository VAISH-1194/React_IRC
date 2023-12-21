import React, { useEffect } from 'react'
import '../Assets/CSS/core.css'
import { Edituser } from '../Services/API';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../Services/API';
import { useState, useParams } from 'react';

const EditUsers = () => {
    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()
    
    const [data,setData] = useState({
        username:'',
        password:''
    })
    
    const fetchUser = async()=>
    {
        try{
            const res = await getUserId(id)
            setData(res.data)
        }
        catch(e)
        {
            console.log(e)
        }
    }


    const handleChange = (e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res2 = await Edituser(id,data)
            console.log(res2.status)

            if(res2.status === 200)
            {
                alert('User Updated')
                navigate('/')
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])

    console.log(data)

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' value = {data.username} id='username' placeholder='username' onChange={handleChange}/>
        <input type='text' value = {data.password} id='password' placeholder='password' onChange={handleChange}/>
        <button type='submit' className='submit-btn'> Update </button>
      </form>
    </>
  )
}

export default EditUsers;
