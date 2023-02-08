import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './components/About';
import { useState } from 'react';




function App() {
  const [mode, setMode] = useState("light")

  const [color, setColor] = useState("success")

  const handlePrimary = () => {
    setColor("primary")
  }
  const handleWarning = () => {
    setColor("warning")
  }
  const handleDanger = () => {
    setColor("danger")
  }
  const handleInfo = () => {
    setColor("info")
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black"

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"

    }
  }

  return (
    
    <>
    
      <Navbar title='TextUtiles' mode={mode} toggleMode={toggleMode} handlePrimary={handlePrimary} handleWarning={handleWarning} handleDanger={handleDanger} handleInfo={handleInfo} color={color} />
      
      <div className='my-4 '>
          <TextForms heading={"Enter text below"} color={color} mode={mode} />
          {/* <About mode={mode} /> */}
          
      </div>

      
    </>
  );
}



export default App;
