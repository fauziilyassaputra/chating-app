import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
const SearcInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found");
  };
  return (
    <form className="felx items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle bg-sky-500  text-white">
        <IoSearchSharp className=" outline-none" />
      </button>
    </form>
  );
};

export default SearcInput;
// START CODE SNIPPET
// const SearcInput = () => {
//   return (
//     <form className="felx items-center gap-2">
//       <input
//         type="text"
//         placeholder="search..."
//         className="input input-bordered rounded-full"
//       />
//       <button className="btn btn-circle bg-sky-500  text-white">
//         <IoSearchSharp />
//       </button>
//     </form>
//   );
// };

// export default SearcInput;
