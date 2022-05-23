import Header from "./components/Header"
import Home from "./components/Home"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {

  const [showModal, setShowModal] = useState(false)

  const openModalClick = ()=> {
    const pledge =  document.querySelector('.pledge-modal')
    setShowModal(!showModal)
    setTimeout(()=>pledge.classList.remove('hide'),1000) 
  }

  
  

  return (
    <div className="App">
      <div className='bg-overlay'></div>
      <Header/>
      <Home btnClick={openModalClick}/>
      <Modal onShow={showModal} onClose={openModalClick}/>
    </div>
  );
}

export default App;
