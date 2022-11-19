import React from 'react';

const Greetings = (props) => {
  if (props.lang === 'en') {
    return (
      <div className="greeting">
        <p> Hello {props.children} </p>
      </div>
    );
  } else if (props.lang === 'es') {
    return (
      <div className="greeting">
        <p> Hola {props.children} </p>
      </div>
    );
  } else if (props.lang === 'fr') {
    return (
      <div className="greeting">
        <p> Bonjour {props.children} </p>
      </div>
    );
  } else if (props.lang === 'de') {
    return (
      <div className="greeting">
        <p> Hallo {props.children} </p>
      </div>
    );
  }
};

export default Greetings;
