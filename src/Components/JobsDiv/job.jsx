import React from 'react';

import Data from './Data';

//import icons ===============>
import {BiTimeFive} from "react-icons/bi";



export default function Job() {
  return (
    <div>
        <div className="jobContainer flex flex-wrap items-center gap-10 py-10 justify-center ">

            {Data.map(({id, image, time, location, desc, company, title}) =>{
                return(
                    <div key={id} className="singleJob group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#2a68ff] shadow-lg shadow-[#f1f4f8]-700 hover:shadow-lg ">

                    <span className=' flex justify-between items-center gap-4 ' > 
                        <h1 className=' group-hover:text-white text-[16px] font-semibold text-[#252b36] ' >{title}</h1>
                        <span className=' flex items-center text-[#ccc] gap-1 ' ><BiTimeFive />{time}</span>
    
                    </span>
                    <h6 className=' text-[#ccc] '>{location}</h6>
                    <p className=' flex-wrap tex-[13px] pt-[20px] mt-[20px] text-[#959595] border-t-[2px] group-hover:text-white '>{desc}</p>
    
                    <div className="company gap-2 flex items-center ">
                        <img src={image} alt="Company Name" className=' w-[30%] ' />
                        <span className=' text-[14px] py-[1rem] group-hover:text-white block ' >{company}</span>
                    </div>
    
                    <button className=' border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-[#252b36] group-hover:text-[#252b36] hover:bg-white  ' >Apply Now</button>
                </div>
                )
            })}

            

        </div>
    </div>
  )
}
