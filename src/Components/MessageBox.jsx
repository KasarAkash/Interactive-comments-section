import IconButton from "./IconButton";
import ScoreBox from "./ScoreBox";
import Reply from "../Icons/icon-reply.svg";
import Delete from "../Icons/icon-delete.svg";

function MessageBox({ id, img, name, timeSt, content, score, isReply }) {
  return (
    <div className={`flex flex-col`}>
      <div className={`m-2 p-3 flex flex-col bg-white rounded-md`}>
        <div className="flex items-center gap-3">
          <img src={img} alt="User Image" className="h-10" />
          <p className="font-bold text-lg text-DarkBlue">{name}</p>
          {isReply && (
            <p className="bg-ModerateBlue text-white px-2 rounded">You</p>
          )}
          <p className=" text-GrayishBlue">{timeSt}</p>
        </div>
        <p className="my-2  text-GrayishBlue">{content}</p>

        <div className="flex items-center justify-between">
          <ScoreBox key={id} score={score} />
          {isReply && (
            <IconButton
              key={id}
              img={Delete}
              text="Delete"
              className="text-SoftRed"
            />
          )}
          <IconButton key={id} img={Reply} text="Reply" />
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
