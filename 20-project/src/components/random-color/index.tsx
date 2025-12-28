import { useState } from "react";
export default function RandomColor() {
  const [colorType, setColorType] = useState('hex')
  const [randomColor, setRandomColor] = useState('#000000')
  const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  function convertToRGB(hex: string){
    let r = hex.slice(1,3);
    let g = hex.slice(3,5);
    let b = hex.slice(5,7);

    const rgb = [r, g, b].map(item => {
      let value = 0
      let count = 1
      for(let i of item){
        value += (hexValues.indexOf(i))* (16 ** count)
        count--
      }
      return value
    })

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
  }

  function handleRandomColor(){
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
      const randIndex = Math.floor(Math.random() * hexValues.length);
      hexColor += hexValues[randIndex];
    }

    setRandomColor(hexColor)   
  }


  return (
    
    <div style={{
      height: "100vh",
      width: "100vw",
      background: randomColor
    }}>

      <div>
        <button onClick={() => setColorType('hex')}>Generate Hex</button>
        <button onClick={() => setColorType('rgb')}>Generate RGB</button>
        <button onClick={handleRandomColor}>Generate RandomColor</button>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
        width: "100vw"
      }}>
        <h2 style={{
          color: "white",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >{colorType === 'hex'? "HEX" : "RGB"} Color</h2>
        <h2 style={{
          color: "white",
          textAlign: "center",
          fontSize: "4rem",
        }}
        >{colorType === 'hex'? randomColor : convertToRGB(randomColor)}</h2>
      </div>
    </div>
  );
}
