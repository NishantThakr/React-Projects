import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/nishantthakr`).then(res => res.json()).then(data => { console.log(data); setData(data) })
    }
        , [])
    return (
        <div className=' flex items-center text-center m-4 bg-gray-600 text-white text-3xl'>
            <img src={data.avatar_url} className=' m-2 w-52 h-52 rounded-r-full' alt="github_profile_pic" />
            Github Bio: {data.bio}

        </div>
    )
}

export default Github