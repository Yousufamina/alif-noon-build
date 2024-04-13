"use client"

import React from 'react'
import styles from "../../adminComponents/dashboard.module.css"
import Link from 'next/link'
import { usePathname} from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import { useRouter } from "next/router";


const menuItems =[
  {
    title:"Pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
      },
      {
        title:"Properties",
        path:"/properties",
      },
      {
        title:"Blogs",
        path:"/blogs",
      },
    ],
  },
  {
    title:"Analytics",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
      },
      {
        title:"Properties",
        path:"/properties",
      },
      {
        title:"Blogs",
        path:"/blogs",
      },
    ],
  },
  {
    title:"Blogs",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
      },
      {
        title:"Properties",
        path:"/properties",
      },
      {
        title:"Blogs",
        path:"/blogs",
      },
    ],
  },
]
function Sidebar() {

  const pathname = usePathname();
  // const router = useRouter()


  return (
    <div className='SideBarMain'>
    <div className={styles.container}>
      <div className='sidebarHeader'>
        <a href="/" className="flex-col">
          <img
              className="h-[90px] headerImg w-[157px] mr-[20px] z-[-1] margin-auto"
              src="/Alif Noon Logo Header Logo.gif"
              alt="none"
            />
        </a>
      </div>
      <div className='sidebarItems'>
        <ul>
          <li>
            <Link href="/Dashboard/properties" className={
            pathname === "/Dashboard/properties" ? 'active items-center raleway font-bold' : 'raleway font-bold items-center'
            }>
            <FontAwesomeIcon icon={faHouse} style={{color: "white",marginRight:'8px',width:'14px'}} />
              Properties
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/AddProperty" className=
              {
                pathname === "/Dashboard/AddProperty" ? 'items-center active raleway font-bold' : 'raleway font-bold items-center'
                }
                >
              {/* <img src='/houseIcon.svg' /> */}
              <FontAwesomeIcon icon={faHouse} style={{color: "white",marginRight:'8px',width:'14px'}} />
                Add Property
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Agents"className=
              {
                pathname === "/Dashboard/Agents" ? 'items-center active raleway font-bold' : ' items-center raleway font-bold'
                }>
              <FontAwesomeIcon icon={faHouse} style={{color: "white",marginRight:'8px',width:'14px'}} />
                Agents
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/AddAgents" className={
            pathname === "/Dashboard/AddAgents" ? 'items-center active raleway font-bold' : 'items-center raleway font-bold'
            }>
              <FontAwesomeIcon icon={faHouse} style={{color: "white",marginRight:'8px',width:'14px'}} />
                Add Agents
            </Link>
          </li>
          <li>
            <a className='items-center raleway font-bold'>
            <FontAwesomeIcon icon={faHouse} style={{color: "white",marginRight:'8px',width:'14px'}} />
                Test
            </a>
          </li>
          <li>
            <a className='raleway font-bold items-center'>
            <FontAwesomeIcon icon={faHouse} style={{color: "white",marginRight:'8px',width:'14px'}} />
                Test
            </a>
          </li>
          <li>
            <a className='raleway font-bold items-center'>
            <FontAwesomeIcon icon={faHouse} style={{color: "white",marginRight:'8px',width:'14px'}} />
                Test
            </a>
          </li>
          
          {/* {menuItems.map(data=>(
            <li key={data.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map(item=>{
                  <MenuLink item={item} key={item.title} />
                })
              }
            </li>
          ))} */}
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default Sidebar