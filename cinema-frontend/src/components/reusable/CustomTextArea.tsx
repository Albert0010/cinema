
import React from "react";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";

interface ICustomInputProps extends InputTextareaProps {
}
export default function CustomInput({value,...inputprops}:ICustomInputProps) {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea {...inputprops}/>
        </div>
    )
}
        