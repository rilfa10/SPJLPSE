import { useState } from 'react';
import './formadd.css';
export default function DropdownForm(props) {
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    };
    const jabatan = props.data;

    return (
        <div>
            <label className="my-2 text-lg">{props.label}</label>
            <select 
                name={props.name}
                value={props.value || Number("")}
                onChange={props.change} 
                className="rounded-lg w-full p-2 my-2 select select-bordered"
                required={Boolean(props.required)}
                onBlur={handleFocus}
                focused={focused.toString()}
            >

                <option value=""> Select a Jabatan </option>
                {jabatan.map((Jabatan, index) => (
                    <option value={Jabatan.id} key={index} >{Jabatan.nama}</option>
                ))}

            </select>
            <span className='tetx-nomal mb-2 text-red-600 hidden'>
                {props.errorMessage}
            </span>
        </div>

    )
}