import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from "react"
import { addDoc, collection, docs, getDocs, onSnapshot, doc, setDoc, Firestore } from "firebase/firestore"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebase"


const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("cebrail@gmail.com")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [nickname, setNickname] = useState("")
  const [login, setLogin] = useState(false)
  const [post, setPost] = useState("")

  const values = {
    
    email, setEmail,
    password, setPassword,
    error, setError,
    name, setName, surname, setSurname, nickname, setNickname,setLogin,login,post
  }


  return <FirebaseContext.Provider value={values} >{children}</FirebaseContext.Provider>

}

export default FirebaseContext;