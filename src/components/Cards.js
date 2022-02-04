import React from 'react'
import Card from './Card'

const Cards = ({modalOpen}) => {
    return (
        <div className="content-wrap cards">
            <Card 
                cardClass = 'card-item-1'
                title = "Bamboo Stand"
                subtitle = "Pledge $25 or more"
                description = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                qty = '101'
                clicked={modalOpen}
                btnClass='support2'
            />

            <Card 
                cardClass = 'card-item-2'
                title = "Black Edition Stand"
                subtitle = "Pledge $75 or more"
                description = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                qty = '64'
                clicked={modalOpen}
                btnClass='support3'
            />

            <Card 
                cardClass = 'card-item-3 out-of-stock'
                title = "Mahogany Special Edition"
                subtitle = "Pledge $200 or more"
                description = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                qty = '0'
            />
            
        </div>
    )
}

export default Cards
