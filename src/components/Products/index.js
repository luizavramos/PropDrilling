import { productsList } from "./products";
import Product from "../Product";
import "./products.css";


function Products(props) {
  const { updateTotalPrice } = props;

  function buildProductsList() {
    return productsList.map(product => {
      return (
        <Product
          key={product.title}
          title={product.title}
          icon={product.icon}
          price={product.price}
          updateTotalPrice={(price) => updateTotalPrice(price)}
        />
      )
    })
  }

  const products = buildProductsList();
  return (
    <div className="Products">
      {products}
    </div>
  )
}

export default Products;