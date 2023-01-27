import React, { useState } from "react";

const productList = [
  {
    id: "P1",
    productName: "Keyboard",
    stock: 10,
    price: 2000,
  },
  {
    id: "P2",
    productName: "Mouse",
    stock: 5,
    price: 1500,
  },
  {
    id: "P3",
    productName: "Headphone",
    stock: 15,
    price: 2500,
  },
];

const TableRow = ({
  id,
  name,
  stock,
  price,
  quantity,
  total,
  increment,
  decrement,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={quantity === stock} onClick={() => increment(id)}>
          +
        </button>
        <button disabled={quantity === 0} onClick={() => decrement(id)}>
          -
        </button>
      </td>
    </tr>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState(
    productList.map((item) => ({
      ...item,
      quantity: 0,
      total: 0,
    }))
  );

  const incrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const decrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.quantity > 0) {
          product.quantity--;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow
            key={product.id}
            id={product.id}
            name={product.productName}
            stock={product.stock}
            price={product.price}
            quantity={product.quantity}
            total={product.total}
            increment={incrementQuantity}
            decrement={decrementQuantity}
          />
          ))}
        </tbody>
      </table>
      {total > 0 && <p>Total: {total}</p>}
    </div>
  );
};

export default ProductList;
