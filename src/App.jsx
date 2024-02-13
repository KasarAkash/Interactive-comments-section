import MessageBox from "./Components/MessageBox";
import data from "../public/data.json";

function App() {
  const userComments = data.comments;
  const currentUser = data.currentUser;

  return (
    <main className="w-full min-h-screen  p-2 bg-VeryLightGray font-rubik">
      {userComments.map((cmt) => {
        return [
          <MessageBox
            key={cmt.id}
            img={cmt.user.image.png}
            name={cmt.user.username}
            timeSt={cmt.createdAt}
            content={cmt.content}
            score={cmt.score}
            id={cmt.id}
            isReply={false}
          />,
          <div
            key={cmt.id}
            className="border-l ml-4 pl-2  border-LightGrayishBlue"
          >
            {cmt.replies.map((cmt) => {
              return (
                <MessageBox
                  key={cmt.id}
                  img={cmt.user.image.png}
                  name={cmt.user.username}
                  timeSt={cmt.createdAt}
                  content={cmt.content}
                  score={cmt.score}
                  id={cmt.id}
                  isReply={currentUser.username === cmt.user.username}
                />
              );
            })}
          </div>,
        ];
      })}
    </main>
  );
}

export default App;
