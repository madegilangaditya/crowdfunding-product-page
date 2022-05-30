import React from 'react'
import { useState, useEffect, useCallback, createContext } from 'react'

const PledgeContext = createContext()

export const PledgeProvider = ({children}) => {

    const [pledge, setPledge] = useState([
        {
            id:2,
            title : "Bamboo Stand",
            subtitle : "Pledge $25 or more",
            description : "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
            qty : 101,
        },
        {
            id:3,
            title : "Black Edition Stand",
            subtitle : "Pledge $75 or more",
            description : "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            qty : 64,
        },
        {
            id:4,
            title : "Mahogany Special Edition",
            subtitle : "Pledge $200 or more",
            description : "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            qty : 0,
        }
    ])

    const [showModal, setShowModal] = useState(false)
    const [bookmarks, setBookmarks] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [thankyou, setThankyou] = useState(false)
    const [card, setCard] = useState()

    // Header fuction
    const menuClicked = ()=>{
        const menuWrap = document.querySelector('.main-navigation-wrap')
        const bgWrap = document.querySelector('.bg-overlay')
        
        bgWrap.classList.toggle('active')
        menuWrap.classList.toggle('active')
        setOpenMenu(!openMenu)
    }

    const openModalClick = useCallback(()=> {
        const modal =  document.querySelector('.pledge-modal')
        setShowModal(!showModal)
        setTimeout(()=>modal.classList.remove('hide'),1000) 
    },[showModal])

    useEffect(() => {
        setThankyou(false)
        
    }, [openModalClick])

    const addPledge = (id) =>{
        setPledge(
            pledge.map((item) => (item.id === id ? { qty: item.qty - 1} : item))
        )
    }

    // Bookmark state
    const bookmarked = () => {
        setBookmarks(!bookmarks)
    }

    // modal function
    const cardClick = (id) =>{
        setCard(id)
    }

    const cardConfirm = () =>{
        const pledge =  document.querySelector('.pledge-modal')
        setThankyou(!thankyou)
        pledge.classList.contains('hide')?pledge.classList.remove('hide'):pledge.classList.add('hide')
    }

    

    

    return <PledgeContext.Provider value={{
        pledge,
        showModal,
        bookmarks,
        openMenu,
        card,
        thankyou,
        cardConfirm,
        cardClick,
        menuClicked,
        bookmarked,
        openModalClick,
        addPledge,
    }}>
        {children}
    </PledgeContext.Provider>
}



export default PledgeContext