import React from "react";
import { useState } from "react";
import image1 from "../Images/fitness/img1.png";
import image2 from "../Images/fitness/img2.png";
import image3 from "../Images/fitness/img3.png";
import "./Showcase.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxFontRoman } from "react-icons/rx";

const images = [
  {
    src: image1,
    alt: "Image1",
    para: "GymZone ",
    paraspan: "Center",
    smalpara:
      "For those looking to maintain their fitness routine while traveling, the hotel offers a well-equipped fitness center.",
    gradient:
      "linear-gradient(180deg, rgba(50, 64, 87, 0) 0%, #0A1E41 112.53%)",
  },
  {
    src: image2,
    alt: "Image2",
    para: "On-Site",
    paraspan: "Dining",
    smalpara:
      "The hotel features an on-site restaurant serving a variety of cuisines, diverse dining experiences without leaving the premises.",
    gradient:
      "linear-gradient(180deg, rgba(50, 64, 87, 0) 0%, #5C3411 112.09%)",
  },
  {
    src: image3,
    alt: "Image3",
    para: "Wellness Center ",
    paraspan: "& Spa",
    smalpara:
      "Guests can unwind with various spa services, including full-body massages, steam rooms, and other spa facilities.",
    gradient:
      "linear-gradient(180deg, rgba(50, 64, 87, 0) 0%, #0E1011 104.24%)",
  },
];


export default function GymZone() {

  const [isHovered, setIsHovered] = useState(null);
  const defaultBtn = 'max-[850px]:rounded-3xl max-[850px]:py-1 max-[850px]:px-2 p-8 h-[68px] border-gray-400 rounded-4xl border-2 backdrop-blur-md text-white font-semibold ';
  const hoveredBtn = 'max-[850px]:h-[70px] max-[850px]:w-[70px] w-[150px] h-[150px] bg-[#b6cbdc4f] rounded-full text-white';

  return (
    <div className="h-[1010px] max-[850px]:h-[auto] w-screen flex max-[850px]:flex-col">
      {images.map(({ src, alt, para, paraspan, smalpara, gradient }, idx) => (
        // add `group` here
        <div key={idx} className="w-1/3 max-[850px]:h-auto max-[850px]:w-screen relative group">
          {/* Base image */}
          <img
            src={src}
            alt={alt}
            className="
            max-[850px]:h-[300px]
              w-full h-full object-cover
             transition-transform duration-700 ease-in-out
              group-hover:scale-x-110 
            "
          />


          {/* Bottom-half gradient overlay */}
          <div
            className="
              absolute bottom-0 left-0
              w-full h-1/2
              pointer-events-none
              transform transition-transform duration-700 ease-in-out
              group-hover:scale-x-110 origin-center
            "
            style={{ background: gradient }}
          />

          {/* Centered headings */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 pointer-events-none">
            <h2
              className="
                hero__title font-normal text-[50px] max-[850px]:text-[20px] leading-[70px] max-[850px]:leading-[20px]
                tracking-[0.06em] text-center text-white
              "
            >
              {para}
              <span
                className="
                  block font-hero__title font-semibold
                  text-[70px] max-[850px]:text-[25px] leading-[70px] max-[850px]:leading-[20px] tracking-[0.06em]
                "
              >
                {paraspan}
              </span>
            </h2>

            {/* smalpara: hidden by default, shows on hover */}
            <p
              className="
                w-[50%] para-hero max-[850px]:w-[100%]
                opacity-0 translate-y-4
                transition-all duration-700 ease-out
                group-hover:opacity-100 group-hover:translate-y-0
                mt-8 font-medium not-italic
                text-[16px] leading-[25px] max-[850px]:leading-[20px] tracking-[1%]
                text-center text-white max-w-full
              "
            >
              {smalpara}
            </p>


          </div>
          {idx === 0 && (
            <>
              <div className="min-[851px]:hidden absolute top-2 left-[40%]  max-[850px]:h-[70px] max-[850px]:p-0 h-[84px] w-[64px] border-2 border-[#CDCDCD] flex justify-center items-center p-4 mb-[20px]">
                <div className="h-[62px] w-[42px] max-[850px]:h-[50px] border-2 border-[#B0ACAC] text-gray-400 font-bold flex items-center justify-center">
                  <p
                    className="
    hero__title
    text-[#979797]
     font-normal
    text-[32px]
    max-[850px]:text-[30px] leading-[40px]
    tracking-[0.06em]
    text-center
  "
                  >
                    III
                  </p>

                </div>
              </div>

            
            </>
          )}
          {idx === 1 && (
            <>
              <div className="absolute max-[850px]:hidden top-7 left-[45%] h-[84px] w-[64px] border-2 border-[#CDCDCD] flex justify-center items-center p-4 mb-[20px]">
                <div className="h-[62px] w-[42px] border-2 border-[#B0ACAC] text-gray-400 font-bold flex items-center justify-center">
                  <p
                    className="
    hero__title
    text-[#979797]
     font-normal
    text-[32px] leading-[40px]
    tracking-[0.06em]
    text-center
  "
                  >
                    III
                  </p>

                </div>
              </div>

              <div className='max-[850px]:items-end max-[850px]:left-[0%]  max-[850px]:w-screen max-[850px]:bottom-1 max-[850px]:mb-0 absolute bottom-7 left-[30%] h-[120px] mt-7 mb-5  flex justify-center items-center'>
                <button
                  className={`flex  justify-center items-center transition-all duration-600 ${isHovered ? hoveredBtn : defaultBtn
                    }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? <MdKeyboardArrowRight size={50} /> : 'Accommodation'}
                </button>
              </div>
            </>
          )}

        </div>

      ))}
    </div>
  );
}
