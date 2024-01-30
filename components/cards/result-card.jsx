import Image from "next/image";
import React from "react";

const ResultCard = ({ title }) => {
  return (
    <div className="flex gap-3 w-[45%] max-md:w-full">
      <Image src="/circle-check-icon.svg" alt="check icon" width={30} height={30} />
      <h3>{title}</h3>
    </div>
  );
};

export default ResultCard;
