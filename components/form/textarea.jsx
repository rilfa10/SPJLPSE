import { useState } from 'react';
import './formadd.css';

export default function TextArea(props) {
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div>
            <label className="my-2 text-lg">{props.label}</label>
            <textarea
                name={props.name}
                value={props.value || ""}
                onChange={props.change}
                className="rounded-lg w-full p-2 my-2 select select-bordered"
                required={Boolean(props.required)}
                onBlur={handleFocus}
                focused={focused.toString()}
            >

            </textarea>
            <span className='tetx-nomal mb-2 text-red-600 hidden'>
                {props.errorMessage}
            </span>
        </div>
    )



};
