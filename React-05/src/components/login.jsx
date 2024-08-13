import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" name='username' value={userName} placeholder='User Name...' onChange={(e) => setUserName(e.target.value)} />
            <input type="text" name='password' value={password} placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default login