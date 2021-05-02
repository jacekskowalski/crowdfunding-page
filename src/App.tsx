import React from 'react';
import Header from "./header";
import Main from "./main";
import './sass/main.scss';

const App: React.FC = () => {
  return (
    <>
    <div className="container">
      <Header />
      <Main />
      </div>
    </>
  );
}

export default App
