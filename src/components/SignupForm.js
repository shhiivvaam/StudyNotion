import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();

        if(formData.password !== formData.confirmPassword) {
            toast.error('Password do not match!!');
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created Successfully");
        
        const accountData = {
            ...formData
        }
        console.log('Printing Account Data')
        console.log(accountData)

        navigate('/dashboard');
    }

    return (
        <div>
            {/* Student Instructor Tab */}
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* First Name and Last Name */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                        />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname}
                        />
                    </label>
                </div>

                {/* Email Address */}
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                    />
                </label>

                {/* Create Password and Confirm Password */}
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input required
                            type={showPassword ? 'text' : 'passoword'}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                        />
                        {/* <span onClick={() => setShowPassword(!showPassword)}> */}
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword
                                ?
                                <AiOutlineEye />
                                :
                                <AiOutlineEyeInvisible />
                            }
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input required
                            type={showPassword ? 'text' : 'passoword'}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                        />
                        {/* <span onClick={() => setShowPassword(!showPassword)}> */}
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword
                                ?
                                <AiOutlineEye />
                                :
                                <AiOutlineEyeInvisible />
                            }
                        </span>
                    </label>
                </div>

                <button type='submit'>
                    Create Account
                </button>
            </form>
        </div >
    )
}

export default SignupForm