import React, { useState } from 'react';
import '../Component/Showcase.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../Images/1st-person.png';
import img2 from '../Images/2nd-person.png';
import img3 from '../Images/3rd-person.png';
import { PiBagDuotone } from "react-icons/pi";

const Deals = () => {
    const [cardHoveredIndex, setCardHoveredIndex] = useState(null);
    const [buttonHoveredIndex, setButtonHoveredIndex] = useState(null);

    const defaultBtn = 'w-[120px] h-[48px] rounded-[50px] border-gray-400 rounded-3xl border-2 text-white font-normal';
    const hoveredBtn = 'w-[100px] h-[100px] max-[1280px]:w-[70px] max-[1280px]:h-[70px] rounded-full text-white border-2';

    const cards = [
        {
            title: "All season",
            heading: "Royal Weekend Escape Package",
            para: "From BHD 250 / Per person / 3 Night",
            imagePath: img1
        },
        {
            title: "Family Fun",
            heading: "Family Fun Accommodationcation",
            para: "From BHD 150 / 4 person / 2 Night",
            imagePath: img2
        },
        {
            title: "Gourmet",
            heading: "Gourmet Dining Experience",
            para: "From BHD 200 / Per person / 1 Night",
            imagePath: img3
        },
    ];

    return (
        <div className="bg-[#F4EFE7] w-screen h-[120vh] max-[850px]:h-auto mt-7 flex flex-col items-center justify-between">
            <h2 className="font-normal text-[80px] max-[850px]:text-[40px] leading-[50px] tracking-[0.06em] text-center hero__title mt-[100px] max-[1280px]:mt-[50px]">
                Accommodation packages
            </h2>

            <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 px-8 py-6">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="relative max-[1280px]:w-[300px] max-[1280px]:h-[500px] w-[750px] h-[550px] flex-shrink-0 shadow-lg flex items-center justify-center overflow-hidden"
                            onMouseEnter={() => setCardHoveredIndex(idx)}
                            onMouseLeave={() => setCardHoveredIndex(null)}
                        >
                            <img
                                src={card.imagePath}
                                alt={card.title}
                                className={`w-full h-full object-cover transition-transform duration-800 ease-in-out ${cardHoveredIndex === idx ? 'scale-120' : 'scale-100'
                                    }`}
                            />
                            <div className="absolute w-[710px] h-[510px] overflow-hidden border-[#B0ACAC] border-[0.8px] z-1">
                                <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-around items-center text-center p-4 font-[Crimson Text]">
                                    <h3 className="font-poppins font-medium text-[14px] leading-[50px] tracking-[0.02em] text-white text-center align-middle mb-2">
                                        {card.title}
                                    </h3>
                                    <div>
                                        <p className="font-crimson-text font-semibold text-[30px] max-[1280px]:text-[16px] leading-[50px] tracking-[0.06em] text-white align-middle mb-1">
                                            {card.heading}
                                        </p>
                                        <p className="text-gray-300 max-[1280px]:text-[14px]">{card.para}</p>
                                    </div>
                                    <div className=' relative flex justify-center items-center gap-20 text-center h-[120px]'>
                                        <button
                                            className={` flex mt-7 justify-center items-center transition-all duration-600 ${buttonHoveredIndex === idx ? hoveredBtn : defaultBtn
                                                }`}
                                            onMouseEnter={() => setButtonHoveredIndex(idx)}
                                            onMouseLeave={() => setButtonHoveredIndex(null)}
                                        >
                                            {buttonHoveredIndex === idx ? (
                                                <MdKeyboardArrowRight size={50} />
                                            ) : (
                                                "MORE"
                                            )}
                                        </button>



                                        <button
                                            className=" group flex mt-7 p-[10px] justify-center items-center rounded-full border border-white h-[48px] w-[48px]  text-white transition-all duration-600 ease-in-out max-[1280px]:hover:w-[70px] max-[1280px]:hover:h-[70px] hover:w-[120px]  hover:h-[120px] hover:bg-[#19364E] "
                                            aria-label="Add to Booking"
                                        >
                                            {/* Default bag icon */}
                                            <PiBagDuotone
                                                size={40}
                                                className="block group-hover:hidden"
                                            />

                                            {/* Booking icon on hover */}
                                            <p  className="hidden group-hover:block">Booking</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container mx-auto">
                    <hr className=' max-[1280px]:w-screen my-[50px] ml-9 text-[#777777] border-[0.8px] border-[#777777]' />
                </div>
                
            </div>
        </div>
    );
};

export default Deals;