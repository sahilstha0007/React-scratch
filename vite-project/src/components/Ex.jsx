import React from 'react'
import EX2 from './EX2'

const Ex = (props) => {
    return (
        <>
        <div>

        Example is {props.name}
        </div>
        <EX2 user ={props.name} />
        </>
    )
}

export default Ex
