import React, { useRef } from 'react'
export default function Form() {
    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    const conpwInputRef = useRef(null)
    const phoneInputRef = useRef(null)
    // const dobInputRef = useRef(null)
    const ageInputRef = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData ={
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            conpw: conpwInputRef.current.value,
            phone: phoneInputRef.current.value,
            // dob: dobInputRef.current.value,
            age: ageInputRef.current.value
        }
        console.log(formData)

        nameInputRef.current.value=''
        emailInputRef.current.value=''
        passwordInputRef.current.value=''
        conpwInputRef.current.value=''
        phoneInputRef.current.value=''
        // dobInputRef.current.value=''
        ageInputRef.current.value=''

        emailInputRef.current.focus()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type='text' id='name' ref={nameInputRef}/>
            {/* <input type='date' id='dob' ref={dobInputRef}/> */}
            <input type='number' id='age' ref={ageInputRef}/>
            <input type='email' id='email' ref={emailInputRef}/>
            <input type='password' id='password' ref={passwordInputRef}/>
            <input type='password' id='conpw' ref={conpwInputRef}/>
            <input type='number' id='phone' ref={phoneInputRef}/>

            <input type='submit' value='Sign-Up'/>
        </form>

    </div>
  )
}