// https://dummyjson.com/products?limit=20&skip=0
import "./styles.css";
import { useEffect, useState } from "react";
export default function LoadMore() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState<string | null>(null);

  async function getProducts(page: number) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${page * 20}`
      );
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        setErrMessage(e.message);
      } else {
        setErrMessage("Unknown Error");
      }
    }
  }

  useEffect(() => {
    getProducts(count);
  }, [count]);

  function handlePreviousPage() {
    if (count < 1) return;
    setCount((prev) => prev - 1);
  }

  function handleNextPage() {
    if (count > 3) return;
    setCount((prev) => prev + 1);
  }

  if (loading) return <div>Please wait! page is loading</div>;
  if (errMessage) return <div>There is and Error: {errMessage}</div>;

  return (
    <div>
      <div className="container">
        {products.length
          ? products.map(
              (product: {
                thumbnail: string;
                title: string;
                [key: string]: unknown;
              }) => (
                <div>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                </div>
              )
            )
          : null}
      </div>
      <div>
        <button
        onClick={handlePreviousPage}
        disabled={count < 1}>previous</button>
        <span className="page">page: {count + 1}</span>
        <button
        onClick={handleNextPage}
        disabled={count > 3}>next</button>
      </div>
    </div>
  );
}
