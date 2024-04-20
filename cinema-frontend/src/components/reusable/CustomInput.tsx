import React from "react";
import { InputText, InputTextProps } from "primereact/inputtext";
import { Button } from "primereact/button";

interface ICustomInputProps extends InputTextProps {
    label:string;
    handleSubmit?:(event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
    isButtonVisible?:boolean;
}
export default function CustomInput({isButtonVisible = true,handleSubmit,label,...inputprops}:ICustomInputProps) {
    return (
        <form onSubmit={handleSubmit} className="card flex flex-col gap-2 justify-content-center">
            <label className="block text-sm font-medium text-gray-700" htmlFor="adm-pass">{label}</label>
            <InputText {...inputprops} id="adm-pass" />
            {(isButtonVisible && <Button onSubmit={handleSubmit} label="Submit" icon="pi pi-check" className="text-sm w-[100px] border border-black p-2 bg-primary"/>)}
        </form>
    )
}
