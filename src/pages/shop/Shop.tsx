import React, { useState } from "react";
import Card from "../../components/card/Card";
import products from "../../data/products.json";
import './shop.scss';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ShopPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const titleHandler = (event: any) => {
    setTitle(event.target.value);
  }

  const priceHandler = (event: any) => {
    setPrice(event.target.value);
  }

  const descriptionHandler = (event: any) => {
    setDescription(event.target.value);
  }

  const categoryHandler = (event: any) => {
    setCategory(event.target.value);
  }

  const imageHandler = (event: any) => {
    setImage(event.target.value);
  }

  const submitHandler = (event: any) => {
    event.preventDefault();
    products.push({
      id: products.length + 1,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    });
  }

  const [totalPrice, setTotalPrice] = useState(0);
  const updateTotalPrice = (price: number) => {
    setTotalPrice(prevTotalPrice => parseFloat((prevTotalPrice + price).toFixed(2)));
  };

  return (
    <div id="shop-page">
      <h1>Shop</h1>

      <h2>Insert product</h2>
      <form className="form" name="product" onSubmit={submitHandler}>
        <input type="text" placeholder="Title" className="title" id="title" name="title" onChange={titleHandler} required />
        <input type="text" placeholder="Price" className="price" id="price" name="price" onChange={priceHandler} required />
        <textarea placeholder="Description" className="description" id="description" name="description" onChange={descriptionHandler} required />
        <select className="category" id="category" name="category" onChange={categoryHandler} required>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="sports">Sports</option>
          <option value="home">Home</option>
          <option value="toys">Toys</option>
        </select>
        <input type="text" placeholder="Image" className="image" id="image" name="image" onChange={imageHandler} required />
        <button type="submit">Send</button>
      </form>

      Total Price: {totalPrice}
      <div className="card-container">
        {/* {products.map(({ id, title, price, description, category, image }) => (
          <Card id={id} title={title} price={price} description={description} category={category} image={image} />
        ))} */}

        {products.map((product) => (
          <Card {...product} key={product.id} updateTotalPrice={updateTotalPrice} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
