import React, { useState } from "react";
import './card.scss';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Card = (props: Product & { updateTotalPrice: (price: number) => void }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    props.updateTotalPrice(props.price);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
      props.updateTotalPrice(-props.price);
    }
  };

  return (
    <div id="card" key={props.id}>
      <button className="delete">X</button> 
      <img className="image" src={props.image} alt={props.title} />
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>
      <p className="price">Price: {props.price} €</p>
      <p className="buttons">
        <button className="decrement" onClick={decrement}>-</button>
        {quantity}
        <button className="increment" onClick={increment}>+</button>
      </p>
    </div>
  );
};


export default Card;