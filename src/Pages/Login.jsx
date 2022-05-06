import { useState } from 'react'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return (
    <div className="">
        <div className="container-xxl position-relative login-background">
            <div className="container m-auto justify-center">
                <div className="row w-50 w-lg-75 m-auto">
                    <div className="w-75 px-6 bg-white shadow-sm m-auto mt-12">
                        <div className="px-4 m-auto">
                            <form className="mx-auto">
                                {/* <FontAwesomeIcon icon={faStethoscope} 
                                className='fa-3x'/> */}
                                <h2 className='fs-4 text-center'>
                                    Login to your account
                                </h2>
                                <hr />

                                <div className='text-start'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="form-control" 
                                    placeholder="Email Address"
                                    name="email" value={email}
                                    onChange={ (e) => setEmail(e.target.value)} />
                                </div>

                                <div className='text-start mb-3'>
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" 
                                    placeholder="Password"
                                    name='password'
                                    value={password}
                                    onChange={ (e) => setPassword(e.target.value)} />
                                </div>

                                <button className="btn btn-primary" type="submit"> Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default Login
