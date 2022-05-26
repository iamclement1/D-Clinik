import { useState } from 'react'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return (
        <div className="container-fluid login-background">
            <div className="loginWrapper">
                <div className="loginContainer">
                    <form className="mx-auto">
                        <h2 className='fs-4 text-center mb-3 mt-3'>
                            Login to your account
                        </h2>
                                <hr />

                        <div className='text-start'>
                            <label htmlFor="" className='mb-1 mt-2'>Email</label>
                            <input type="email" className="form-control loginInput" 
                            placeholder="Email Address"
                            name="email" value={email}
                            onChange={ (e) => setEmail(e.target.value)} />
                        </div>

                        <div className='text-start mb-3'>
                            <label htmlFor="" className='mt-3'>Password</label>
                            <input type="password" className="form-control mb-3 loginInput" 
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)} />
                        </div>
                        <div class="form-check mt-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                            </label>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}

export default Login

{/* <div className="container m-auto justify-center">
                <div className="row w-50 w-lg-75 m-auto">
                    <div className="w-75 px-6 bg-white shadow-sm m-auto mt-12">
                        <div className="px-4 m-auto">
                            <form className="mx-auto">
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
            </div> */}