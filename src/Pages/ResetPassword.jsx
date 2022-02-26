import React from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <div className="container">
         <div className="row " style={{marginTop:"6rem"}}>
             <div className="col-md-6 offset-md-3 bg-light">
                <form>
                    <div className="mb-3 mt-3">
                    <h4 className='h4 text-center'>Reset Password:</h4>
                    <p className='text-center'>Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <Link className='text-decoration-none' to="/contact">contact us.</Link> </p>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control"  placeholder="Enter email"/>
                    </div>
                    <div class="d-grid mb-3 ">
                        <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
                    </div>
                    
                </form>
             </div>
         </div>
     </div> 
  )
}

export default ResetPassword