import { useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  // API CALL
  const handleFetch = async () => {
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      console.log(data.products); // [{},{},...]
      setProducts(data.products); // [{},{},...]
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Learn Fetch Api in React</h1>
      <button onClick={handleFetch}>Fetch</button>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <section>
          {products.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} height={300} width={300} />
                <h3>{item.title}</h3>
                <p>{item.description.slice(0,50)}...</p>
                <button>Add to Cart</button>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};
export default ProductsList;
