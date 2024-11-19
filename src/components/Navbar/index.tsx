import { useState } from "react";
import { Icons, Images } from "../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string>("patients");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-5 my-[18px] rounded-[70px] shadow-lg">
      {/* Logo */}
      <div>
        <img src={Icons.logo} alt="Company Logo" className="w-[210px]" />
      </div>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link to="/overview">
          <div
            className={`flex px-4 py-3 items-center gap-[9px] cursor-pointer ${
              selectedLink === "overview" ? "bg-[#01F0D0] rounded-[41px]" : ""
            }`}
            onClick={() => handleLinkClick("overview")}
          >
            <img src={Icons.home} alt="" className="w-[21.53px]" />
            Overview
          </div>
        </Link>
        <Link to="/">
          <div
            className={`flex px-4 py-3 items-center gap-[9px] cursor-pointer ${
              selectedLink === "patients" ? "bg-[#01F0D0] rounded-[41px]" : ""
            }`}
            onClick={() => handleLinkClick("patients")}
          >
            <img src={Icons.person} alt="" className="w-[21.53px]" />
            Patients
          </div>
        </Link>
        <Link to="/schedule">
          <div
            className={`flex px-4 py-3 items-center gap-[9px] cursor-pointer ${
              selectedLink === "schedule" ? "bg-[#01F0D0] rounded-[41px]" : ""
            }`}
            onClick={() => handleLinkClick("schedule")}
          >
            <img src={Icons.calender} alt="" className="w-[21.53px]" />
            Schedule
          </div>
        </Link>
        <Link to="/message">
          <div
            className={`flex px-4 py-3 items-center gap-[9px] cursor-pointer ${
              selectedLink === "message" ? "bg-[#01F0D0] rounded-[41px]" : ""
            }`}
            onClick={() => handleLinkClick("message")}
          >
            <img src={Icons.message} alt="" className="w-[21.53px]" />
            Message
          </div>
        </Link>
        <Link to="/transactions">
          <div
            className={`flex px-4 py-3 items-center gap-[9px] cursor-pointer ${
              selectedLink === "transactions"
                ? "bg-[#01F0D0] rounded-[41px]"
                : ""
            }`}
            onClick={() => handleLinkClick("transactions")}
          >
            <img src={Icons.creditCard} alt="" className="w-[21.53px]" />
            Transactions
          </div>
        </Link>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-x-[8px]">
        <img src={Images.DrJose} alt="Dr Jose" className="w-11 gap-2" />
        <div className="mr-[25px]">
          <div className="text-14 leading-19">Dr. Jose Simons</div>
          <div className="text-14 leading-19 text-[#707070]">
            General Practitioner
          </div>
        </div>
        <img src={Icons.settings} alt="Settings" className="w-[20px] mr-3" />
        <img src={Icons.more_vert} alt="More" className="w-1" />
      </div>
    </nav>
  );
};

export default Navbar;
