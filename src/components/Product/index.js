import { useState } from "react";
import "./product.css";


function Product(props) {
  const [selected, setSelected] = useState(false);
  const { title, icon, price, updateTotalPrice } = props;

  function handleSelect() {
    const isSelected = !selected;
    if (isSelected) updateTotalPrice(price);
    else updateTotalPrice(price * -1)

    setSelected(isSelected)
  }



  function checkSelected() {
    let classes = "product";
    if (selected) {
      classes = "product selected";
    }
    return classes;
  }

  return (
    <div className="Product">
      <div className={checkSelected()} onClick={handleSelect}>
        <p className="title">{title}</p>
        <p className="icon">{icon}</p>
        <p className="price">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  )
}
export default Product;