import React, {useContext} from 'react';
import DarkContext from "../../contexts/DarkContext";
import "./style.scss";

function ButtonDM(props) {
  const data = useContext(DarkContext);

 

  return(
  <button onClick={props.handleTheme} className={data}>Cambiar tema</button>
    )
}

export default ButtonDM;