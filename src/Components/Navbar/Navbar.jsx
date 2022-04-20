import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    
    return (
    <div>
        <nav className="flex p-4 shadow-md">
            <div className="">
                <NavLink
                to="/"
                className={`relative font-bold text-4xl md:pl-10 pl-0 text-blue-800`}
                >
                    D'Clinik
                </NavLink>
            </div>
            {/* <div className=''>
                icons
            </div> */}
        </nav>
    </div>
);
}

export default Navbar;
