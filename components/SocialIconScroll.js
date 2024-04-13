import React from 'react'

function SocialIconScroll() {
  return (
    <div className='max-[780px]:top-[79%] top-[70%] fixed z-[1000]'>
        <div className="flex flex-col SidelogoIcon1 absolute p-2">
        <div className="flex items-center justify-between">
          <img
            className="facebookSideicon relative ml-1"
            src="/facebookSideicon.svg"
            alt="none"
          />
          <img
            className="ml-6 LogoSideIcone1"
            src="/LogoSideIcone.svg"
            alt="2"
          />
        </div>
      </div>
        <div className="flex flex-col SidelogoIcon2 absolute p-2">
          <div className="flex items-center justify-between">
            <img
              className="facebookSideicon relative"
              src="/InstaSideIcon.svg"
              alt="none"
            />
            <img
              className="ml-6 LogoSideIcone2"
              src="/LogoSideIcone.svg"
              alt="3"
            />
          </div>
        </div>
        <div className="flex flex-col SidelogoIcon3 absolute p-2">
          <div className="flex items-center justify-between">
            <img
              className="facebookSideicon relative"
              src="/linkdinSideIcon.svg"
              alt="none"
            />
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