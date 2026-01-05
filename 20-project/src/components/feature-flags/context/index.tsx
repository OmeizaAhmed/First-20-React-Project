import { useContext } from "react";
import Accordion from "../../accordion";
import ImageSlider from "../../image-slider";
import RandomColor from "../../random-color";
import StarRating from "../../star-rating";
import TicTacToe from "../../tic-tac-toe/TicTacToe";
import { FeatureFlagsContext } from "..";

const componentsToRender = [
  { key: "showAccordion", component: <Accordion /> },
  { key: "showTicTacToe", component: <TicTacToe />},
  { key: "showImageSlide", component: <ImageSlider limit={5} />},
  { key: "showRandomColor", component: <RandomColor />},
  { key: "showStarRating", component: <StarRating />},
];

export default function FeatureFlag() {
  const {loading, enableFlags}:any = useContext(FeatureFlagsContext)
  if (loading) return <div>loading, please wait</div>

  return (<div>
    {enableFlags ? componentsToRender.map(item => enableFlags[item.key]? item.component : null): null}
  </div>)
}


