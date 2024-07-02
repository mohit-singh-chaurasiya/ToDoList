import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { baseURL } from '../utils/constant';
import axios from 'axios';
const Popup = ({ setShowPopup, popupContent,setUpdateUI }) => {
    const [input, setInput] = useState(popupContent.text)

    const updateTodo = () => {
        axios
            .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
            .then((res) => {
        console.log(res.data)
        setUpdateUI((prevState) => !prevState)
        setShowPopup(false)
            })
    }

    return (
        <div className='backdrop'>
            <div className="popup">
                <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
                <h1  >Update ToDo</h1>
                <div className="popup_input_holder">
                    <input value={input} className='input'
                        onChange={(e) => setInput(e.target.value)}
                        type='text' placeholder='Update ToDo...' />
                    <button   onClick={updateTodo}>Update</button>

                </div>
            </div>
        </div>
    )
}

export default Popup