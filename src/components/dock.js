import React, { useEffect, useState } from 'react'

export default function dock() {

    const [links, setLinks] = useState([]);

    useEffect(() => {
    fetch('desktop-data.json')
        .then(response => response.json())
        .then(data => setLinks(data))
        .catch(error => console.error('Error:', error));
    }, []);

    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });

  return (
    <>
        <div className='dock'>
            <div className='dock-inner'>
                <div className='list'>
                {links
                .filter(link => link.dock === true)
                .map((link, index) => (
                    <a key={index} href={link.link} target='_blank' rel='noopener noreferrer'>
                        <img src={link.icon} alt={link.text} />
                        <span className='text'>
                            <span></span>
                            {link.text}
                        </span>
                    </a>
                ))}
                <a className='calendar' href="https://calendly.com/halitcinbirt/30min" target='_blank'>
                    <div className='month'>{month}</div>
                    <div className='day'>{day}</div>
                </a>
                </div>
            </div>
        </div>
    </>
  )
}
