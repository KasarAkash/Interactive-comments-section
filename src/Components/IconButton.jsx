import { useState } from "react";
import DeleteComment from "./DeleteComment";

export default function IconButton({
  img,
  text = "Reply",
  className = "text-ModerateBlue",
}) {
  const [clicked, setClicked] = useState(!true);

  return (
    <>
      {text === "Delete" && clicked && (
        <>
          <div className="h-screen lg:w-screen  top-[-22vh] left-[-22vw] w-96 absolute bg-black opacity-30"></div>
          <div className="z-10 absolute lg:top-[50%] lg:left-[50%] transform  -translate-x-1/2 -translate-y-1/2">
            <DeleteComment />
          </div>
        </>
      )}
      <div
        className="flex gap-2 lg:order-4"
        onClick={() => {
          text === "Delete" && setClicked(true);
        }}
      >
        <img src={img} alt="" className="object-contain" />
        <p className={`${className} text-base font-bold`}>{text}</p>
      </div>
    </>
  );
}
