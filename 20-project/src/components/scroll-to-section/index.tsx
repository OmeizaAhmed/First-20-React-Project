import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const data = [
    {
      label: "First Section",
      style: {
        width: "100%",
        height: "500px",
        background: "red",
      },
    },
    {
      label: "Second Section",
      style: {
        width: "100%",
        height: "500px",
        background: "blue",
      },
    },
    {
      label: "Third Section",
      style: {
        width: "100%",
        height: "500px",
        background: "gray",
      },
    },
    {
      label: "Forth Section",
      style: {
        width: "100%",
        height: "500px",
        background: "yellow",
      },
    },
    {
      label: "Fifth Section",
      style: {
        width: "100%",
        height: "500px",
        background: "green",
      },
    },
    {
      label: "Six Section",
      style: {
        width: "100%",
        height: "500px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    const position = ref?.current?.getBoundingClientRect().top;
    window.scrollTo({ top: position, behavior: "smooth" });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <button
        style={{ width: "fit-content", margin: "0 auto" }}
        onClick={handleScrollToSection}
      >
        click to section
      </button>
      {data?.length
        ? data.map((item, index) => (
            <section
              key={item.label}
              style={item.style}
              ref={3 === index ? ref : null}
            >
              {item.label}
            </section>
          ))
        : null}
    </div>
  );
}
