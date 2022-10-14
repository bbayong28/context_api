import React, { useContext } from 'react'
import { DarkTheme } from './App'

const TheDeepSub = () => {
    const {dark, setDark } = useContext(DarkTheme);
    console.log(dark)
  
    return (
        <>
            <div className='dark_btn'>
                <label htmlFor="btn" className={`Btn ${dark ? 'on' : ''}`}>
                    dark
                </label>
                
                <button id="btn" onClick={
                    () => setDark(!dark)
                }>
                    mode</button>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo soluta natus ipsam expedita! At cum nesciunt libero modi repudiandae, tempora qui ab consequuntur autem voluptatibus consectetur vitae cupiditate placeat!

            </div>
        
        </>
        
    )
}

export default TheDeepSub