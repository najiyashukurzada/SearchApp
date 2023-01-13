import React from 'react'
import styled from 'styled-components'
import style from './Main.module.css'

const Main = () => {
    const Input = styled.input`
        width: 500px;
        height: 20px;
        padding: 20px;
        border: 1px solid white;
        border-radius: 10px;
        box-shadow: 0px 5px 10px 0px white;
    `
  return (
    <div>
        <nav className={style.main}>
            <h1>Book Search</h1>
            <Input 
                type="text"
                placeholder="Find Book"
            />
        </nav>
        <main>
            <h1 className={style.show}>
                Nothing to show!?
            </h1>
        </main>
    </div>
  )
}

export default Main