import React from 'react';
import restroimg from "../Images/alarmimg.png";
import poolimg from "../Images/poolimg.png";
import roomimg from "../Images/roomimg.png";
import "./Showcase.css"

const Dining = () => {
    const restrodata = [
        { image: restroimg, head: "Dining", para: "Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest." },
        { image: poolimg, head: "Pool", para: "Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest." },
        { image: roomimg, head: "Suites", para: "Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest." },
    ]
    return (
        <div className='w-full flex max-[850px]:flex-col justify-between items-center'>
            {restrodata.map(({ head, para, image }, idx) => {
                return (
                    <div
                        className="group w-[395px] mb-30 max-[850px]:p-[15px]"
                        key={idx}
                    >
                        <div className="flex justify-center">
                            <img src={image} alt={head} />
                        </div>

                        <h2 className=" hero__title text-center font-normal text-[40px] leading-[80px] tracking-[0.06em] transform transition duration-1500 ease-out group-hover:scale-150 group-hover:text-blue-900">
                            {head}
                        </h2>

                        <p className=" text-center text-[#777777] font-medium text-[16px] leading-[20px] tracking-[0.01em] align-middle para-hero">
                            {para}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
export default Dining;