import { StyledContainer } from "../../globalStyles";
import { Card } from "./ProductCard";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { MainContainer } from "./StyledCard";
import { Header } from "../Header/Header";

export function Main() {
  const [productsList, setProductsList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      const updatedQuantities = { ...itemQuantities };
      updatedQuantities[product.id] += 1;
      setItemQuantities(updatedQuantities);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: prevQuantities[product.id]
          ? prevQuantities[product.id] + 1
          : 1,
      }));
    }
  };

  const filteredProducts = productsList.filter((product) =>
    product.name.toUpperCase().includes(inputSearch.toUpperCase())
  );

  const handleForm = (inputSearch) => {
    setInputSearch(inputSearch);
  };

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get("/products");
      setProductsList(data);
    }
    loadData();
  }, []);

  return (
    <>
      <Header
        callback={handleForm}
        cartItems={cartItems}
        setCartItems={setCartItems}
        itemQuantities={itemQuantities}
        setItemQuantities={setItemQuantities}
      />

      <MainContainer>
        <StyledContainer>
          <ul>
            {filteredProducts.map((product) => (
              <Card product={product} key={product.id} addToCart={addToCart} />
            ))}
          </ul>
        </StyledContainer>
      </MainContainer>
    </>
  );
}
