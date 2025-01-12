import Sidebar from "../../component/sidebar/Sidebar";
import MessagesContainer from "../../component/Messages/MessagesContainer";
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Home;
