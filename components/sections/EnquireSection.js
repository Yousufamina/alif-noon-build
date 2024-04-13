"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function EnquireSection() {
  return (
    <>
    <main className="EnquireSectionMain">
      <div className="EnquireSection">
        <div className="mainContainer relative text-center">
          <h1 className="leading-[52px] mb-2 raleway uppercase drop-shadow-md font-semibold text-[48px] text-[#ECA33A]">
            The Epitome Of Luxury Living
          </h1>
          <h2 className="text-white leading-[22px] raleway font-light text-[19px]">
            Experience an unparalleled lifestyle with our exquisite collection
            of luxary properties
          </h2>
          <br />

            <button
              type="button"
              className="customGoldButton font-semibold text-[20px] px-10 py-2.5 mr-2 mb-2 border-b-4 border-[#EEC78C]"
              style={{position:"inherit !important"}}
            >
              <Link href='#' className="text-white">
              EQUIRE NOW
              </Link>
            </button>
        </div>
      </div>
    </main>
    </>
  );
}

export default EnquireSection;
