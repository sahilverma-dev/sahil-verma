import Preloader from "./components/Preloader";
import TopProgressBar from "./components/TopProgressBar";

const Loading = () => {
  return (
    <div className="h-screen w-full">
      <TopProgressBar />
      {/* <Preloader /> */}
    </div>
  );
};

export default Loading;
