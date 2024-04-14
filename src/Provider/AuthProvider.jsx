import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [buffering, setBuffering] = useState(true)

  const createUser = (username, email, photoUrl, password) => {
    setBuffering(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setBuffering(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setBuffering(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (observer) => {
      console.log(observer)
      setUser(observer)
      setBuffering(false)
    })

    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    buffering,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export default AuthProvider
