import React from "react";

const Programcard = ({ label, author, url }) => {
  return (
    <div className="font-semibold  w-[300px] shadow-lg p-2">
      <img className="h-[220px]" src={url} alt="" />
      <div className="space-y-2 mt-5">
        <h1>{label}</h1>
        <p>{author}</p>
        <p className="line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          esse nesciunt veritatis sed, ea molestias possimus doloribus tenetur
          inventore consectetur veniam voluptates est maxime, eius aliquid vitae
          illum. Nemo, inventore.
        </p>
      </div>
    </div>
  );
};

export default Programcard;
