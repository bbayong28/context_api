//context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.
import React, { useContext, useState } from 'react'
import { createContext } from 'react'
const Babo = createContext();
//console.log(Babo)

//1. createContext로 Context를 만듦.
//2. 이름.Provider로  하위 구조를 감쌈.
//3. value값을 지정
//4. useContext(이름)으로 불러옴.

const Thedeepsub = () => {
    const {state, setState} = useContext(Babo);
    //console.log(bobo)
    return (
        <>
            화영 {state}
            <button onClick={()=>setState('그녀는...천재!')}>천재인가??</button>
        </>
    )
}

const Deepsub = () => {
    return <Thedeepsub  /> 
}

const Sub = () => {
    return <Deepsub />  
}


const App = () => {
    const [state, setState] = useState("천재")
    return (
        <Babo.Provider value={{state, setState}}>
            <Sub />
        </Babo.Provider>
  )
}

export default App