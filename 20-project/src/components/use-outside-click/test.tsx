import { useRef, useState } from "react";
import useOutside from ".";

export default function UseOutsideClickTest() {
  const ref = useRef(null);
  const [showContent, setShowContent] = useState(false);
  useOutside(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h3>This is some randon content</h3>
          <p>This container will only close if you click outside of it</p>
        </div>
      ) : (
        <button onClick={()=> setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
