import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex  flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChattApp</span>
        </h1>

        <form action="">
          <div className="">
            <label htmlFor="" className="label  p-2">
              <span className="text-base  label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="">
            <label htmlFor="" className="label  p-2">
              <span className="text-base  label-text">User name</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="">
            <label htmlFor="" className="label  ">
              <span className="text-base  label-text">password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="">
            <label htmlFor="" className="label  ">
              <span className="text-base  label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheckBox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600  mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div className="">
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
// STATER CODE FOR THE SIGN UPCOMPONENT
// const SignUp = () => {
//   return (
//     <div className="flex  flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-blue-500"> ChattApp</span>
//         </h1>

//         <form action="">
//           <div className="">
//             <label htmlFor="" className="label  p-2">
//               <span className="text-base  label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John doe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="">
//             <label htmlFor="" className="label  p-2">
//               <span className="text-base  label-text">User name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="johndoe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="">
//             <label htmlFor="" className="label  ">
//               <span className="text-base  label-text">password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="">
//             <label htmlFor="" className="label  ">
//               <span className="text-base  label-text">Confirm password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           {/* GENDER CHECKBOX GOES HERE */}
//           <GenderCheckBox />
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600  mt-2 inline-block"
//           >
//             {"Don't"} have an account?
//           </a>
//           <div className="">
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
