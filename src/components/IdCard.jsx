import React from 'react';

const IdCard = (props) => {
  return (
    <div className="idCard">
      <header>
        <img src={props.picture} alt="" />
      </header>
      <section>
        <p className="firstName">
          <b>First name: </b> {props.firstName}
        </p>
        <p className="lastName">
          <b>Last name: </b>
          {props.lastName}
        </p>

        <p className="gender">
          <b>Gender: </b> {props.gender}
        </p>
        <p className="height">
          <b>Height: </b>
          {props.height}
        </p>
        <p className="birth">
          <b>Birth: </b> {props.birth.toLocaleString()}
        </p>
      </section>
    </div>
  );
};

export default IdCard;
