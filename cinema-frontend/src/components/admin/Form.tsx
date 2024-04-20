"use client"
import { loginAdmin } from "@/api/admin/login";
import CustomInput from "@/components/reusable/CustomInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from 'next-client-cookies';
export default function Form (){
    const cookies = useCookies();
    const {push} = useRouter();
    const [password, setPassword] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault();
        const {status} = await loginAdmin(password);
        if(status === 201){
            cookies.set('auth', "true")
            push("/admin/rooms");
        }
    }
    return (
        <div className="flex items-center w-full h-full mt-6 ml-2">
            <CustomInput handleSubmit={handleSubmit} type="password" label="Please Write password" className="border border-black p-2" value={password} onChange={handleChange} />
        </div>
    );
};
