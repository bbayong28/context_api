import React, { useState } from 'react'

const  Thedeepsub= ({ state, setState }) => {
    return (
        <>
            {state} 바보......
            <button onClick={
                () => setState('천재')
            }>천재로 만들기</button>
        </>
    )
}

const Deepsub = ({ state, setState }) => {
    return (
        <Thedeepsub state={state}  setState={setState} />
    )
}

const Sub = ({ state, setState }) => {
    return (
        <>
            <Deepsub state={state} setState={setState} />
        </>
    )
}


const App = () => {
    const [state, setState] = useState("화영")
    return (
        <>
            <Sub state={state} setState={setState} />
        </>
  )
}

export default App
