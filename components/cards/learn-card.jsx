import Image from "next/image";
import React from "react";

const LearnCard = ({ title, desc }) => {
  return (
    <div className="flex gap-4 items-start w-[48%] max-lg:w-[80%] max-lg:mx-auto max-md:w-full shadow-md shadow-red-500 rounded-md p-3">
      <div className="pt-2">
        <Image src="/check-icon.svg" alt="Check icon" width={70} height={70} />
      </div>
      <div>
        <h3 className="pb-1">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default LearnCard;
