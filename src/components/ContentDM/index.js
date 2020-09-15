import React, {useContext} from 'react';
import "./style.scss";
import DarkContext from "../../contexts/DarkContext";

function ContentDM() {
  const data = useContext(DarkContext);
  return <div className={`content ${data}`}>Hello!</div>
}

export default ContentDM;