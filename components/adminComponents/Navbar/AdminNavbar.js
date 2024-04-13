import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function AdminNavbar() {
  return (
    <div className="adminNavbar raleway font-bold flex justify-between">
      <div className="leftPanel">
        <h4>Admin Navbar</h4>
      </div>
      <div className="adminLogout rightPanel">
        <div className="profileDiv flex justify-between">
          <div className="name">
            <h4 className="font-[13]">Salman</h4>
            <h6 className="font-[11]">Admin</h6>
          </div>
        <div className="adminlogin">
          <button
            id="dropdownUserAvatarButton"
            // data-dropdown-toggle="dropdownAvatar"
            className="pic"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/OurOfficial.png"
              alt="none"
            />
           
          </button>
          <div
          style={{inset:'0px 30px auto auto', transform:'translate(0px, 76px)'}}
            className="dropdownAvatar absolute z-[999] hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700 dark:divide-gray-600"
          >
            
            <div className="justify-center flex items-center py-2">
            
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /> */}
              <Link
                href="/login"
                className="z-10 abolute block mr-1 px-1 py-1 text-sm text-[gray] hover:text-[#ECA33A] dark:hover:bg-gray-600 raleway dark:text-gray-200 dark:hover:text-white"
              >
                Logout
              </Link>
              <FontAwesomeIcon className="icon" style={{width:'15px',height:'15px',color:'gray'}} icon={faRightFromBracket} />
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
