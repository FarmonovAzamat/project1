import React from "react";

const MyCard = ({ className, img, title,para }) => {
  return (
    <div>
      <div className={className} >
        <div className=" w-[50%] m-auto flex flex-col items-center">
          <img
            src={img}
            alt=""
            className=""
          />

          <h1 className="text-center text-[white]">{title}</h1>
          <p className="text-center text-[#717E92]">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
