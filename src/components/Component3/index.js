import React,{useContext} from 'react';
import ThemeContext from "../../contexts/ThemeContext";


function Component3() {
  const data = useContext(ThemeContext);
  return (
  <>
  
  <p>Hola {data.name} y {data.surname}</p></>
  )
}

// class Component3 extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <div>Hola {this.context}</div>
//    )
//  }
// }

export default Component3;