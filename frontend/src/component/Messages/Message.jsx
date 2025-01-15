import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-start" : "chat-end";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer text-gray-300 opacity-50 text-xs gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
// started snippet
// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="chat-bubble text-white bg-blue-500">hi! what's up?</div>
//       <div className="chat-footer text-gray-300 opacity-50 text-xs gap-1 items-center">
//         12:42
//       </div>
//     </div>
//   );
// };

// export default Message;
