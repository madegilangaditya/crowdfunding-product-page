import {React, useContext} from 'react'
import Card from './Card'
import PledgeContext from '../context/PledgeContext'

const Cards = ({modalOpen}) => {
    const {pledge} = useContext(PledgeContext)

    return (
        <div className="content-wrap cards">
                {pledge.map((item)=>(
                    
                    <Card key={item.id} item={item} clicked={modalOpen} btnClass={`support${item.id}`} />
                ))}
            
        </div>
    )
}

export default Cards
