import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
    
    return (
    <div className="container-fluid m-auto h-screen">
        <div className="row">
            <div className="col-md-12 offset-md-3 pt-32">
                <form className="md:w-2/6 shadow-md m-auto p-3">
                    <div className="mb-3 mt-3">
                        <h1 className="text-blue-500 text-center text-6xl
                        font-bold mb-4">
                            D'Clinik
                        </h1>
                        {/* <h4 className="h4 text-center">Reset Password:</h4> */}
                        <p className="text-center text-2xl px-6">
                            Enter the email associated with your account and we'll
                            send you a link to reset your password{" "}
                            
                            {/* <Link className="text-decoration-none" to="/contact">
                                contact us.
                            </Link>{" "} */}
                        </p>
                    </div>
                    
                    <div className="mb-3">
                        <label for="email" className="form-label block 
                        text-gray-700">
                            Email:
                        </label>
                        
                        <input
                        type="email"
                        className="form-control rounded py-4 px-4 w-full leading-tight
                        border-none shadow apperance-none focus:outline-none focus:shadow-outline
                        hover:border-collapse "
                        placeholder="Enter email"
                        />
                    </div>
                    
                    <div class="d-grid mb-3 ">
                        <button type="submit" className="btn btn-primary btn-block bg-blue-700
                        w-full p-3 rounded focus:outline-none text-white">
                            Reset Password
                        </button>
                    </div>
            </form>
        </div>
    </div>
    </div>
);
}

export default ResetPassword;
