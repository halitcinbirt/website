import React, { useEffect, useState } from 'react'

export default function desktop() {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('desktop-data.json')
      .then(response => response.json())
      .then(data => setLinks(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
        <div className='desktop'>
            <div className='list'>
            {links
            .filter(link => link.dock === false)
            .map((link, index) => (
                <a key={index} href={link.link} target='_blank' rel='noopener noreferrer'>
                <img src={link.icon} alt={link.text} />
                <span className='text'>{link.text}</span>
                </a>
            ))}
            </div>
        </div>
    </>
  )
}
