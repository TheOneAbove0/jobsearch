import React from "react";
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';





export default function Footer() {
  return (
    <div className=" footer p-[5rem] mb-4 bg-[#2a68ff] grid grid-cols-5 rounded-[10px] items-center justify-center m-auto gap-8 ">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white ">
            <strong>Job</strong>search
          </h1>
        </div>
        <p className=" text-white pb-[13px] opacity-70 leading-7 " >We always make our seekers and companies find the best jobs and employers find the best candidates.</p>

      </div>


        <div className="grid">
            <span className=" divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
                Company
            </span>
            <div className="grid gap-3">

                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">About Us</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Features</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">News</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">FAQ</li>

            </div>
        </div>

        <div className="grid">
            <span className=" divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
                Resources
            </span>
            <div className="grid gap-3">

                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Account</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Support Center</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Feedback</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Contact US</li>

            </div>
        </div>

        <div className="grid">
            <span className=" divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
                Support
            </span>
            <div className="grid gap-3">

                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Events</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Promo</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Req Demo</li>
                <li className=" text-white opacity-[.7] hover:opacity-[1]  ">Careers</li>

            </div>
        </div>

        <div className="grid">
            <span className=" divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
                Contact Info
            </span>
            <div >
            <small className=" text-[14px] text-white " >
                manishthapaliya8888@gmail.com
            </small>

            <div className="icons flex gap-4 py-[1rem]">
                <AiFillInstagram className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full  icon 
                text-[#2a68ff] " />
                <BsFacebook className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full icon 
                text-[#2a68ff]  " />
                <AiOutlineTwitter className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full icon 
                text-[#2a68ff]  " />

            </div>

            </div>
        </div>

    </div>
  );
}
