import Header from "./components/Header"
import Home from "./components/Home"
import Modal from "./components/Modal"
// import { useContext } from "react"
import { PledgeProvider } from "./context/PledgeContext"
// import PledgeContext from './context/PledgeContext'

function App() {

  // const [showModal, setShowModal] = useState(false)

  // const openModalClick = ()=> {
  //   const pledge =  document.querySelector('.pledge-modal')
  //   setShowModal(!showModal)
  //   setTimeout(()=>pledge.classList.remove('hide'),1000) 
  // }
  // const { test } = useContext(PledgeContext)

  
  

  return (
    <PledgeProvider>
      <main className="App">
        <div className='bg-overlay'></div>
        <Header/>
        <Home />
        <Modal />
      </main>
    </PledgeProvider>
    
  );
}

export default App;
