import {convertRemToPixels, useWindowDimensions} from "../../utils/index";
import "./trend.css"

/**
 * Generates a trending bar
 * Not shown when the window is smaller than 58rem in width
 * @returns a nav bar
 */
export default function Trend() {
  const { height, width } = useWindowDimensions();

  return width > convertRemToPixels(58) ? 
  (
    <div className="trend-container">
      Stuff?
    </div>  
  ) : <></>;
}
