import React, { useState, useRef, useEffect } from 'react';
import Header from "./header";
import Main from "./main";
import './sass/main.scss';
import imageMobile from "./images/image-hero-mobile.jpg";
import imagePC from "./images/image-hero-desktop.jpg";
const App: React.FC = () => {
  const [height, setHeight] = useState(0);
  const ref =  useRef<HTMLImageElement | null>(null);
const topMargin = 88;
  useEffect(() => {
    const nr: any= ref?.current?.clientHeight;
    setHeight(nr -topMargin);
  }, [height])
  return (
    <>
    <div className="container">
    <picture >
       <source srcSet={imagePC} media="(min-width: 720px)" />
       <source srcSet={imageMobile}  />
                <img className="background__image" ref={ref} src={imageMobile} alt="An office desc" />
           </picture>
      <Header menuHeight={height}/>
      <Main />
      </div>
    </>
  );
}

export default App
