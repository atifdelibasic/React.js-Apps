import React from 'react'
import '../App.css'

const Header = () => {
    return(
        <header style={ styling }>
            <h1>TodoList</h1>
        </header>
    )
}

const styling = {
    color:'#fff',
    background: '#333',
    padding: '20px',
    textAlign:'center'
}

export default Header;