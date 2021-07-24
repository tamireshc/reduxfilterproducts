import React from "react";
import { useSelector } from "react-redux";

const filterColors = ({ products }) => {
  const { data, filters } = products;
  const newArray = data.filter(
    (product) =>
      !filters.colors.length || filters.colors.includes(product.color)
  );

  if (!!filters.prices.max || !!filters.prices.min) {
    return newArray.filter((product) => {
      const max = filters.prices.max === 0 ? Infinity : filters.prices.max;
      return product.price <= max && product.price >= filters.prices.min;
    });
  }
  return newArray;
};

const Products = () => {
  const data = useSelector(filterColors);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ id, name, color, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{color}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
