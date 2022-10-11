import "./Main.scss";

import {data} from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item, index)=>{
        return(
          <Card {...item} key = {index}/>
        )
      })}
    </div>
  );
};

export default Main;
