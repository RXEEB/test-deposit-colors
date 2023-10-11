import React from 'react'
import { Link } from "react-router-dom";
import style from './header.module.css'

export const Header = () => {
  return (
    <div className={style.header_container}>
      <Link to="/" >Форма</Link> 
      <Link to="/palette" className={style.link}>Палитра</Link> 
    </div>
  )
}
