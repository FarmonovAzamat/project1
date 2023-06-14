import React from "react";

const MyCard = ({ className, img, title,para1, para2 }) => {
  return (
    <div>
      <div className={className} >
        <div className=" m-auto flex flex-col items-center px-[10%]">
          <img
            src={img}
            alt=""
            className=""
          />

          <h1 className="text-center text-[white]">{title}</h1>
          <p className="text-center text-[#717E92]">{para1}</p>
          <p className="text-left text-[#717E92] ">{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
