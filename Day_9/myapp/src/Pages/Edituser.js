import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { editUser } from '../Services/Api'
import { useParams } from 'react-router-dom'
import { getUserId } from '../Services/Api'
import { useEffect } from 'react'

const Edituser = () => {

    const { id } = useParams()

    const fetchUser = async () => {
        try {
            const res = await getUserId(id)
            setData(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    console.log(id)
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res2 = await editUser(id, data)
            console.log(res2.status)
            if (res2.status === 200) {
                alert('user added')
                navigate('/')
            }
        }
        catch {

        }
    }
    useEffect(() => {
        fetchUser()
    }, []);
    console.log(data)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={data.username} id='username' placeholder='username' onChange={handleChange} />
                <input type='password' value={data.password} id='password' placeholder='password' onChange={handleChange} />
                <button type='submit' className='submit-btn'>Update</button>
            </form>
        </>
    )
}
export default Edituser
