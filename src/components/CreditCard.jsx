import React from 'react';

const CreditCard = (props) => {
  const number = props.number.replace(/.(?=.{4})/g, 'x');
  const expirationYear = props.expirationYear.toString().slice(2);

  return (
    <div
      className="creditCard"
      style={{
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
      }}
    >
      <p>{props.type}</p>
      <p>{number}</p>
      <p>
        Expires {props.expirationMonth}/{expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
