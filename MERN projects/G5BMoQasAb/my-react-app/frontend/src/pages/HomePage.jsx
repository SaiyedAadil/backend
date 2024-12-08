import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/read");
      const resdata = response.data;
      setProductList(resdata.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <h2>My HomePage</h2>
      {isLoading && productList.length !== 0 ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        productList.length !== 0 &&
        productList.map((product, idx) => (
          <ProductCard key={idx} product={product} getProduct={getProduct} />
        ))
      )}
    </div>
  );
};
