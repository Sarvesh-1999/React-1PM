const ProductsList = () => {

    // API CALL
  const handleFetch = async () => {
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Learn Fetch Api in React</h1>
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
};
export default ProductsList;
