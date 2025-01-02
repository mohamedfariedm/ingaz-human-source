import React from "react";

const AccreditationCard = ({ src, alt, width, height }) => {
  return (
    <div
      className={`bg-[#f1f8fd] rounded-lg flex items-center justify-center overflow-hidden ${width} ${height}`}
    >
      <img
        src={src}
        alt={alt}
        className="object-contain max-w-full max-h-full"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/600x400?text=Placeholder";
        }}
      />
    </div>
  );
};

export default AccreditationCard;
