import React from "react";
import { IoMdSettings, IoMdPerson } from "react-icons/io";
import ProfilePic from "../../Components/ProfilePic/ProfilePic";
import Profile from "../../img/Profilepic.jpg";
import CSS from "./Body.module.css";
import Loading from "../../Components/Loading/Loading";

function PagesProfileDetails() {
  return (
    <>
      <div className={`bg-white rounded-2 mx-1 ${CSS.Border}`}>
        <div className="d-flex align-items-center justify-content-between p-3">
          <h5 className="mb-0 fw-bold">My Profile</h5>
          <span className="d-flex gap-2">
            <IoMdPerson style={{ fontSize: 25 }} />
            <IoMdSettings style={{ fontSize: 25 }} />
          </span>
        </div>
        <div className="mt-3">
          <ProfilePic Path={Profile} Name="Piyush_Kumar" />
        </div>
        <div className="mx-3 py-2">
          <Loading Heading='VIP Training Course' />
        </div>
        <div className="d-flex align-items-center justify-content-between p-3">
          <h5>Hastag</h5>
          <div className={`p-2 ${CSS.PurpleBGLight}`}><IoMdSettings className={`${CSS.FontQuater} ${CSS.PurpleColor}`} /></div>
        </div>
      </div>
    </>
  );
}

export default PagesProfileDetails;
