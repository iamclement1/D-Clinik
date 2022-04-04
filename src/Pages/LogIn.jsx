import React from 'react'
import { Link } from 'react-router-dom'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LogIn() {

    return (
    <div className=" container m-auto justify-center">
        <div className="row">
            <div className=" flex offset-md-3 bg-light shadow-lg
            m-auto md:w-3/6 md:mt-10 mt-5  md:px-10 px-3 py-10 justify-cente">
                <form className='flex flex-col mx-auto md:w-4/5 w-
                p-5'>
                    <FontAwesomeIcon icon={faStethoscope} className='md:text-4xl 
                    text-2xl mb-4 text-blue-900' />
                    <h2 className='md:text-2xl text-xl font-bold text-center'>
                        Log in to your account
                        
                    </h2>
                    <div className="mb-3 mt-3">
                        <label for="email" className="form-label md:block">Email:</label>
                        <input type="email" className="form-control appearance-none md:rounded-md
                        rounded-sm border border-gray-300 p-2 w-full hover:border-none
                        focus:outline-none"  
                        placeholder="Enter email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control appearance-none 
                        md:rounded-md focus:outline-none
                        rounded-sm border border-gray-300 p-2 w-full hover:border-none" 
                        placeholder="Enter password" required/>
                    </div>
                    <div className="mb-3">
                        <Link to="/forgot-password" className='text-decoration-none' 
                        style={{color:"black"}}>
                            <span>
                            Forgot Password
                            </span>
                        </Link>
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" 
                            name="remember"/>
                            Remember me
                        </label>
                    </div>

                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary btn-block
                        w-full bg-blue-700 p-2 md:rounded-md rounded-sm text-white 
                        font-bold">
                            Log In Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
)
}

export default LogIn