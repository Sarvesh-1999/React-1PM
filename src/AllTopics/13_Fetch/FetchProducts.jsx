import React, { useEffect, useState , Fragment } from "react";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const controller = new AbortController()

    async function getProducts() {
      try {
        let resp = await fetch("https://dummyjson.com/products" , {signal :controller.signal });
        let data = await resp.json();
        // console.log(data.products); // [{},{},.....]
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();

    return () => {
        controller.abort("component unmounted API call cancelled")
    }


  }, []);

  return (
    <>
      <h1>Fetch Products</h1>

      {products.map((prod) => {
        let { id, title, description, thumbnail } = prod;
        return (
          <section key={id}>
            <img src={thumbnail} alt={title} height={200} width={200} />
            <h1>{title}</h1>
            <p>{description}</p>
            <button>add to cart</button>
          </section>
        );
      })}
    </>
  );
};

export default FetchProducts;
