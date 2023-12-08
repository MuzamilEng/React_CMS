import React, { useState } from "react";
import { useGlobalContext } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";


const TemplatesBar = () => {
  const { templates, setSelectTemplate } = useGlobalContext();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectOption, setSelectOption] = useState(null);
  const navigate = useNavigate();


  const handleTemplateChange = (event) => {
    setSelectOption(event.target.value);
    // setSelectedTemplate(event.target.value);
    setSelectedTemplate(
      templates
        .map((temp) => temp.templates)
        .flat()
        .find((item) => item.name === event.target.value)
    );
  };

  const handleViewFields = () => {
    setSelectTemplate(selectedTemplate);
    // Redirect to the other page with the selected template
  };
  console.log(selectedTemplate, "selectedTemplate");

  return (
    <div>
      <div className="sidebar bg-gray-700 h-[100vh] p-2 w-full max-w-[20vw]">
        <div className=" w-full max-w-[50vw] p-2vw">
          <main className="mt-vw ">
            <div className="w-full p-0.5vw">
              {templates?.map((temp, index) => (
                <div key={index} className="">
                  <p className="text-vw text-white">{temp?.mainTitle}</p>
                  <select
                    className="w- p-0.5vw text-vw focus:outline-none rounded-md"
                    onChange={handleTemplateChange}
                    value={selectedTemplate}
                  >
                    <option value="">Select Template</option>
                    {temp?.templates?.map((item, index) => (
                      <option key={index} value={item?.name}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Render fields based on selected template */}
            {selectedTemplate && (
              <div>
                {templates
                  .map((temp) => temp.templates)
                  .flat()
                  .find((item) => item.name === selectedTemplate)
                  ?.fields?.map((field, index) => (
                    <section key={index}>
             {field?.type === "input" ? (
        <>
          <label
            className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
            htmlFor={field?.label}
          >
            {field?.label}
          </label>
          <input
            className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
            placeholder={field?.label}
          />
        </>
      ) : field?.type === "textarea" ? (
        <>
          <label
            className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
            htmlFor={field?.label}
          >
            {field?.label}
          </label>
          <textarea
            className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
            placeholder={field?.label}
          ></textarea>
        </>
      ) : field?.type === "radio" ? (
        <>
          <div className="flex items-center">
            <section className="flex items-center m-vw">
              <label
                className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
                htmlFor={field?.label}
              >
                {field?.label}
              </label>
              <input
                type="radio"
                className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
                name={field?.name}
              />
              <label className="ml-2">{field?.label}</label>
            </section>
            <section className="flex items-center m-vw">
              <label
                className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
                htmlFor={field?.label2}
              >
                {field?.label2}
              </label>
              <input
                type="radio"
                className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
                name={field?.name2}
              />
              <label className="ml-2">{field?.label2}</label>
            </section>
          </div>
        </>
      ) : field?.type === "checkbox" ? (
        <div className="flex items-center">
          {/* <label className='text-vw text-black ml-vw mt-2vw capitalize font-medium' htmlFor={field?.label}>{field?.label}</label> */}
          <input
            type="checkbox"
            className="p-2 rounded-md m-vw border-2 border-gray-500 focus:outline-none"
            name={field?.name}
          />
          <label className="ml-2">{field?.label}</label>
        </div>
      ) : field?.type === "image" ? (
        <div className="flex flex-col items-center p-2">
          <label
            className="text-vw text-black ml-vw mt-2vw capitalize font-medium"
            htmlFor={field?.label}
          >
            {field?.label}
          </label>
          <img
            src={field?.name} // Assuming 'name' contains the image URL
            alt="uploaded"
            className="h-[50px] w-[50px] object-cover rounded-md m-vw border-2"
          />
        </div>
      ) : null}
                    </section>
                  ))}
              </div>
            )}

            <button className="p-2 ml-vw rounded-md border-[1px] bg-blue-500 hover:bg-blue-700 text-white font-medium" onClick={handleViewFields}>View Template</button>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TemplatesBar;
