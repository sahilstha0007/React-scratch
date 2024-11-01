import React, { useState } from 'react'
import Card from './Card'

function User() {
    const [username, setUsername] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(username)
        setUsername('')
    }
    return (
        <>
            {/* <div className='flex justify-center'> */}

                <form action="" className='flex items-center gap-6'
                    onSubmit={(e) => { submitHandler(e) }}>
                    <input type="text "
                        placeholder='Enter you username'
                        className='px-4 py-3 text-xl m-5'
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <button className='px-4 py-5 bg-emerald-500 rounded font-semibold text-xl hover:bg-emerald-400 text-white'>Submit</button>
                </form>
                <Card user ={username} />
            {/* </div> */}
        </>
    )
}

export default User
