import React, { useEffect, useState } from "react"
import Axios from "axios"
import  { store, retreive } from "./logic"
// import  from "./logic"
function Main() {

    const [Value, setValue] = useState(0)
    const [Input, setInput] = useState(0)

    useEffect(async () => {
        let res = await retreive()
        setValue(res)


    }, [])

    return (
        <div>
            <h3>Enter value</h3>
            <input onChange={(e)=>{setInput(e.target.value)}}></input>
            <button onClick={async (e) => { console.log(e.target.value); await store(Input) }}>Save</button>
            <h3>Stored value</h3>
            <p>{Value}</p>
        </div>
    )

}
//0x342104442824f1872d3688f2c9a44c5ce189a505

export default Main