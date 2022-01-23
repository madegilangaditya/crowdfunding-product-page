import Header from "./components/Header"
import Home from "./components/Home"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {

  const [showModal, setShowModal] = useState(false)
  const openModalClick = ()=> {
    const bgWrap = document.querySelector('.bg-overlay')  

    setShowModal(!showModal) 
    
    if(!bgWrap.classList.contains('.active')){
      bgWrap.classList.add('active');
    }
  }

  return (
    <div className="App">
      <div className='bg-overlay'></div>
      <Header/>
      <Home btnClick={openModalClick} />
      <Modal onShow={showModal}/>
    </div>
  );
}

export default App;
