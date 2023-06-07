import React, { useState, useEffect, useRef } from "react";
import {
  StyledContainerHeader,
  StyledHeader,
  StyledCart,
} from "./StyledHeader";
import cart from "../../assets/images/cart.svg";
import { Logo } from "./Logo";
import lupa from "../../assets/images/lupa.png";
import trash from "../../assets/images/trash.png";

export function Header({
  callback,
  cartItems,
  setCartItems,
  itemQuantities,
  setItemQuantities,
}) {
  const [inputSearch, setInputSearch] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(inputSearch);
  };

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseModal = () => {
    setIsCartOpen(false);
  };

  const handleRemoveAllItems = () => {
    setCartItems([]);
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  const removeAllItems = () => {
    setItemQuantities({});
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledContainerHeader>
        <Logo />
        <div className="cartContainer">
          <div className="cart" onClick={handleCartClick}>
            <span>
              {Object.values(itemQuantities).reduce((total, quantity) => total + quantity, 0) || 0}
            </span>
            <StyledCart src={cart} alt="imagem de um carrinho de compras" />
          </div>
          <div className="inputContainer">

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Digitar pesquisa"
            value={inputSearch}
            onChange={handleInputChange}
          />
          <button type="submit">
            <img src={lupa} alt="buscar" />
          </button>
          </div>
        </div>
      </StyledContainerHeader>
      {isCartOpen && (
        <div className="modal">
          <div className="modal-content" ref={ref}>
            <div className="modalHeader">
              <span className="close" onClick={handleCloseModal}>
                X
              </span>
              <h3>Carrinho de compras</h3>
            </div>
            <ul>
              {cartItems.length === 0 ? (
                <div className="cartEmpty">
                  Nenhum item foi adicionado ao carrinho
                </div>
              ) : (
                <ul>
                  {cartItems.map((product) => (
                    <li key={product.id}>
                      <div className="cardImage">
                        <img src={product.img} className="productImage" />
                      </div>
                      <div className="productInfo">
                        <h4>{product.name}</h4>
                        <div>
                          <button onClick={() => decreaseQuantity(product.id)}>
                            -
                          </button>
                          <span>{itemQuantities[product.id]}</span>
                          <button onClick={() => increaseQuantity(product.id)}>
                            +
                          </button>
                        <button className="buttonRemove" onClick={() => {handleRemoveItem(product.id); decreaseQuantity(product.id);}}>
                          <img src={trash} alt="Remover" />
                        </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
            <footer>
              <div className="footerContainer">
                <p>Total</p>
                <span>
                  {cartItems
                    .reduce(
                      (total, item) =>
                        total + item.price * (itemQuantities[item.id] || 1),
                      0
                    )
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </span>
              </div>
              <button className="removeButton" onClick={() => { handleRemoveAllItems(); removeAllItems(); }}>
                Remover todos
              </button>
            </footer>
          </div>
        </div>
      )}
    </StyledHeader>
  );
}
