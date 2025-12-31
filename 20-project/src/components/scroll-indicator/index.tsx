import { useState, useEffect } from "react";

export default function ScrollIndicator({
  url,
  limit,
}: {
  url: string;
  limit: number;
}) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function getItems() {
    try {
      setIsLoading(true);
      const res = await fetch(`${url}?limit=${limit}`);
      const data = await res.json();
      setItems(data.products);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      if (e instanceof Error) {
        setErrMessage(e.message);
      } else {
        setErrMessage("Unknown Error");
      }
    }
  }

  function handleScrollEvent() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    addEventListener("scroll", handleScrollEvent);

    return () => {
      removeEventListener("scroll", handleScrollEvent);
    };
  });

  if (isLoading) return <div>Product Loading! Please wait...</div>;
  if (errMessage) return <div>errMessage</div>;

  return (
    <div>
      <div
        style={{ position: "fixed", width: "100%", backgroundColor: "yellow" }}
      >
        <h1>Scroll Indicator</h1>
        <div
          style={{
            backgroundColor: "green",
            width: `${scrollPercentage}%`,
            height: "3px",
          }}
        ></div>
      </div>

      <div>
        {items.length
          ? items.map(
              (item: { title: string; id: number; [key: string]: unknown }) => (
                <div key={item.id}>{item.title}</div>
              )
            )
          : null}
      </div>
    </div>
  );
}

// https://dummyjson.com/products?limit=20&skip=0
