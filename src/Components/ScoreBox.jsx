import { useState } from "react";
import plus from "../Icons/icon-plus.svg";
import minus from "../Icons/icon-minus.svg";

export default function ScoreBox({ score }) {
  const [val, setVal] = useState(score);

  return (
    <div className="flex p-2 gap-3 rounded-md bg-VeryLightGray items-center lg:flex-col lg:order-0">
      <img src={plus} alt="plus-btn" onClick={() => setVal(val + 1)} />
      <p className="text-ModerateBlue font-bold">{val}</p>
      <img src={minus} alt="minus-btn" onClick={() => setVal(val - 1)} />
    </div>
  );
}
