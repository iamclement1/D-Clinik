import React from 'react'
import { Link } from 'react-router-dom'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bg from '../assets/bg.jpeg'

function LogIn() {
  return (
    <div className="container justify-center">
        <div className="row " style={{marginTop:"8rem"}}>
            <div className="col-md-6 offset-md-3 bg-light shadow-lg px-10 py-10">
                <form className='flex flex-col mx-auto'>
                    <FontAwesomeIcon icon={faStethoscope} className='text-6xl text-blue-900' />
                    <h2 className='text-4xl font-bold text-center'>Log in to your account</h2>
                    <div className="mb-3 mt-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control"  placeholder="Enter email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" required/>
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
                            <input className="form-check-input" type="checkbox" name="remember"/>
                            Remember me
                        </label>
                    </div>

                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary btn-block">
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