import React from 'react'

function SocialIconScroll() {
  return (
    <div className="top-[70%] fixed z-[1000]">
      <div className="flex flex-col SidelogoIcon1 absolute p-2">
        <div className="flex items-center justify-between">
          <a
            href="https://www.facebook.com/alifnoonae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="facebookSideicon relative ml-1"
              src="/facebookSideicon.svg"
              alt="Facebook"
            />
          </a>
          <img
            className="ml-6 LogoSideIcone1"
            src="/LogoSideIcone.svg"
            alt="2"
          />
        </div>
      </div>
      <div className="flex flex-col SidelogoIcon2 absolute p-2">
        <div className="flex items-center justify-between">
          <a
            href="https://www.instagram.com/alifnoonae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="facebookSideicon relative"
              src="/InstaSideIcon.svg"
              alt="none"
            />
          </a>
          <img
            className="ml-6 LogoSideIcone2"
            src="/LogoSideIcone.svg"
            alt="3"
          />
        </div>
      </div>
      <div className="flex flex-col SidelogoIcon3 absolute p-2">
        <div className="flex items-center justify-between">
          <a
            href="https://www.tiktok.com/@realestateuae?_t=8kzi3KmATAo&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="facebookSideicon relative"
              src="/tiktok-icon.svg"
              alt="none"
            />
          </a>
          <img
            className="ml-6 LogoSideIcone3"
            src="/LogoSideIcone.svg"
            alt="4"
          />
        </div>
      </div>
    </div>
  )
}

export default SocialIconScroll
