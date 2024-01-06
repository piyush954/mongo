import React from "react";

function NameNum(props) {
  const ran = Math.random();
  return (
    <>
      <div className="d-flex px-3 align-items-center justify-content-between mb-3">
        <h6 key={ran}>{props.Name}</h6>
        <p style={{ color: "purple" }}>{props.Num}</p>
      </div>
    </>
  );
}

export default NameNum;
