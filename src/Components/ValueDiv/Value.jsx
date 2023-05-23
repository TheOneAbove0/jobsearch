import React from 'react';


import logo1 from "../../Assets/logo(1).png"

export default function Value() {
  return ( 
    <div className=' mt-[6rem] mb-[4rem] '>

        <h1 className=' text-[#252b36] text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block ' >
            The Value the hold us and true and to account
        </h1>

        <div className=" grid gap-[10rem] grid-cols-3 items-center ">
           <div  className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] ">
                <div className="flex items-center gap-3">
                    <div className="imgDiv h-[40px] w-[40px] p-[4px] bg-[#dedef8] rounded-[.8rem] flex items-center justify-center ">
                        <img src={logo1} alt="" className=' w-[70%] ' />
                    </div>

                    <span className=' font-semibold text-[18px]  text-[#252b36] ' >
                    Simplicity
                    </span>


                </div>

                <p className=' text-[13px]  text-[#252b36]  font-semibold opacity-[.7] py-[1rem] ' >
                Things being made beautiful simple are at the heart of everything we do.
                </p>

            </div>

            <div  className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem] ">
                <div className="flex items-center gap-3">
                    <div className="imgDiv h-[40px] w-[40px] p-[4px] bg-[#dedef8] rounded-[.8rem] flex items-center justify-center ">
                        <img src={logo1} alt="" className=' w-[70%] ' />
                    </div>

                    <span className=' font-semibold text-[18px]  text-[#252b36] ' >
                    Simplicity
                    </span>


                </div>

                <p className=' text-[13px]  text-[#252b36]  font-semibold opacity-[.7] py-[1rem] ' >
                We Work on the basis of creating trust which can be nurtured through authenticity and transparency


                </p>

            </div>

            <div  className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem] ">
                <div className="flex items-center gap-3">
                    <div className="imgDiv h-[40px] w-[40px] p-[4px] bg-[#dedef8] rounded-[.8rem] flex items-center justify-center ">
                        <img src={logo1} alt="" className=' w-[70%] ' />
                    </div>

                    <span className=' font-semibold text-[18px]  text-[#252b36] ' >
                    Simplicity
                    </span>


                </div>

                <p className=' text-[13px]  text-[#252b36]  font-semibold opacity-[.7] py-[1rem] ' >
                    We work on the basis of creating trust which can be nurtured through authenticity and transparency
                    </p>

            </div>
            


        </div>

        <div className="card bg-[url('/src/Assets/back.jpg')] mt-14 flex justify-between bg-[#2a68ff] p-[10rem] rounded-[10px]  ">
            <div>

        <h1 className=' text-[30px] font-bold text-[#2a68ff] '>Ready to switch a career</h1>
        <h2 className=' text-[25px] text-[#252b36] font-bold '>Let's get started!</h2>
        </div>
        <button className=' border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-[#2a68ff] hover:bg-white border-[#2a68ff] '>Get Started</button>

        </div>


    </div>
  )
}
