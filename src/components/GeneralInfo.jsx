import { useState } from "react"

function GeneralInfo() {
    const [general, setGeneral] = useState(
        {name:'john doe', email:'johndoe@john.com', phone:'7185555555'},
    )
    const [display,setDisplay] = useState(false)

    function toggleInputs(){
        setDisplay((prevDisplay) =>!prevDisplay)
    }
    function handleChange(e){
        const {name, value} = e.target
        setGeneral((prevGeneral) => ({
            ...prevGeneral,
            [name]:value
        }))
    }
  return (
    <div>
        <h1>{general.name}</h1>
        <h2>{general.email}</h2>
        <h2>{general.phone}</h2>
        <button onClick={toggleInputs}>{display ? 'save' :'edit'}</button>
        {display && (
            <div>
                <input type='text' name='name' placeholder='name' value={general.name} onChange={handleChange}></input>
                <input type='text' name='email' placeholder='email' value={general.email} onChange={handleChange}></input>
                <input type='text' name='phone' placeholder='phone' value={general.phone} onChange={handleChange}></input>
                </div>

        )}
    </div>
  )
}

export default GeneralInfo
