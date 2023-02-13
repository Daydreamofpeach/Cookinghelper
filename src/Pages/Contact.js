import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div><h1>hey, {name},Contact us!</h1>
    <p>Incididunt commodo cupidatat culpa adipisicing veniam proident consequat nisi ex et fugiat veniam anim. Officia reprehenderit officia aute pariatur reprehenderit culpa commodo est anim sunt elit laboris nisi nisi. Esse id incididunt esse aliqua esse tempor aute minim qui veniam commodo excepteur ad minim.</p>
      </div>
    
  )
}
