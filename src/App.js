import React, {useState} from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DarkProvider } from "./contexts/DarkContext";
import Component2 from "./components/Component2";
import ButtonDM from "./components/ButtonDM";
import ContentDM from "./components/ContentDM";



function App() {
  const [theme,setTheme] = useState("lightmode");

  function handleTheme(){
    const newTheme = theme == "lightmode" ? "darkmode" : "lightmode";
    setTheme(newTheme);
  }
  return (
    <DarkProvider value={theme}>
    <ButtonDM handleTheme={handleTheme}/>
    <ContentDM/>
 </DarkProvider>
  )
}

export default App;