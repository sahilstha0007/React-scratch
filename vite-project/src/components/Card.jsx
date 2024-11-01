import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <>
        <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded'>
            <img src={props.photo} className=' ml-8
            h-32 w-32 rounded-full mb-3' alt="" />
            <h1 className='text-2-xl font-semibold mb-4'>{props.username}</h1>
            <h2>{props.city} {props.age}</h2>
            <button className='mt-5 bg-emerald-600 text-white px-4 py-2 rounded font-medium
            '>Add Friend</button>
        </div>
        </>
    )
}

export default Card
