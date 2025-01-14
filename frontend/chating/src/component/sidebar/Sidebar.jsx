import React from "react";
import SearcInput from "./Searcinput";
import Conversations from "./Conversations";
import LogOutButton from "./LogOutButton";
import useGetConversation from "../../hooks/useGetConversation";
const Sidebar = () => {
  useGetConversation();
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearcInput />
      <div className="divider  px-3"></div>
      <Conversations />
      <LogOutButton />
    </div>
  );
};

export default Sidebar;
//Start code snippet
// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearcInput />
//       <div className="divider  px-3"></div>
//       <Conversations />
//       <LogOutButton />
//     </div>
//   );
// };

// export default Sidebar;
