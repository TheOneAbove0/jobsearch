import React from "react";

export default function NavBar() {
  return (
    <div className=" navBar flex justify-between  items-center p-12 ">

      <div className="logoDiv">
        <h1 className="logo text-[25px] text-[#2a68ff] ">
          <strong>Job</strong>search
        </h1>
      </div>

      <div className="menu flex gap-8 ">

        <li className="menuList text-[#676767] hover:text-[#2a68ff] ">Jobs</li>
        <li className="menuList text-[#676767] hover:text-[#2a68ff] ">Companies</li>
        <li className="menuList text-[#676767] hover:text-[#2a68ff] ">About</li>
        <li className="menuList text-[#676767] hover:text-[#2a68ff] ">Contact</li>
        <li className="menuList text-[#676767] hover:text-[#2a68ff] ">Blog</li>
        <li className="menuList text-[#676767] hover:text-[#2a68ff] ">Login</li>
        <li className="menuList text-[#676767] hover:text-[#2a68ff] ">Register</li>
        
        

      </div>
    </div>
  );
}
