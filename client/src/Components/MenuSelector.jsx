import React from 'react'
import Foods from './Foods.jsx'
import Drinks from './Drinks.jsx'

const MenuSelector = ({menu}) => {
  return (
    <>
    {menu == 'Foods'?
        <Foods menu={menu}/>: menu=='Drinks' ?<Drinks menu={menu}/>:'' 
    }
    </>
  )
}

export default MenuSelector