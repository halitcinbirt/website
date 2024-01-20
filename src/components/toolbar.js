import React, { useEffect, useState } from 'react'
import {ReactComponent as AppleIcon} from './../../public/apple-icon.svg'

export default function toolbar() {

  const [text, setText] = useState('Finder');
  const [svgContent, setSvgContent] = useState('');

  const handleClick = (e) => {
    e.preventDefault;
    setText(e);
  }

  useEffect(() => {
    fetch('./../../../apple-icon.svg')
      .then(response => response.text())
      .then(svgText => {
        setSvgContent(svgText);
      });
  }, []);

  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });
        const dayOfWeek = now.toLocaleString('default', { weekday: 'short' });
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        
        const formattedDate = `${day} ${month} ${dayOfWeek} ${hours}:${minutes}`;
        setCurrentDateTime(formattedDate);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  

  return (
    <>
        <div className='toolbar'>
            <div className='first'>
                <a>
                    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
                </a>
                <a><strong>{text}</strong></a>
                <a onClick={() => { handleClick('About Me');}}>About Me</a>
                <a onClick={() => handleClick('Contact')}>Contact</a>
                <a onClick={() => handleClick('My Projects')}>My Projects</a>
            </div>
            <div className='last'>
                {currentDateTime}
            </div>
        </div>
    </>
  )
}
