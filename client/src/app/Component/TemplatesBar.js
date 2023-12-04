import React from "react";
import { useGlobalContext } from "../UserContext/UserContext";

const TemplatesBar = () => {
  const { templates } = useGlobalContext();
  return (
    <div>
      <div className="sidebar bg-gray-700 h-[100vh] p-2 w-full max-w-[20vw]">
        <div className=" w-full max-w-[50vw] p-2vw">
          <main className="mt-vw ">
              <select className="w- p-0.5vw text-vw focus:outline-none rounded-md">
                <option>Home Templates</option>
              {templates?.map((item, index) => (
                <option key={index}>{item?.TemplateName}</option>
              ))}
                </select>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TemplatesBar;


// {item?.attributes.fields?.map((item2, index2) => (
//     <section key={index2}>
//       {item2?.type === "input" ? (
//         <>
//           <label
//             className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
//             htmlFor={item2?.label}
//           >
//             {item2?.label}
//           </label>
//           <input
//             className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
//             placeholder={item2?.label}
//           />
//         </>
//       ) : item2?.type === "textarea" ? (
//         <>
//           <label
//             className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
//             htmlFor={item2?.label}
//           >
//             {item2?.label}
//           </label>
//           <textarea
//             className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
//             placeholder={item2?.label}
//           ></textarea>
//         </>
//       ) : item2?.type === "radio" ? (
//         <>
//           <div className="flex items-center">
//             <section className="flex items-center m-vw">
//               <label
//                 className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
//                 htmlFor={item2?.label}
//               >
//                 {item2?.label}
//               </label>
//               <input
//                 type="radio"
//                 className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
//                 name={item2?.name}
//               />
//               <label className="ml-2">{item2?.label}</label>
//             </section>
//             <section className="flex items-center m-vw">
//               <label
//                 className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
//                 htmlFor={item2?.label2}
//               >
//                 {item2?.label2}
//               </label>
//               <input
//                 type="radio"
//                 className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
//                 name={item2?.name2}
//               />
//               <label className="ml-2">{item2?.label2}</label>
//             </section>
//           </div>
//         </>
//       ) : item2?.type === "checkbox" ? (
//         <div className="flex items-center">
//           {/* <label className='text-vw text-black ml-vw mt-2vw capitalize font-medium' htmlFor={item2?.label}>{item2?.label}</label> */}
//           <input
//             type="checkbox"
//             className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
//             name={item2?.name}
//           />
//           <label className="ml-2">{item2?.label}</label>
//         </div>
//       ) : item2?.type === "image" ? (
//         <div className="flex flex-col items-center p-2">
//           <label
//             className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
//             htmlFor={item2?.label}
//           >
//             {item2?.label}
//           </label>
//           <img
//             src={item2?.name} // Assuming 'name' contains the image URL
//             alt="uploaded"
//             className="h-[50px] w-[50px] object-cover rounded-md m-vw border-2"
//           />
//         </div>
//       ) : null}
//     </section>
//   ))}