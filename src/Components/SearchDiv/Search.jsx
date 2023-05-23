import React from "react";

//import icon from react icons

import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Search() {
  return (
    <div className=" searchDiv grid gap-10 bg-[#f1f4f8] rounded-[10px] p-[3rem] ">
      <form action=" ">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] p-5 bg-white shadow-lg shadow-grayIsh-700 ">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className=" cursor-pointer text-[25px] " />
            <input
              type="text"
              className=" focus:outline-none bg-transparent text-blue-500 w-[100%] "
              placeholder=" Search Job Here ... "
            />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6] hover:text-[#252b36]" />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className=" cursor-pointer text-[25px] " />
            <input
              type="text"
              className=" focus:outline-none bg-transparent text-blue-500 w-[100%] "
              placeholder=" Search by company ... "
            />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6] hover:text-[#252b36]" />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className=" cursor-pointer text-[25px] " />
            <input
              type="text"
              className=" focus:outline-none bg-transparent text-blue-500 w-[100%] "
              placeholder=" Search by location ... "
            />
            <AiOutlineCloseCircle className=" text-[30px] text-[#a5a6a6] hover:text-[#252b36]" />
          </div>

          <button className=" bg-[#2a68ff] p-5  px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300 ">
            Search
          </button>
        </div>
      </form>

      <div className="secDIv flex items-center justify-center gap-10  ">
        <div className="singleSearch flex gap-2 items-center">
          <label htmlFor="relevance" className=" text-[#808080] font-semibold ">
            Sort by:
          </label>

          <select
            name=""
            id="relevance "
            className=" bg-white px-4 py-1 rounded-[3px] "
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex gap-2 items-center">
          <label htmlFor="type" className=" text-[#808080] font-semibold ">
            Type:
          </label>

          <select
            name=""
            id="type "
            className=" bg-white px-4 py-1 rounded-[3px] "
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex gap-2 items-center">
          <label htmlFor="level" className=" text-[#808080] font-semibold ">
            Level:
          </label>

          <select
            name=""
            id="level "
            className=" bg-white px-4 py-1 rounded-[3px] "
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className=" cursor-pointer text-[#a1a1a1] " >Clear All</span>
      </div>
    </div>
  );
}
