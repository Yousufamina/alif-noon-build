import AdminNavbar from "../../components/adminComponents/Navbar/AdminNavbar";
import Sidebar from "../../components/adminComponents/Sidebar/Sidebar";
import styles from "../../components/adminComponents/dashboard.module.css"

import React from 'react'

function layout({children}) {
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