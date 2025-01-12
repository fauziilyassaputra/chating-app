import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearcInput = () => {
  return (
    <form className="felx items-center gap-2">
      <input
        type="text"
        placeholder="search..."
        className="input input-bordered rounded-full"
      />
      <button className="btn btn-circle bg-sky-500  text-white">
        <IoSearchSharp />
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
