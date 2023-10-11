import React from 'react'
import style from './colorpicker.module.css'


export const ColorPicker = ({ color, onAdd, }) => {
  

  const onClikAdd = () => { onAdd(color)}

  

  return (
   
      <div className={style.color_box} style={{ background: color.color }}
        onClick={onClikAdd}
      ></div>
   


  )
}
