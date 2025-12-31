import { useState } from "react";
import "./tab.css";

export default function Tabs({
  tabContents,
  onChange,
}: {
  tabContents: { label: string; content: string | React.ReactElement }[];
  onChange: any;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCurrentTab(index: number) {
    setCurrentIndex(index);
  }

  onChange(currentIndex);

  return (
    <div>
      <div className="tab-container">
        {tabContents && tabContents.length
          ? tabContents.map((item, index) => (
              <button key={item.label} onClick={() => handleCurrentTab(index)} className={index === currentIndex? 'active': ''}>
                {item.label}
              </button>
            ))
          : null}
      </div>

      {tabContents && tabContents.length ? (
        <div className="content">{tabContents[currentIndex].content}</div>
      ) : null}
    </div>
  );
}
