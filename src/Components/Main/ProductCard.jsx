import { StyledButton } from "../Button/StyledButton";
import { CardProduct } from "./StyledCard";

export function Card({ product, addToCart }) {
  return (
    <CardProduct id={product.id}>
      <div className="cardImage">
        <img src={product.img} />
      </div>
      <div className="productInfo">
        <h4>{product.name}</h4>
        <span>{product.category}</span>
        <p>
          {product.price &&
            new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
        </p>
        <StyledButton
          text="Adicionar"
          className="addButton"
          onClick={() => addToCart(product)}
        />
      </div>
    </CardProduct>
  );
}
