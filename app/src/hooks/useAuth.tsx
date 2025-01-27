import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const useAuth = () => {

    const { user, token, login, logout } = useContext(AuthContext)
    return (
        token,
        user,
        login,
        logout
    )
}

export default useAuth