export default function SendMessageBox({ img }) {
  return (
    <div className="m-2 p-3 bg-white lg:w-[60vw] lg:mx-auto rounded-md">
      <textarea
        type="text"
        className="border w-full p-2 rounded-lg"
        placeholder="Add a Comment"
        rows={4}
      />
      <div className="flex justify-between items-center my-2">
        <img src={img} alt="" />
        <button className="py-3 px-6 bg-ModerateBlue text-white rounded-lg">
          SEND
        </button>
      </div>
    </div>
  );
}
