"use client"
import React ,{useEffect} from 'react';
import AdminNavbar from "../../components/adminComponents/Navbar/AdminNavbar";
import Sidebar from "../../components/adminComponents/Sidebar/Sidebar";
import styles from "../../components/adminComponents/dashboard.module.css"

function layout({children}) {
    
  useEffect(()=>{
    let user = null;
    user = localStorage.getItem('loginUserDetails');
    if (user) {
        // console.log("called user")
    }
    else{
      window.location.href = '/login'
    }
    },[])
  
    return (
      <div className={styles.container}>
      <div className={styles.menu}>
          <Sidebar />
      </div>
      <div className={styles.content}> 
          <AdminNavbar />
          {children}
      </div>
      </div>
    )
}
export default layout