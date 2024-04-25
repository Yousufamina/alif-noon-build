"use client";

import { React, useEffect, useState } from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Drawer,
  Space,
  Input,
} from "antd";

import Link from "next/link";
const { Header, Content, Footer } = Layout;
import {useRouter} from 'next/navigation';
import { menuItems, MenuItemKeys } from "./menuItemEnums";
const { useToken } = theme;

const NavBar = () => {
  //  const [headerWhite, setHeaderWhite] = useState(false);
  const { token } = useToken();
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize("small");
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const router = useRouter();
  return (
    <>
      {/* <header className={`bg-[#0c191fbc] w-full z-[999] py-[8px]  ${isVisible ? 'onVisible' : 'onHidden'}`} */}
      <header
        className={`w-full z-[999]  ${
          isVisible ? "headerGray" : "headerBlack"
        }`}
      >
        <nav
          className="mx-auto flex-wrap flex items-center justify-between px-8"
          aria-label="Global"
        >
          <div className="mr-10 HeaderlogoDiv">
            <a href="/" className="flex-col">
              <img
                className="h-[90px] headerImg w-[157px] mr-[20px] z-[-1]"
                src="/Alif Noon Logo Header Logo.gif"
                alt="none"
              />
            </a>
          </div>
          <div className="menu-responsive font-gilda-display flex gap-x-8 items-center">
            {/* Product details*/}
            
              <button  type="button" className=" flex">
                <Link
                  href="/products/buy"
                  className="Buy-header raleway font-semibold text-[14px] leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
                >
                  BUY
                </Link>
              </button>
            
            <Link
              href="/Rent"
              className="Rent-header raleway font-semibold text-[14px] leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
            >
              RENT
            </Link>
            <Link
              href="/Sell"
              className="Sell-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
            >
              SELL
            </Link>
            <Link
              href="/off-plan"
              className="off-planHeader raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
            >
              OFF-PLAN
            </Link>
            <div className="blog-header relative text-center mainMenu">
              <div className="flex">
            <Link
              href="/Blog"
              className="mt-[1px] blog-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
            >
              BLOGS
            </Link>
            {/* <svg
                  className="h-5 w-5 flex-none leading-[16.44px] text-[14px] text-white focus:text-[#ECA33A] hover:text-[#ECA33A]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg> */}
          </div>
              {/* <div
                class="dropdown-div hidden absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                >
                  <li>
                    <a
                      href="#"
                      class="raleway block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Socials
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="#"
                      class="raleway block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Offers
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <Link
              href="/Catalog"
              className="Catalog-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
            >
              CATALOGS
            </Link>
            <Link
              href="/OFFICIALS"
              className="OFFICIALS-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
            >
              OFFICIALS
            </Link>
            <Link
              href="/Company-profile"
              className="CompanyProfileHeader raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]"
            >
              COMPANY PROFILE
            </Link>
          </div>
          <div className="drawer flex flex-1 justify-end items-center">
            <button className="searchheader relative">
              <span> SEARCH </span>
              <input
                className="absolute"
                type="text"
                placeholder="Search....."
              />
            </button>
            <Space>
              <Button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={showDefaultDrawer}
              >
                <svg
                  width="30"
                  height="18"
                  viewBox="0 0 30 18"
                  fill="#ECA33A"
                  xmlns="http://www.w3.org/2000/svg"
                  s
                >
                  <path
                    d="M29 1H1"
                    stroke="#ECA33A"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M29 9L6 9"
                    stroke="#ECA33A"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M29 17L2 17"
                    stroke="#ECA33A"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </Button>
            </Space>
            <Drawer
              title={"Details"}
              placement="right"
              size={size}
              onClose={onClose}
              open={open}
              width={500}
            >
              <Menu
                // theme="dark"
                className="mr-2"
                mode="vertical"
                defaultSelectedKeys={["0"]}
              >
                {menuItems.map((item) => {
                  if (item.subItems) {
                    // If there are subItems, construct a submenu with nested items
                    return (
                      <Link href={item.href}>
                      <Menu.SubMenu Link={item.href} onClick={() => router.push(item.href)} key={item.key} title={item.label}>                        
                        {item.subItems.map((subItem) => (
                          <Menu.Item key={subItem.key}>
                            {subItem.label}
                          </Menu.Item>
                        ))}
                      </Menu.SubMenu>
                      </Link>
                    );
                    
                  } else {
                    // If no subItems, just return the item

                    return 
                      <Menu.Item key={item.key}>
                        <Link href={item.href}>
                          {item.label}
                        </Link>
                      </Menu.Item>;
                  }
                })}
              </Menu>
            </Drawer>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
