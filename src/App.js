import Header from "./components/Header"
import Home from "./components/Home"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {

  const [showModal, setShowModal] = useState(false)
  const openModalClick = ()=> {

    setShowModal(!showModal) 
    
  }

  return (
    <div className="App">
      <div className='bg-overlay'></div>
      <Header/>
      <Home btnClick={openModalClick} />
      <Modal onShow={showModal} onClose={openModalClick}/>
    </div>
  );
}

export default App;
