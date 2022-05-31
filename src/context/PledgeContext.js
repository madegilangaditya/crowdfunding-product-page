import React from 'react'
import { useState, useEffect, useCallback, createContext } from 'react'

const PledgeContext = createContext()

export const PledgeProvider = ({children}) => {

    const [pledge, setPledge] = useState([
        {
            id:1,
            title : "Pledge with no reward",
            subtitle : "",
            description : "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
            qty : 10,
            price : 0,
        },
        {
            id:2,
            title : "Bamboo Stand",
            subtitle : "Pledge $25 or more",
            description : "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
            qty : 101,
            price : 25,
        },
        {
            id:3,
            title : "Black Edition Stand",
            subtitle : "Pledge $75 or more",
            description : "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            qty : 64,
            price : 75,
        },
        {
            id:4,
            title : "Mahogany Special Edition",
            subtitle : "Pledge $200 or more",
            description : "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            qty : 0,
            price : 200,
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

    // const addPledge = (id) =>{
    //     setPledge(
    //         pledge.map((item) => (item.id === id ? { qty: item.qty - 1} : item))
    //     )
    // }

    // Bookmark state
    const bookmarked = () => {
        setBookmarks(!bookmarks)
    }

    // modal function
    const cardClick = (id) =>{
        setCard(id)
    }

    const cardConfirm = (id, newQty) =>{

        
        setPledge(
            pledge.map((item) => (item.id === id ? { ...item, qty: newQty - 1} : item))
        )
        const pledges =  document.querySelector('.pledge-modal')
        setThankyou(!thankyou)
        pledges.classList.contains('hide') ? pledges.classList.remove('hide') : pledges.classList.add('hide')
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
    }}>
        {children}
    </PledgeContext.Provider>
}



export default PledgeContext