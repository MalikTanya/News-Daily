import react,{ useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    width: "50px",
    height: "50px",
    color:  "blue",
  };
  

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("black");

  return (
    <div className="sweet-loading">
      
      
      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </div>
  );
}

export default Spinner;