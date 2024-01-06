import React from "react";
import CSS from "./ProfilePic.module.css";

function ProfilePic(props) {
  return (
    <>
      <div className="justify-content-center d-flex">
        <img
          src={props.Path}
          alt="Profile Pic"
          height={100}
          width={100}
          className={`${CSS.roundRadius}`}
        />
      </div>
      <h5 className="text-center mt-2 fw-medium">{props.Name}</h5>
    </>
  );
}
export default ProfilePic;
