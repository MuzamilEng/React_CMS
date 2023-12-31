
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Component/Sidebar';
import { useGlobalContext } from '../UserContext/UserContext';
import TemplatesBar from '../Component/TemplatesBar';
import { useLocation, useParams } from "react-router-dom";


const Home = () => {
  const {setFetchTrigger, templates: createdTemplates, selectTemplate} = useGlobalContext();
  console.log(selectTemplate, 'selectTemplate');
  const [formFields, setFormFields] = useState([]);
  const [dynamicFields, setDynamicFields] = useState([]);
  const [templates, setTemplates] = useState([]);

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [inputField, setInputField] = useState({ label: '', name: '', type: 'input' });
  const [textareaField, setTextareaField] = useState({ label: '', name: '', type: 'textarea' });
  const [buttonField, setButtonField] = useState({ label: '', name: "", type: "button" });
  const [imageField, setImageField] = useState({ label: '', name: '', type: "image" });
  const [checkboxField, setCheckboxField] = useState({ label: '', name: '', type: "checkbox" });
  const [radioField, setRadioField] = useState({ label: '', label2: '', name2: "", name: '', type: "radio" });


  const handleRemoveField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleFieldChange = (index, fieldKey, value) => {
    const updatedFields = [...formFields];
    updatedFields[index] = { ...updatedFields[index], [fieldKey]: value };
    setFormFields(updatedFields);
    console.log(formFields, "updatedFields");
  };

  const handleFileChange = (index, value) => {
    const updatedFields = [...formFields];
    updatedFields[index] = { ...updatedFields[index], name: value };
    setFormFields(updatedFields);
};

  const renderFormFields = () => {
    return formFields.map((field, index) => {
      switch (field?.type) {
        case 'input':
          return (
            <div key={index} className='flex items-center p-2 m-vw'>
              <input
                type="text"
                placeholder='enter label'
                className='p-2 rounded-md focus:outline-none border-[1px] border-gray-400'
                value={field.label}
                onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
              />
              <input
                placeholder={field?.label}
                className='p-2 rounded-md ml-vw border-[1px] focus:outline-none border-gray-400'
                value={field.name}
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              />
              <button onClick={() => handleRemoveField(index)} className='p-2 ml-vw rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'>Remove</button>
            </div>
          );
        case 'textarea':
          return (
            <div key={index} className='flex items-start p-2 m-vw'>
              <input
                type="text"
                placeholder='enter label'
                className='p-2 rounded-md focus:outline-none border-[1px] border-gray-400'
                value={field.label}
                onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
              />
              <textarea
                placeholder={field?.label}
                rows={3}
                cols={23}
                className='p-2 focus:outline-none rounded-md ml-vw border-[1px] border-gray-400'
                value={field.name}
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              ></textarea>
              <button onClick={() => handleRemoveField(index)} className='p-2 ml-vw  rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'>Remove</button>
            </div>
          );
          case 'button' : 
          return (
            <div key={index} className='flex items-center p-2 m-vw'>
            <input
              placeholder={field?.label}
              className='p-2 rounded-md text-center bg-slate-300 focus:outline-none font-medium ml-vw w-6vw border-[1px] border-gray-400'
              value={field.name}
              onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
            />
            <button onClick={() => handleRemoveField(index)} className='p-2 ml-vw rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'>Remove</button>
          </div>
          );
          case 'checkbox':
            return (
                <div key={index} className='flex items-center p-2 m-vw'>
              <input
                type="checkbox"
                className='p-2 w-[1.2vw] h-[1.2vw] rounded-md focus:outline-none border-[1px] border-gray-400'
                value={field.name}
                onChange={(e) => handleFieldChange(index, 'name', e.target.checked)}
              />
              <input
              type='text'
                placeholder='enter label'
                className='p-2 rounded-md ml-vw border-[1px] focus:outline-none border-gray-400'
                value={field.label}
                onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
              />
              <button onClick={() => handleRemoveField(index)} className='p-2 ml-vw rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'>Remove</button>
            </div>
            );
            case 'radio': 
            return (
                <div key={index} className='flex items-center p-2 m-vw'>
                    <div className="flex justify-between items-center">
                        <section className="flex items-center">
                        <input
                            type="radio"
                            className='p-2 w-[1.2vw] h-[1.2vw] rounded-md focus:outline-none border-[1px] border-gray-400'
                            value={field.name}
                            onChange={(e) => handleFieldChange(index, 'name', e.target.checked)}
                        />
                        <input
                        type='text'
                            placeholder='enter label'
                            className='p-2 rounded-md ml-vw border-[1px] focus:outline-none border-gray-400'
                            value={field.label}
                            onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
                        />
                        </section>
                        <section className="flex items-center ml-vw">
                        <input
                            type="radio"
                            className='p-2 w-[1.2vw] h-[1.2vw] rounded-md focus:outline-none border-[1px] border-gray-400'
                            value={field.name2}
                            onChange={(e) => handleFieldChange(index, 'name2', e.target.checked)}
                        />
                        <input
                        type='text'
                            placeholder='enter label'
                            className='p-2 rounded-md ml-vw border-[1px] focus:outline-none border-gray-400'
                            value={field.label2}
                            onChange={(e) => handleFieldChange(index, 'label2', e.target.value)}
                        />
                        </section>
                    </div>
              <button onClick={() => handleRemoveField(index)} className='p-2 ml-vw rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'>Remove</button>
            </div>
            );
            case 'image' : 
            return (
                <div key={index} className='flex items-center p-2 m-vw'>
                  <div className="flex flex-col items-center p-2">
                  {field.name && (
                    <img
                        src={field.name}
                        alt='uploaded'
                        className='-ml-5vw h-[20vw] w-[20vw] object-cover rounded-md border-[1px] border-gray-400'
                    />
                )}
                <div className="flex items-center">
                <input
                    type='file'
                    className='p-2 rounded-md mt-2vw ml-vw border-[1px] focus:outline-none border-gray-400'
                    onChange={(e) => handleFileChange(index, URL.createObjectURL(e.target.files[0]))}
                />
                 <button onClick={() => handleRemoveField(index)} className='p-2 ml-vw mt-2vw rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'>Remove</button>

                </div>
                  </div>
            </div>
        );

        default:
          return null;
      }
    });
  };

    useEffect(() => {
        console.log(formFields, 'formFields');
    }, [formFields]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputField?.label && inputField?.name) {
            console.log(inputField, 'inputFieldvsgvfyug8w4YR289Y');
        }
        try {
            await setDynamicFields(formFields);
            const response = await axios.post('http://localhost:5000/api/v1/component', {
                componentName: 'TestComponent',
                attributes: formFields,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addToTemplate = async () => {
      const mainTitle = prompt('Enter template Page name:');
      const templateName = prompt('Enter a name for the template:');
    
      if (templateName) {
        try {
          // Send a POST request to save the template in the database
          const response = await axios.post('http://localhost:5000/api/v1/templates', {
            mainTitle: mainTitle,
            templates: [
              {
                name: templateName,
                fields: formFields,
              },
            ],
          });
    
          console.log(response.data);
    
          // Assuming response.data.templates is an array
          setTemplates(prevTemplates => [
            ...prevTemplates,
            { _id: response.data._id, name: templateName, fields: formFields },
          ]);
    
          setFetchTrigger(prevTrigger => prevTrigger + 1); // Trigger re-fetch
          setFormFields([]); // Clear formFields after adding to template
        } catch (error) {
          console.error(error);
        }
      }
    };
    

  
    const renderTemplateFields = () => {
      if (selectedTemplate) {
        return renderFormFields(selectedTemplate.fields);
      }
      return null;
    };
  

    const onInputClick = () => {
        setFormFields([...formFields, inputField]);
        setInputField({ label: '', name: '', type: 'input' });

    };
    const onTextareaClick = () => {
        setFormFields([...formFields, textareaField]);
        setTextareaField({ label: '', name: '', type: 'textarea' });
    };
    const onButtonClick = () => {
        setFormFields([...formFields, buttonField]);
        setButtonField({ label: '', name: '', type: 'button' });
    };

    const onCheckboxClick = () => {
        setFormFields([...formFields, checkboxField]);
        setCheckboxField({ label: '', name: '', type: 'checkbox' });
    };

    const onRadioClick = () => {
        setFormFields([...formFields, radioField]);
        setRadioField({ label: '', name: '', type: 'radio', label2: '', name2: ''});
    };
    const onImageClick = () => {
        setFormFields([...formFields, imageField]);
        setImageField({ label: '', name: '', type: 'image' });
    };
   
    return (
        <div>
            <div className="flex">
                <Sidebar onInputClick={onInputClick} onImageClick={onImageClick} onRadioClick={onRadioClick} onTextareaClick={onTextareaClick} onButtonClick={onButtonClick} onCheckboxClick={onCheckboxClick} />
                <div className="">
                <div>
      {/* <h2>Fields for Template: {selectedTemplateName}</h2> */}
      {selectTemplate?.fields?.map((field, index) => (
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
          {/* <h1 className='text-3xl font-bold text-center p-3'>Danhamz Practice Form Builder</h1> */}
          {/* <h1 className='text-3xl font-bold text-center p-3'>Form Builder</h1> */}
          <div className="flex">
            <form className="" onSubmit={handleSubmit}>
              {renderFormFields(formFields)}
              <button type="submit" className='p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-semibold m-[2vw]'>Submit</button>
            </form>
            <div>
              <button onClick={addToTemplate} className='p-2 rounded-md bg-green-500 hover:bg-green-700 text-vw text-white font-semibold m-[2vw]'>Add to Template</button>
              {renderTemplateFields()}
            </div>
            <div className="absolute top-0 right-0">
              <TemplatesBar />
            </div>
          </div>
        </div>
        </div>
      </div>  
    );
};

export default Home

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from '../Component/Sidebar';

// const DynamicFormBuilder = () => {
//   const [formFields, setFormFields] = useState([]);
//   const [dynamicFields, setDynamicFields] = useState([]);
//   const [inputField, setInputField] = useState({ label: '', name: '', type: 'input' });
//   const [textareaField, setTextareaField] = useState({ label: '', name: '', type: 'textarea' });
//   const [buttonField, setButtonField] = useState({ label: '', name: '', type: 'button' });
//   const [imageField, setImageField] = useState({ label: '', name: '', type: 'image' });
//   const [checkboxField, setCheckboxField] = useState({ label: '', name: '', type: 'checkbox' });
//   const [radioField, setRadioField] = useState({ label: '', label2: '', name2: '', name: '', type: 'radio' });

//   const handleRemoveField = (index) => {
//     const updatedFields = [...formFields];
//     updatedFields.splice(index, 1);
//     setFormFields(updatedFields);
//   };

//   const handleFieldChange = (index, fieldKey, value) => {
//     const updatedFields = [...formFields];
//     updatedFields[index] = { ...updatedFields[index], [fieldKey]: value };
//     setFormFields(updatedFields);
//   };

//   const handleFileChange = (index, file) => {
//     const updatedFields = [...formFields];
//     updatedFields[index] = { ...updatedFields[index], name: URL.createObjectURL(file) };
//     setFormFields(updatedFields);
//   };

//   const renderFormFields = () => {
//     return formFields.map((field, index) => (
//       <div key={index} className='flex items-center p-2 m-vw'>
//         {field.type !== 'image' && (
//           <input
//             type={field.type === 'checkbox' ? 'checkbox' : 'text'}
//             placeholder='enter label'
//             className={`p-2 rounded-md focus:outline-none border-[1px] border-gray-400 ${field.type === 'checkbox' ? 'w-[1.2vw] h-[1.2vw]' : ''}`}
//             value={field.label}
//             onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
//           />
//         )}
//         {field.type === 'textarea' && (
//           <textarea
//             placeholder={field.label}
//             rows={3}
//             cols={23}
//             className='p-2 focus:outline-none rounded-md ml-vw border-[1px] border-gray-400'
//             value={field.name}
//             onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
//           ></textarea>
//         )}
//         {field.type === 'image' && (
//           <div className='flex flex-col items-center p-2'>
//             {field.name && (
//               <img
//                 src={field.name}
//                 alt='uploaded'
//                 className='-ml-5vw h-[20vw] w-[20vw] object-cover rounded-md border-[1px] border-gray-400'
//               />
//             )}
//             <div className='flex items-center'>
//               <input
//                 type='file'
//                 className='p-2 rounded-md mt-2vw ml-vw border-[1px] focus:outline-none border-gray-400'
//                 onChange={(e) => handleFileChange(index, e.target.files[0])}
//               />
//               <button
//                 onClick={() => handleRemoveField(index)}
//                 className='p-2 ml-vw mt-2vw rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         )}
//         {field.type !== 'image' && (
//           <button
//             onClick={() => handleRemoveField(index)}
//             className='p-2 ml-vw rounded-md border-[1px] bg-red-500 hover:bg-red-700 text-white font-medium'
//           >
//             Remove
//           </button>
//         )}
//       </div>
//     ));
//   };

//   const handleFieldAddition = (newField) => {
//     setFormFields([...formFields, newField]);
//     // Reset the corresponding field state
//     switch (newField.type) {
//       case 'input':
//         setInputField({ label: '', name: '', type: 'input' });
//         break;
//       case 'textarea':
//         setTextareaField({ label: '', name: '', type: 'textarea' });
//         break;
//       case 'button':
//         setButtonField({ label: '', name: '', type: 'button' });
//         break;
//       case 'image':
//         setImageField({ label: '', name: '', type: 'image' });
//         break;
//       case 'checkbox':
//         setCheckboxField({ label: '', name: '', type: 'checkbox' });
//         break;
//       case 'radio':
//         setRadioField({ label: '', name: '', type: 'radio', label2: '', name2: '' });
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await setDynamicFields(formFields);
//       const response = await axios.post('http://localhost:5000/api/v1/component', {
//         componentName: 'TestComponent',
//         attributes: formFields,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className='flex'>
//         <Sidebar
//           onInputClick={() => handleFieldAddition(inputField)}
//           onTextareaClick={() => handleFieldAddition(textareaField)}
//           onButtonClick={() => handleFieldAddition(buttonField)}
//           onCheckboxClick={() => handleFieldAddition(checkboxField)}
//           onRadioClick={() => handleFieldAddition(radioField)}
//           onImageClick={() => handleFieldAddition(imageField)}
//         />
//         <div className=''>
//           <h1 className='text-3xl text-center p-3'>Dynamic Form Builder</h1>
//           <div className='flex'>
//             <form className='' onSubmit={handleSubmit}>
//               {renderFormFields()}
//               <button type='submit' className='p-2 rounded-md bg-blue-500 hover:bg-blue-700 w-[6vw] text-white font-semibold m-[2vw]'>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicFormBuilder;
