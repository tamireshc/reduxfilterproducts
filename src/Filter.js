import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters, selectedUnicColors } from "./store/products";

const Filter = () => {
  const colors = useSelector(selectedUnicColors);
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [selectedColors, setSelectedColors] = React.useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: "prices",
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      })
    );
  }, [minPrice, maxPrice, dispatch]);

  React.useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
  }, [selectedColors, dispatch]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(selectedColors.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return selectedColors.includes(cor);
  }

  return (
    <div>
      <h2>Busque seu produto</h2>
      <input
        type="number"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="Valor Mínimo"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="Valor Máximo"
      />

      <div id="checkbox">
        {colors.map((cor) => (
          <label key={cor}>
            <input
              id="checkitem"
              type="checkbox"
              value={cor}
              onChange={handleChange}
              checked={handleChecked(cor)}
            />
            {cor}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
