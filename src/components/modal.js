import React, { useState } from 'react'

export default function modal({title, active}) {
    const [isActive, setIsActive] = useState(active);

    const closeModal = () => {
        setIsActive(false);
    };
  return (
    <>
        <div className={`modal ${isActive ? 'active' : ''}`}>
            <div className='modal-inner'>
                <div className='modal-header'>
                    <div className='modal-toolbar'>
                        <a onClick={closeModal}><span></span></a>
                        <a><span></span></a>
                        <a><span></span></a>
                    </div>
                    <div className='title'>
                        {title}
                    </div>
                </div>
                <div className='modal-body'>
                    
                </div>
            </div>
        </div>
    </>
  )
}
