import React from "react";
import AccreditationCard from "./AccreditationCard";

const accreditationData = [
  { src: "https://placehold.co/600x400", alt: "Accreditation 1", width: "w-[221px]", height: "h-[103px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 2", width: "w-[158px]", height: "h-[103px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 3", width: "w-[125px]", height: "h-[123px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 4", width: "w-[79px]", height: "h-[112px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 5", width: "w-[172px]", height: "h-[97px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 6", width: "w-[82px]", height: "h-[83px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 7", width: "w-[135px]", height: "h-[69px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 8", width: "w-[166px]", height: "h-[99px]" },
  { src: "https://placehold.co/600x400", alt: "Accreditation 9", width: "w-[219px]", height: "h-[91px]" },
];

const AccreditationGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
      {accreditationData.map((item, index) => (
        <AccreditationCard
          key={index}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
        />
      ))}
    </div>
  );
};

export default AccreditationGrid;
