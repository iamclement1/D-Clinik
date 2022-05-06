import { useState } from 'react'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form } from 'react-bootstrap'

function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return (
    <div className="">
        <div className="container-xxl position-relative">
            <div className="m-auto justify-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="flex offset-md-3 bg-white shadow-sm m-auto mt-12">
                            <form className="mx-auto">
                                <FontAwesomeIcon icon={faStethoscope} className='text-2xl'/>
                                <h2 className='fs-4'>
                                    Login to your account
                                </h2>

                                <div className='text-start'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="form-control" 
                                    placeholder="Email Address"
                                    name="email" value={email}
                                    onChange={ (e) => setEmail(e.target.value)} />
                                </div>

                                <div className='text-start'>
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
                    <div className="col-md-8"></div>
                </div>
            </div>
        </div>

    </div>
)
}

export default Login
