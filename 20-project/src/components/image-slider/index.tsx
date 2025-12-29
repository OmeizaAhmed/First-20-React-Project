import { useState, useEffect } from "react";
import fetchData from "./data.ts";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

type imageObj = {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export default function ImageSlider({ limit = 5 }: { limit: number }) {
  const [images, setImages] = useState<imageObj[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrrentImage] = useState(0);
  const [errMessage, setErrMessage] = useState<string | null>(null);

  async function getImage() {
    try {
      setLoading(true);
      const data = await fetchData(limit);
      setImages(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        setErrMessage(e.message);
        console.error(e.message);
      } else {
        setErrMessage("Unknown Error");
      }
    }
  }

  useEffect(() => {
    getImage();
  }, []);

  function handleLeftClick() {
    setCurrrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleRightClick() {
    setCurrrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }
  if (errMessage) {
    return `There is an Error: ${errMessage}`;
  }
  return (
    <div>
      {loading ? (
        <div>Page is Loading, please wait</div>
      ) : images.length ? (
        <div className="container">
          <span className="left-btn" onClick={handleLeftClick}>
            <BsArrowLeftCircleFill />
          </span>
          {images.map((image: imageObj, index: number) => (
            <img
              src={image.download_url}
              alt={image.url}
              key={index}
              className={`image ${currentImage == image.id ? "" : "hidden"}`}
            />
          ))}
          <span className="right-btn" onClick={handleRightClick}>
            <BsArrowRightCircleFill />
          </span>
          <div className="indicator-container">
            {images.map((image) => (
              <span
                className={`indicator ${
                  image.id === currentImage ? "curr-indicator" : ""
                }`} 
                onClick={() => setCurrrentImage(image.id)}
                key={image.id}
              ></span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
