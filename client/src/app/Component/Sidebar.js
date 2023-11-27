import React from 'react'
import { Icon } from '@iconify/react';

const Sidebar = ({onButtonClick, onLabelClick, onInputClick, onSelectClick, onCheckboxClick, onRadioClick, onDropdownClick, onTextareaClick, onImageClick}) => {
return (
<div>
<div className="sidebar bg-gray-800 h-[100vh] border-[1px] border-gray-400 p-2 w-full max-w-[20vw]">
<div className="">
<h1 className='text-[2vw] text-center border-b-[1px] border-white text-white font-semibold'>Elements</h1>
<div className="grid mt-[1vw] grid-cols-2 gap-2 items-center">
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onButtonClick}>
<Icon icon="radix-icons:button" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white'>Button</button>
</section>
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onLabelClick}>
<Icon icon="uil:label-alt" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white'>Label</button>
</section>
{/* <Icon icon="streamline:input-box" /> /} */}
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onInputClick}>
<Icon icon="streamline:input-box" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white'>Input</button>
</section>
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onTextareaClick}>
<Icon icon="bi:textarea-resize" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white'>Textarea</button>
</section>
{/* {/ <Icon icon="tabler:checkbox" /> */}
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onCheckboxClick}>
<Icon icon="tabler:checkbox" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white'>Checkbox</button>
</section>
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onRadioClick}>
<Icon icon="ri:radio-button-line" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white'>Radio Button</button>
</section>
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onDropdownClick}>
<Icon icon="octicon:multi-select-16" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white'>Select</button>
</section>
<section className='p-[.4vw] cursor-pointer flex flex-col items-center' onClick={onImageClick}>
<Icon icon="clarity:image-line" className='text-[2.5vw] text-white' />
<button className='text-[1vw] text-white' type='file'>Image</button>
</section>
</div>
</div>
</div>
</div>
)
}

export default Sidebar