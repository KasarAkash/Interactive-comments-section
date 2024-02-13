export default function DeleteComment() {
  return (
    <div className="rounded-lg bg-white p-4 w-[90vw] lg:w-[30vw]">
      <h1 className="text-2xl pb-3 font-bold text-GrayishBlue">
        Delete Comment
      </h1>
      <p className="text-lg">
        Are you sure you want to delete this comment? This will remove the
        comment and can`t be undone.
      </p>
      <div className="flex justify-between my-3">
        <button className="px-5 py-3 bg-DarkBlue text-lg text-white rounded-lg">
          NO,CANCEL
        </button>
        <button className="px-5 py-3 bg-SoftRed text-white text-lg rounded-lg">
          YES,DELETE
        </button>
      </div>
    </div>
  );
}
