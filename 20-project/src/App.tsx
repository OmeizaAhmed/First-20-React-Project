// import Accordion from "./components/accordion"
import "./App.css"
import ImageSlider from "./components/image-slider"
// import RandomColor from "./components/random-color"
// import StarRating from "./components/star-rating"


function App() {

  return (
    <div className="App">
      {/* Accordion Component*/}
      {/* <Accordion /> */}

      {/* Random Color Component*/}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating size={10}/> */}

      {/* Image Slider Component */}
      <ImageSlider limit={5}/>
    </div>
  )
}

export default App
