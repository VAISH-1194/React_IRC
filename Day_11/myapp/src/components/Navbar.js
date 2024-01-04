import { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible)
    }

    
    const name = useRef(null)
    // const dob = useRef(null)
    const age = useRef(null)
    const email = useRef(null)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password = useRef(null)
    const conpw = useRef(null)
    const phone = useRef(null)

    const [errors,setErrors] = useState({
        name: '',
        date: '',
        age: '',
        email: '',
        password: '',
        conpw: '',
        phone: ''
    })

    const SignUp = (e) => {
        e.preventDefault();

        const formData = {
            name: name.current.value,
            // dob: dob.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value,
            conpw: conpw.current.value,
            phone: phone.current.value
        }

        console.log(formData.email.length)
        if(formData.email.length === 0)
        {
            setErrors({ ...errors,email: 'email is empty !'});
        }
        // else if(formData.email.length < 16)
        // {
        //     setErrors({...errors,email: 'min 6 chars'});
        // }
        else if(!emailRegex.test(formData.email))
        {
            setErrors({...errors,email: 'Invalid email format!'});
        }
        else 
        {
            setErrors({ ...errors,email: ''});
        }

        name.current.value = ''
        // dob.current.value = ''
        age.current.value = ''
        email.current.value = ''
        password.current.value = ''
        conpw.current.value = ''
        phone.current.value = ''

        // toast.success('Signing Up Successfull!', {
        //     position: "bottom-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        // });

    }
    // const handleCahnge = (e) => {
    //     setData({ ...data, [e.target.id]: e.target.value })
    // }
    return (
        <>
            <div>
                <div className="navbar">
                    <div className="navtitle">
                        Hello world
                    </div>
                    <ul className="navlinks">

                        {/* <li>
                            Home
                        </li>

                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li> */}
                        <li onClick={toggle}>
                            SignUp
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title">SignUp</h2>
                            <form className="auth-container h-30v shadow" onSubmit={SignUp}>
                                <input type="text" name="" id="name" placeholder="name" className="auth-input" ref={name} />

                                {
                                    errors.email === '' ?
                                    ''
                                    :
                                    <span className='error-comp'>
                                        {errors.email}
                                    </span>
                                }

                                {/* <input type="date" name="" id="dob" placeholder="DOB" className="auth-input" ref={dob}  /> */}
                                <input type="number" name="" id="age" placeholder="age" className="auth-input" ref={age}  />
                                <input type="email" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                                <input type="password" name="" id="password" placeholder="password" className="auth-input" ref={password} />
                                <input type="password" name="" id="conpw" placeholder="confirm password" className="auth-input" ref={conpw} />
                                <input type="number" name="" id="phone" placeholder="phone" className="auth-input" ref={phone} />

                                <span className='btn-container'>
                                    <input type="submit" value="Sign-Up" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
            </div>
            
        </>
    )
}

export default NavBar